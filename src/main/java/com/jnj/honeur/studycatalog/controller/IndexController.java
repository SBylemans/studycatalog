package com.jnj.honeur.studycatalog.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class IndexController {

    @GetMapping("/studycatalog")
    public String index(){
        return "index";
    }
}
