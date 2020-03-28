package com.flexi.service;

import com.flexi.dao.RoleDao;
import com.flexi.dao.UserDao;
import com.flexi.model.Response;
import com.flexi.model.Role;
import com.flexi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {
    @Autowired
    UserDao userDao;
    @Autowired
    RoleDao roleDao;

    public User getUserById(Long id) {
        return userDao.getUserById(id);
    }

    public Response create(User user) {
        Response response = new Response();

//        User loadUserByUsername = userDao.loadUserByUsername(user.getUsername());
//        if (loadUserByUsername != null) {
//            response.setResult("duplicate_user");
//            return response;
//        }
        //user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        user.setPassword("123456");
        user.setEnabled(true);
        long result = userDao.create(user);
//        String[] roles = new String[]{"client"};
//        int i = roleDao.addRoles(roles, user.getId());
//        boolean b = i == roles.length && result == 1;

        response.setResult("success");
        response.setModel(user);

        return response;
    }

    public User getCurrentUser() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return user;
    }

    public List<Role> getAllRoles() {
        return roleDao.getAllRoles();
    }

    public Response update(User user) {
        int result = userDao.update(user);
        System.out.println(result);
        return new Response(result==1?"success":"failed", user);
    }

    public Response delete(Long id) {
        int result = userDao.deleteUserById(id);
        return new Response(result==1?"success":"failed", null);
    }

    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }
}
