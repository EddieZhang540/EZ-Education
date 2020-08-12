package com.flexi.dao;

import com.flexi.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserDao {

    User loadUserByEmail(@Param("email") String email);

    long create(User user);

    int updateUserWechat(@Param("wechat") String wechat, @Param("id") Long id);

    List<User> getUserByEmail(@Param("email") String email);

    int updateUserEnabled(@Param("enabled") Boolean enabled, @Param("id") Long id);

    int deleteUserById(Long id);

    int deleteUserRolesByUserId(Long userId);

    int setUserRoles(@Param("roleIds") String[] roleIds, @Param("userId") Long userId);

    User getUserById(@Param("id") Long id);

    int update(User user);

    List<User> getAllUsers();
}

