package com.day.projectmanagementsystem.service;

import com.day.projectmanagementsystem.modal.Issue;
import com.day.projectmanagementsystem.modal.User;
import com.day.projectmanagementsystem.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public class IssueServiceImpl implements IssueService{
    @Override
    public Optional<Issue> getIssueById(Long userId) throws Exception {
        return Optional.empty();
    }

    @Override
    public List<Issue> getIssueByProjectId(Long projectId) throws Exception {
        return List.of();
    }

    @Override
    public Issue createIssue(IssueRequest issue, Long userId) throws Exception {
        return null;
    }

    @Override
    public Optional<Issue> updateIssue(Long issueId, IssueRequest updatedIssue, Long userid) throws Exception {
        return Optional.empty();
    }

    @Override
    public String deleteIssue(Long issuedId, Long userid) throws Exception {
        return "";
    }

    @Override
    public List<Issue> searchIssues(String title, String status, String priority, Long assignedId) throws Exception {
        return List.of();
    }

    @Override
    public List<User> getAssignedUsers(Long issuedId) throws Exception {
        return List.of();
    }

    @Override
    public Issue addUserToIssue(Long issueId, Long userId) throws Exception {
        return null;
    }

    @Override
    public Issue updateStatus(Long issueId, String status) throws Exception {
        return null;
    }
}
