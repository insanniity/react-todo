package dev.insannity.react_todo.controllers;


import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import dev.insannity.react_todo.dtos.UserDTO;
import dev.insannity.react_todo.dtos.UserInsertDTO;
import dev.insannity.react_todo.dtos.UserUpdateDTO;
import dev.insannity.react_todo.services.UserService;
import lombok.RequiredArgsConstructor;

import java.util.List;

@BrowserCallable
@RequiredArgsConstructor
@AnonymousAllowed
public class UserController {


    private final UserService userService;


    public List<UserDTO> findAll(){
        return userService.findAll();
    }

    public UserDTO findById(String id){
        return userService.findById(id);
    }

    public UserDTO save(UserInsertDTO userDTO){
        return userService.save(userDTO);
    }

    public UserDTO update(String id, UserUpdateDTO userDTO){
        return userService.update(id, userDTO);
    }

    public void delete(String id){
        userService.delete(id);
    }

}
