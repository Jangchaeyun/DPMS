package com.day.projectmanagementsystem.service;

import com.day.projectmanagementsystem.modal.User;

public interface UserService {
    User findUserProfileByJwt(String jwt) throws Exception;

    User findUserByEmail(String email) throws Exception;

    User findUserById(Long userId) throws Exception;

    User updateUsersProject(User user, int number) throws Exception;
}
