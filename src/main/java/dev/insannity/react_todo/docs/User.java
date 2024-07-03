package dev.insannity.react_todo.docs;

import lombok.*;
import lombok.experimental.FieldDefaults;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@Document("users")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    @Id
    @EqualsAndHashCode.Include
    String id;
    String nome;
    @Indexed(unique = true)
    String email;
    String senha;
    @DBRef
    Set<Role> roles = new HashSet<>();

    public void addRole(Role role){
        roles.add(role);
    }

    public void removeRole(Role role){
        roles.remove(role);
    }

    public void clearRoles(){
        roles.clear();
    }

}
