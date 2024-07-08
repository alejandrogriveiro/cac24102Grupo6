package com.codoacodo.grupo6_backend.controller;



import com.codoacodo.grupo6_backend.dto.LoginDto;
import com.codoacodo.grupo6_backend.dto.UserDto;
import com.codoacodo.grupo6_backend.exceptions.DuplicateKeyException;
import com.codoacodo.grupo6_backend.exceptions.ResourceNotFoundException;
import com.codoacodo.grupo6_backend.model.User;
import com.codoacodo.grupo6_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")

public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping
    public UserDto user(@RequestBody User user) throws DuplicateKeyException {
        return userService.createUser(user);
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

//    @GetMapping("{id}")
//    public User getUserBtId(@PathVariable("id") Integer id){
//        return userService.getUserById(id);
//    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getStudentById(@PathVariable Integer id) {
        User user = userService.getUserById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("{id}")
    public String deleteUserById(@PathVariable("id") Integer id){
        return userService.deleteUserById(id);
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "*", methods = RequestMethod.POST)
    public User checkUser(@RequestBody LoginDto loginDto) throws ResourceNotFoundException{

      return userService.checkUser(loginDto);

    }

}
