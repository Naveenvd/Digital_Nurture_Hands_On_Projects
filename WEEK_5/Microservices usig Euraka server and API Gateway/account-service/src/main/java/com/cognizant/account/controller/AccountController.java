package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

    @GetMapping("/status")
    public String getStatus() {
        return "Account Service is up!";
    }
}
