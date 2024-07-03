package dev.insannity.react_todo.dtos;


import dev.insannity.react_todo.docs.User;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = true)
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserUpdateDTO extends UserDTO {


    String senha;
    String confirmacaoSenha;


    public UserUpdateDTO(User entity) {
        super(entity);
        this.senha = entity.getSenha();
    }
}
