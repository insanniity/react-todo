package dev.insannity.react_todo.dtos;


import dev.insannity.react_todo.docs.User;
import jakarta.validation.constraints.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class UserDTO {


    String id;
    @Size(min = 3, max = 50, message = "O nome deve ter entre 3 e 50 caracteres")
    @NotBlank(message = "O nome é obrigatório")
    @NotEmpty(message = "O nome não pode ser vazio")
    @NotNull(message = "O nome não pode ser nulo")
    String nome;
    @Email(message = "E-mail inválido")
    @NotBlank(message = "O e-mail é obrigatório")
    @NotEmpty(message = "O e-mail não pode ser vazio")
    @NotNull(message = "O e-mail não pode ser nulo")
    String email;


    public UserDTO(User entity) {
        this.id = entity.getId();
        this.nome = entity.getNome();
        this.email = entity.getEmail();
    }
}
