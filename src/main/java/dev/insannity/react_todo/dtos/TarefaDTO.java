package dev.insannity.react_todo.dtos;


import dev.insannity.react_todo.docs.Tarefa;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class TarefaDTO {

    String id;
    @Size(min = 3, max = 50, message = "O título deve ter entre 3 e 50 caracteres")
    String titulo;
    @Size(min = 3, max = 200, message = "A descrição deve ter entre 3 e 200 caracteres")
    String descricao;
    boolean concluida;

    public TarefaDTO(Tarefa entity) {
        this.id = entity.getId();
        this.titulo = entity.getTitulo();
        this.descricao = entity.getDescricao();
        this.concluida = entity.isConcluida();
    }
}
