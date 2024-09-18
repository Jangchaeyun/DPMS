package com.day.projectmanagementsystem.service;

import com.day.projectmanagementsystem.modal.Chat;
import com.day.projectmanagementsystem.repoistory.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {
    @Autowired
    private ChatRepository chatRepository;
    @Override
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);
    }
}
