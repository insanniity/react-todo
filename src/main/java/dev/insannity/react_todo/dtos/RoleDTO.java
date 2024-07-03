package dev.insannity.react_todo.dtos;


import dev.insannity.react_todo.docs.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoleDTO {


    String id;
    @Size(min = 3, max = 50, message = "O nome deve ter entre 3 e 50 caracteres")
    String nome;
    @NotBlank(message = "Campo obrigatório")
    String descricao;


    public RoleDTO(Role role) {
        this.id = role.getId();
        this.nome = role.getNome();
        this.descricao = role.getDescricao();
    }
}
