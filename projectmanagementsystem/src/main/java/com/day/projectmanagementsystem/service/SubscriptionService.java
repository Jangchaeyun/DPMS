package com.day.projectmanagementsystem.service;

import com.day.projectmanagementsystem.modal.PlanType;
import com.day.projectmanagementsystem.modal.Subscription;
import com.day.projectmanagementsystem.modal.User;

public interface SubscriptionService {
    Subscription createSubscription(User user);
    Subscription getUsersSubscription(Long userId);
    Subscription upgradeSubscription(Long userId, PlanType planType);
    boolean isValid(Subscription subscription);
}
