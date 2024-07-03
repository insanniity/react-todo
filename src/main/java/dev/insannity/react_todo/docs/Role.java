package dev.insannity.react_todo.docs;

import lombok.*;
import lombok.experimental.FieldDefaults;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@Document("roles")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Role {

    @Id
    @EqualsAndHashCode.Include
    String id;
    String nome;
    @Indexed(unique = true)
    String descricao;


    public void setNome(String nome) {
        this.nome = "ROLE_"+ nome;
    }

    public String getNome() {
        return nome.substring("ROLE_".length());
    }

}
