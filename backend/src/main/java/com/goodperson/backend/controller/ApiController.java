package com.goodperson.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    @GetMapping("/api/hello")
    public Map<String, Object> hello() {
        Map<String, Object> map = new HashMap<>();
        map.put("message", "Welcome. I am Spring boot Server");
        return map;
    }
}