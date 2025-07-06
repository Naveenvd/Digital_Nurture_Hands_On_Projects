package com.library.notification;

public class NotificationService {
    public void sendNotification(String message) {
        System.out.println("constructor injection used here");
        System.out.println("Notification sent: " + message);
    }
}
