package com.day.projectmanagementsystem.DTO;

import com.day.projectmanagementsystem.modal.Project;
import com.day.projectmanagementsystem.modal.User;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class IssueDTO {
    private Long id;
    private String title;
    private String description;
    private String status;
    private Long projectID;
    private String priority;
    private LocalDate dueDate;
    private Project project;
    private List<String> tags = new ArrayList<>();
    private User assignee;
}
