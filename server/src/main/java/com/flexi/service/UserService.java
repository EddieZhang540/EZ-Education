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

        User loadUserByUsername = userDao.loadUserByUsername(user.getUsername());
        if (loadUserByUsername != null) {
            response.setResult("duplicate_user");
            return response;
        }
        //user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        user.setEnabled(true);
        long result = userDao.create(user);
        List<Role> allRoles = roleDao.getAllRoles();
        long roleId = 0;
        for( int i=0; i<allRoles.size(); i++ ){
            if( user.getRole().equals(allRoles.get(i).getName()) ){
                roleId = allRoles.get(i).getId();
            }
        }
        if( roleId == 0 ){
            response.setResult("failed");
            response.setModel(user);
            return response;
        }
        String[] roles = new String[]{ roleId +"" };
        int i = roleDao.addRoles(roles, user.getId());
        boolean success = i == roles.length && result == 1;
        if( success ){
            response.setResult("success");
            response.setModel(user);
        }else{
            response.setResult("failed");
            response.setModel(user);
        }
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
