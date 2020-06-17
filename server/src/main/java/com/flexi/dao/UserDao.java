package com.flexi.dao;

import com.flexi.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserDao {

    User loadUserByUsername(@Param("username") String username);

    long create(User user);

    int updateUserWebchat(@Param("webchat") String webchat, @Param("id") Long id);

    List<User> getUserByUsername(@Param("username") String username);

    int updateUserEnabled(@Param("enabled") Boolean enabled, @Param("id") Long id);

    int deleteUserById(Long id);

    int deleteUserRolesByUserId(Long userId);

    int setUserRoles(@Param("roleIds") String[] roleIds, @Param("userId") Long userId);

    User getUserById(@Param("id") Long id);

    int update(User user);

    List<User> getAllUsers();
}

