package dev.insannity.react_todo;

import dev.insannity.react_todo.docs.Role;
import dev.insannity.react_todo.docs.Tarefa;
import dev.insannity.react_todo.repositories.RoleRepository;
import dev.insannity.react_todo.repositories.TarefasRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DbInit implements ApplicationRunner {

    private final TarefasRepository tarefasRepository;
    private final RoleRepository roleRepository;

    public DbInit(TarefasRepository tarefasRepository, RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
        this.tarefasRepository = tarefasRepository;
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {
//        tarefasRepository.deleteAll();
//        //Gera dados iniciais
//        tarefasRepository.save(new Tarefa(null, "Estudar", "Estudar Spring Boot", false));
//        tarefasRepository.save(new Tarefa(null, "Estudar", "Estudar React", false));
//        tarefasRepository.save(new Tarefa(null, "Estudar", "Estudar MongoDB", false));
//
//        roleRepository.deleteAll();
//        roleRepository.save(new Role(null, "ROLE_ADMIN", "Administrador"));
//        roleRepository.save(new Role(null, "ROLE_USER", "Usuário comum"));

    }
}
