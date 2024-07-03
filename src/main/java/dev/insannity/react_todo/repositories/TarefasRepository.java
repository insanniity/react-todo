package dev.insannity.react_todo.repositories;

import dev.insannity.react_todo.docs.Tarefa;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarefasRepository extends MongoRepository<Tarefa, String> {
}
