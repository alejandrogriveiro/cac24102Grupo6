package com.codoacodo.grupo6_backend.exceptions;


import com.codoacodo.grupo6_backend.model.CustomError;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {

    // Manejar ResourceNotFoundException
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        CustomError customError = new CustomError(new Date(), ex.getMessage(), request.getDescription(false), HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase());
        return new ResponseEntity<>(customError, HttpStatus.NOT_FOUND);
    }

    // Manejar DuplicateKeyException
    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<?> duplicateKeyException(DuplicateKeyException ex, WebRequest request) {
        CustomError customError = new CustomError(new Date(), ex.getMessage(), request.getDescription(false), HttpStatus.BAD_REQUEST.value(), HttpStatus.BAD_REQUEST.getReasonPhrase());
        return new ResponseEntity<>(customError, HttpStatus.BAD_REQUEST);
    }

    // Manejar otras excepciones
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> globalExceptionHandler(Exception ex, WebRequest request) {
        CustomError customError = new CustomError(new Date(), ex.getMessage(), request.getDescription(false), HttpStatus.INTERNAL_SERVER_ERROR.value(), HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
        return new ResponseEntity<>(customError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

