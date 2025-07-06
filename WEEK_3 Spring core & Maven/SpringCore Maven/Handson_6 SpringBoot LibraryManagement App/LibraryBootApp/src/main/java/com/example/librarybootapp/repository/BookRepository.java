package com.example.librarybootapp.repository;

import com.example.librarybootapp.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
