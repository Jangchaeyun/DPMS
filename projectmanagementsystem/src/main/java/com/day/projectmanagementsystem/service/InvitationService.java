package com.day.projectmanagementsystem.service;

import com.day.projectmanagementsystem.modal.Invitation;

public interface InvitationService {
    public void sendInvitation(String email, Long projectId) throws Exception;

    public Invitation acceptInvitation(String token, Long userId) throws Exception;

    public String getTokenByUserEmail(String userEmail);

    void deleteInvitation(String token);
}
