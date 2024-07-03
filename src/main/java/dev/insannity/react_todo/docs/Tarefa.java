package dev.insannity.react_todo.docs;


import lombok.*;
import lombok.experimental.FieldDefaults;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@Document("tarefas")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Tarefa {

    @Id
    @EqualsAndHashCode.Include
    String id;
    String titulo;
    String descricao;
    boolean concluida;

}
