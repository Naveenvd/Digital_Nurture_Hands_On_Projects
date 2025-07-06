package com.library.service;

import com.library.repository.BookRepository;
import com.library.notification.NotificationService;

public class BookService {

    private NotificationService notificationService;
    private BookRepository bookRepository;


    public BookService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }


    public void setBookRepository(BookRepository bookRepository)
    {
        System.out.println("setter injection method used here");
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("Adding book: " + bookName);
        bookRepository.saveBook(bookName);
        notificationService.sendNotification("Book added: " + bookName);
    }
}
