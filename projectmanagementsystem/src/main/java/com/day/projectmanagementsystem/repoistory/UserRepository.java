package com.day.projectmanagementsystem.repoistory;

import com.day.projectmanagementsystem.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
