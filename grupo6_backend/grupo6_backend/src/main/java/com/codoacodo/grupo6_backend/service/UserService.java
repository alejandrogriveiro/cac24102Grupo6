package com.codoacodo.grupo6_backend.service;



import com.codoacodo.grupo6_backend.dto.LoginDto;
import com.codoacodo.grupo6_backend.dto.UserDto;
import com.codoacodo.grupo6_backend.exceptions.ResourceNotFoundException;
import com.codoacodo.grupo6_backend.model.User;
import com.codoacodo.grupo6_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {


    @Autowired
    private  UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;


    public UserDto createUser(User user) throws DuplicateKeyException{

       try{
           String encodedPassword = passwordEncoder.encode(user.getPassword());
           user.setPassword(encodedPassword);

           User newUser =(userRepository.save(user));

           return new UserDto(newUser.getId(), newUser.getFirstName(),newUser.getLastName(),newUser.getEmail() ,newUser.getCountry());

       } catch(DataIntegrityViolationException e){

           throw new DuplicateKeyException("Email already exists!");
       }
    }






    public List<User> getAllUsers(){
        return userRepository.findAll();
    }




    public Optional<User> getUserById(Integer userId) {
        return this.userRepository.findById(userId);
    }

    public String deleteUserById(Integer id){
         userRepository.deleteById(id);

         return "Usuario eliminado satisfactoriamente";
    }



    public User checkUser(LoginDto loginDto) throws ResourceNotFoundException {

        User user = userRepository.findByEmail(loginDto.getEmail());

        if (user==null)  throw new ResourceNotFoundException("Bad credentials");

        if( passwordEncoder.matches(loginDto.getPassword(), user.getPassword())){
          user.setId(0);
          user.setPassword("*************************");
            return user;
        }

        throw new ResourceNotFoundException("Bad credentials");

    }

}
