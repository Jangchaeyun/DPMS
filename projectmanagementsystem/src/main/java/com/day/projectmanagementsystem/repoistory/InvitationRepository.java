package com.day.projectmanagementsystem.repoistory;

import com.day.projectmanagementsystem.modal.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationRepository extends JpaRepository<Invitation, Long> {
    Invitation findByToken(String token);

    Invitation findByEmail(String userEmail);
}
