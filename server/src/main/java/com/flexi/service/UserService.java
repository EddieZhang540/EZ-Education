package com.flexi.service;

import com.flexi.dao.RoleDao;
import com.flexi.dao.UserDao;
import com.flexi.module.Role;
import com.flexi.module.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.DigestUtils;

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

    public String create(User user) {
        User loadUserByUsername = userDao.loadUserByUsername(user.getUsername());
        if (loadUserByUsername != null) {
            return "duplicate_user";
        }
        user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        user.setEnabled(true);
        long result = userDao.create(user);
        String[] roles = new String[]{"client"};
        int i = roleDao.addRoles(roles, user.getId());
        boolean b = i == roles.length && result == 1;
        return b ? "success" : "failed";
    }

    public User getCurrentUser() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return user;
    }

    public List<Role> getAllRoles() {
        return roleDao.getAllRoles();
    }
}
