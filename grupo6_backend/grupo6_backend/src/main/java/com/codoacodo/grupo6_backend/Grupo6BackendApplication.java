package com.codoacodo.grupo6_backend;

import com.codoacodo.grupo6_backend.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)

public class Grupo6BackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(Grupo6BackendApplication.class, args);
	}

}
