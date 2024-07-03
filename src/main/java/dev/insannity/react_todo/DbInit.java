package dev.insannity.react_todo;

import dev.insannity.react_todo.docs.Tarefa;
import dev.insannity.react_todo.repositories.TarefasRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DbInit implements ApplicationRunner {

    private final TarefasRepository tarefasRepository;

    public DbInit(TarefasRepository tarefasRepository) {
        this.tarefasRepository = tarefasRepository;
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {
        tarefasRepository.deleteAll();
        //Gera dados iniciais
        tarefasRepository.save(new Tarefa(null, "Estudar", "Estudar Spring Boot", false));
        tarefasRepository.save(new Tarefa(null, "Estudar", "Estudar React", false));
        tarefasRepository.save(new Tarefa(null, "Estudar", "Estudar MongoDB", false));

    }
}
