package dev.insannity.react_todo.controllers;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import dev.insannity.react_todo.dtos.RoleDTO;
import dev.insannity.react_todo.services.RoleService;
import lombok.RequiredArgsConstructor;

import java.util.List;

@BrowserCallable
@RequiredArgsConstructor
@AnonymousAllowed
public class RoleController {

    private final RoleService roleService;


    public List<RoleDTO> findAll(){
        return roleService.findAll();
    }

    public RoleDTO findById(String id){
        return roleService.findById(id);
    }

    public RoleDTO save(RoleDTO roleDTO){
        return roleService.save(roleDTO);
    }

    public RoleDTO update(String id, RoleDTO roleDTO){
        return roleService.update(id, roleDTO);
    }

    public void delete(String id){
        roleService.delete(id);
    }

}
