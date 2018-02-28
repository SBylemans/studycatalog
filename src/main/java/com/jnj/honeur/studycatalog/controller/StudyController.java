package com.jnj.honeur.studycatalog.controller;

import com.jnj.honeur.studycatalog.model.Study;
import com.jnj.honeur.studycatalog.model.User;
import com.jnj.honeur.studycatalog.service.StudyService;
import com.jnj.honeur.studycatalog.service.UserService;
import io.buji.pac4j.subject.Pac4jPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin()
public class StudyController {
    private static final Logger LOG = LoggerFactory.getLogger(StudyController.class);


    private UserService userService;
    private StudyService studyService;

    public StudyController(@Autowired UserService userService, @Autowired StudyService studyService) {
        this.userService = userService;
        this.studyService = studyService;
    }

    @GetMapping("/users")
    public List<User> getUsers(Pac4jPrincipal principal){
        return this.userService.getAllUsersButCurrent(Integer.parseInt(principal.getProfile().getAuthenticationAttribute("id", String.class)));
    }

    @GetMapping("/user")
    public User getUser(Pac4jPrincipal principal) {
        return userService.getUser(Integer.parseInt(principal.getProfile().getAuthenticationAttribute("id", String.class)));
    }

    @GetMapping("/study")
    public List<Study> getStudies(Pac4jPrincipal principal){
        return studyService.getStudies(getUser(principal));
    }

    @PostMapping(value = "/study", consumes = "application/json", produces = "application/json")
    public Study createStudy(@RequestBody final Study study){
        this.userService.createStudy(study);
        return this.studyService.createStudy(study);
    }

}
