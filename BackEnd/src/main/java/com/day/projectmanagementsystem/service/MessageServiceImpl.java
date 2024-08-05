package com.day.projectmanagementsystem.service;

import com.day.projectmanagementsystem.modal.Chat;
import com.day.projectmanagementsystem.modal.Message;
import com.day.projectmanagementsystem.modal.User;
import com.day.projectmanagementsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService{
    @Autowired
    private  UserRepository userRepository;

    @Autowired
    private ProjectService projectService;

    public MessageServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Message sendMessage(Long senderId, Long chatId, String content) throws Exception {
        User sender = userRepository.findById(senderId)
                .orElseThrow(() -> new Exception("User not found with id: " +senderId));

        Chat chat = projectService.getProjectById(projectId).getChat();
        return null;
    }

    @Override
    public List<Message> getMessageByProjectId(Long projectId) throws Exception {
        return List.of();
    }
}
