package com.company.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) 
	{
		System.out.println("Application Started Succesfully");
		SpringApplication.run(SpringLearnApplication.class, args);
	}

}
