package dev.insannity.react_todo.services;


import dev.insannity.react_todo.docs.User;
import dev.insannity.react_todo.dtos.UserDTO;
import dev.insannity.react_todo.dtos.UserInsertDTO;
import dev.insannity.react_todo.dtos.UserUpdateDTO;
import dev.insannity.react_todo.repositories.RoleRepository;
import dev.insannity.react_todo.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public List<UserDTO> findAll(){
        List<User> users = userRepository.findAll();
        return users.stream().map(UserDTO::new).toList();
    }

    public UserDTO findById(String id){
        return userRepository.findById(id).map(UserDTO::new).orElse(null);
    }

    public UserDTO save(UserInsertDTO userDTO){
        User user = new User();
        copyDtoToEntity(userDTO, user);
        return new UserDTO(userRepository.save(user));
    }

    public UserDTO update(String id, UserUpdateDTO userDTO){
        User user = userRepository.findById(id).orElse(null);
        if(user != null){
            copyDtoToEntity(userDTO, user);
            return new UserDTO(userRepository.save(user));
        }
        return null;
    }

    public void delete(String id){
        userRepository.deleteById(id);
    }

    private void copyDtoToEntity(UserInsertDTO userDTO, User user){
        user.setId(userDTO.getId());
        user.setNome(userDTO.getNome());
        user.setEmail(userDTO.getEmail());
        user.setSenha(userDTO.getSenha());
    }

    private void copyDtoToEntity(UserUpdateDTO userDTO, User user){
        user.setNome(userDTO.getNome());
        user.setEmail(userDTO.getEmail());
        if(userDTO.getSenha() != null && !userDTO.getSenha().isEmpty() && !userDTO.getSenha().isBlank()) {
            user.setSenha(userDTO.getSenha());
        }
        userDTO.getRoles().forEach(roleDTO -> {
            roleRepository.findById(roleDTO.getId()).ifPresent(role -> user.getRoles().add(role));
        });
    }

}
