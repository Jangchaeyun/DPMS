package com.day.projectmanagementsystem.service;

import com.day.projectmanagementsystem.modal.Issue;
import com.day.projectmanagementsystem.modal.User;
import com.day.projectmanagementsystem.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public interface IssueService {
    Issue getIssueById(Long issueId) throws Exception;

    List<Issue> getIssueByProjectId(Long projectId) throws Exception;

    Issue createIssue(IssueRequest issue, User user) throws Exception;

    void deleteIssue(Long issueId, Long userId) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    Issue updateStatus(Long issueId, String status) throws Exception;
}
