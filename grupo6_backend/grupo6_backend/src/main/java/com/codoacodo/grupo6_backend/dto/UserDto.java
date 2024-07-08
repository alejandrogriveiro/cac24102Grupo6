package com.codoacodo.grupo6_backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class UserDto {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String country;


    public UserDto(Integer id, String firstName, String lastName, String email,String country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.country = country;
    }
}
