package com.EZedu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@RestController
public class BaseController {
    @GetMapping("/")
    public void base(HttpServletResponse response) throws IOException {
        response.sendRedirect("/EZ Education.html");
    }
}
