package com.day.projectmanagementsystem.repository;

import com.day.projectmanagementsystem.modal.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
