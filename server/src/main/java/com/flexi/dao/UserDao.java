package com.flexi.dao;

import com.flexi.module.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserDao {

    User loadUserByUsername(@Param("username") String username);

    long create(User user);

    int updateUserEmail(@Param("email") String email, @Param("id") Long id);

    List<User> getUserByNickname(@Param("nickname") String nickname);

    int updateUserEnabled(@Param("enabled") Boolean enabled, @Param("id") Long id);

    int deleteUserById(Long id);

    int deleteUserRolesByUserId(Long userId);

    int setUserRoles(@Param("roleIds") Long[] roleIds, @Param("userId") Long userId);

    User getUserById(@Param("id") Long id);
}

