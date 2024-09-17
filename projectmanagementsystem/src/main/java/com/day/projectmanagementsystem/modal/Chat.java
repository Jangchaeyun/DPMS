package com.day.projectmanagementsystem.modal;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String name;

    @OneToOne
    private Project project;

    @OneToMany
    private List<Message> messages;
}
