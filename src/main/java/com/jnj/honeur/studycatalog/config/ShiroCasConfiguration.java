package com.jnj.honeur.studycatalog.config;

import com.jnj.honeur.security.CasAuthorizationGenerator;
import io.buji.pac4j.filter.CallbackFilter;
import io.buji.pac4j.filter.SecurityFilter;
import io.buji.pac4j.realm.Pac4jRealm;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.cache.CacheManager;
import org.apache.shiro.cache.MemoryConstrainedCacheManager;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.spring.config.web.autoconfigure.ShiroWebAutoConfiguration;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.spring.web.config.DefaultShiroFilterChainDefinition;
import org.apache.shiro.spring.web.config.ShiroFilterChainDefinition;
import org.apache.shiro.subject.Subject;
import org.pac4j.cas.client.CasClient;
import org.pac4j.cas.config.CasConfiguration;
import org.pac4j.cas.config.CasProtocol;
import org.pac4j.core.config.Config;
import org.pac4j.core.matching.Matcher;
import org.pac4j.core.matching.PathMatcher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ShiroCasConfiguration extends ShiroWebAutoConfiguration {


    private static Logger log = LoggerFactory.getLogger(ShiroCasConfiguration.class);

    @ExceptionHandler(AuthorizationException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public String handleException(AuthorizationException e, Model model) {

        // you could return a 404 here instead (this is how github handles 403, so the user does NOT know there is a
        // resource at that location)
        log.warn("AuthorizationException was thrown", e);

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("status", HttpStatus.FORBIDDEN.value());
        map.put("message", "No message available");
        model.addAttribute("errors", map);

        return "error";
    }

    @ModelAttribute(name = "subject")
    public Subject subject() {
        return SecurityUtils.getSubject();
    }

    @Bean
    public Realm realm() {
        /*return new AuthenticatingRealm() {
            @Override
            protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
                return new SimpleAuthenticationInfo(token.getPrincipal(), token.getCredentials(), "CasRealm");
            }
        };*/
        return new Pac4jRealm();
    }

    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean(SecurityManager securityManager, Config pack4jConfig) {
        ShiroFilterFactoryBean shiroFilter = new ShiroFilterFactoryBean();
        shiroFilter.setSecurityManager(securityManager);

        shiroFilter.getFilters().put("callbackFilter", callbackFilter(pack4jConfig));
        shiroFilter.getFilters().put("corsFilter", corsFilter());

        shiroFilter.setFilterChainDefinitionMap(shiroFilterChainDefinition().getFilterChainMap());

        shiroFilter.setLoginUrl("/api/**");
        shiroFilter.setSuccessUrl("/api/users");
        shiroFilter.setUnauthorizedUrl( "/api/users");

        return shiroFilter;
    }

    @Bean
    public ShiroFilterChainDefinition shiroFilterChainDefinition() {
        DefaultShiroFilterChainDefinition chainDefinition = new DefaultShiroFilterChainDefinition();
//        chainDefinition.addPathDefinition("/login", "authc"); // need to accept POSTs from the login form
//        chainDefinition.addPathDefinition("/logout", "logout");
        chainDefinition.addPathDefinition("/api/**", "authc, corsFilter");
        chainDefinition.addPathDefinition("/callback", "callbackFilter");
//        chainDefinition.addPathDefinition("/protected/**", "authc");
//        chainDefinition.addPathDefinition("/api/**", "corsFilter");
//        chainDefinition.addPathDefinition("/public/**", "anon");
        chainDefinition.addPathDefinition("/**", "anon");


        //chainDefinition.addPathDefinition("/**", "anon");
        return chainDefinition;
    }

    @Bean
    public ShiroCasLogoutHandler casLogoutHandler() {
        return new ShiroCasLogoutHandler();
    }

    @Bean
    public CasConfiguration casConfiguration() {
        CasConfiguration casConfig = new CasConfiguration();
        casConfig.setLoginUrl("https://localhost:8443/cas/login");
        casConfig.setLogoutHandler(casLogoutHandler());
        casConfig.setRenew(false);
        casConfig.setProtocol(CasProtocol.CAS30);
        return casConfig;
    }

    @Bean
    public CasClient casClient() {
        CasClient casClient = new CasClient();
        casClient.setName("CasClient");
        casClient.setIncludeClientNameInCallbackUrl(true);
        casClient.setConfiguration(casConfiguration());
        casClient.setAuthorizationGenerator(new CasAuthorizationGenerator<>());
        return casClient;
    }

    @Bean
    public String callBackUrl() {
        return "http://localhost:9996/callback";
    }


    @Bean
    public Config pack4jConfig(@Value("${studycatalog.security.enabled}") boolean securityEnabled) {
        Config config = new Config(callBackUrl(), casClient());
        if(securityEnabled){
            config.addMatcher("excludedPath", excludedPathMatcherProduction());
        } else {
            config.addMatcher("excludedPath", excludedPathMatcherTesting());
        }
        return config;
    }

    @Bean
    public SecurityFilter casSecurityFilter(Config pack4jConfig) {
        SecurityFilter securityFilter = new SecurityFilter();
        securityFilter.setConfig(pack4jConfig);
        securityFilter.setClients("CasClient");
        securityFilter.setMatchers("excludedPath");
        return securityFilter;
    }

    //Do not make @Bean! (AutoConfig problems)
    public CallbackFilter callbackFilter(Config pack4jConfig) {
        CallbackFilter callbackFilter = new CallbackFilter();
        callbackFilter.setConfig(pack4jConfig);
        //callbackFilter.setMultiProfile(true);
        callbackFilter.setDefaultUrl("/index.html");
        return callbackFilter;
    }

    public Matcher excludedPathMatcherProduction() {
        return new PathMatcher();
    }


    public Matcher excludedPathMatcherTesting() {
        return new PathMatcher()
                .excludeRegex("^.*$");
    }

    public CorsFilter corsFilter(){
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", new CorsConfiguration().applyPermitDefaultValues());
        return new CorsFilter(source);
    }

    @Bean
    protected CacheManager cacheManager() {
        return new MemoryConstrainedCacheManager();
    }
}
