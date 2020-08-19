package com.EZedu.dao;

import com.EZedu.model.Role;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RoleDao {
    int addRoles(@Param("roles") String[] roles, @Param("userId") Long userId);

    List<Role> getRolesByUserId(Long userId);

    List<Role> getAllRoles();
}
