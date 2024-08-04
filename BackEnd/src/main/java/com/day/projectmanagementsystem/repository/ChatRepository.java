package com.day.projectmanagementsystem.repository;

import com.day.projectmanagementsystem.modal.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {

}
