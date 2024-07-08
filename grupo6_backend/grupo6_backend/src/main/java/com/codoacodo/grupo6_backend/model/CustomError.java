package com.codoacodo.grupo6_backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomError {

    private Date timestamp;
    private String message;
    private String details;
    private int statusCode;
    private String statusMessage;

}

