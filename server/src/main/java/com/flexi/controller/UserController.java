package com.flexi.controller;

import com.flexi.module.Role;
import com.flexi.module.User;
import com.flexi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("/user/current")
    @PreAuthorize("hasRole('client')")
    public User currentUserName() {
        return userService.getCurrentUser();
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(User user) {
        return userService.create(user);
    }

    @RequestMapping("/role")
    public List<Role> getAllRoles(){
        return userService.getAllRoles();
    }

}
