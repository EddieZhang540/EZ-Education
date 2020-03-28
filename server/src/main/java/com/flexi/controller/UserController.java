package com.flexi.controller;

import com.flexi.model.Response;
import com.flexi.model.Role;
import com.flexi.model.User;
import com.flexi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping("/role")
    public List<Role> getAllRoles(){
        return userService.getAllRoles();
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public Response create(@RequestBody User user) { return userService.create(user); }

    @RequestMapping(value = "/user", method = RequestMethod.PUT)
    public Response update(@RequestBody User user) { return userService.update(user); }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public Response delete(@PathVariable Long id) { return userService.delete(id); }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public List<User> find(){ return userService.getAllUsers();}

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public User findById(@PathVariable Long id){ return userService.getUserById(id);}
}
