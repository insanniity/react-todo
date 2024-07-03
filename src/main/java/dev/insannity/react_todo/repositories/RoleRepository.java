package dev.insannity.react_todo.repositories;

import dev.insannity.react_todo.docs.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends MongoRepository<Role, String>{
}
