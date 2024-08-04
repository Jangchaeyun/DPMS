package com.day.projectmanagementsystem.service;

import com.day.projectmanagementsystem.modal.Issue;
import com.day.projectmanagementsystem.modal.User;
import com.day.projectmanagementsystem.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public interface IssueService {
    Optional<Issue> getIssueById(Long userId) throws Exception;

    List<Issue> getIssueByProjectId(Long projectId) throws Exception;

    Issue createIssue(IssueRequest issue, Long userId) throws Exception;

    Optional<Issue> updateIssue(Long issueId, IssueRequest updatedIssue, Long userid) throws Exception;

    String deleteIssue(Long issuedId, Long userid) throws Exception;

    List<Issue> searchIssues(String title, String status, String priority, Long assignedId) throws Exception;

    List<User> getAssignedUsers(Long issuedId) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    Issue updateStatus(Long issueId, String status) throws Exception;
}
