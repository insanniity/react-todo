package dev.insannity.react_todo.services;

import dev.insannity.react_todo.docs.Role;
import dev.insannity.react_todo.dtos.RoleDTO;
import dev.insannity.react_todo.repositories.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class RoleService {


    private final RoleRepository roleRepository;


    public List<RoleDTO> findAll(){
        List<Role> roles = roleRepository.findAll();
        return roles.stream().map(RoleDTO::new).toList();
    }


    public RoleDTO findById(String id){
        Role role = roleRepository.findById(id).orElse(null);
        return new RoleDTO(role);
    }


    public RoleDTO save(RoleDTO dto){
        Role role = new Role();
        role.setNome(dto.getNome());
        role.setDescricao(dto.getDescricao());
        role = roleRepository.save(role);
        return new RoleDTO(role);
    }


    public RoleDTO update(String id, RoleDTO dto){
        Role role = roleRepository.findById(id).orElse(null);
        if (role == null){
            return null;
        }
        role.setNome(dto.getNome());
        role.setDescricao(dto.getDescricao());
        role = roleRepository.save(role);
        return new RoleDTO(role);
    }


    public void delete(String id){
        roleRepository.deleteById(id);
    }


}
