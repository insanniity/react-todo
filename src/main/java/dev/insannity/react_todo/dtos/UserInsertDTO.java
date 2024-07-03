package dev.insannity.react_todo.dtos;


import dev.insannity.react_todo.docs.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = true)
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserInsertDTO extends UserDTO {


    @Size(min = 6, max = 20, message = "A senha deve ter entre 6 e 20 caracteres")
    @NotBlank(message = "A senha é obrigatória")
    @NotEmpty(message = "A senha não pode ser vazia")
    @NotNull(message = "A senha não pode ser nula")
    String senha;
    @Size(min = 6, max = 20, message = "A confirmação da senha deve ter entre 6 e 20 caracteres")
    @NotBlank(message = "A confirmação da senha é obrigatória")
    @NotEmpty(message = "A confirmação da senha não pode ser vazia")
    @NotNull(message = "A confirmação da senha não pode ser nula")
    String confirmacaoSenha;


    public UserInsertDTO(User entity) {
        super(entity);
        this.senha = entity.getSenha();
    }
}
