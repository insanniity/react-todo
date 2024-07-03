package dev.insannity.react_todo.services;


import dev.insannity.react_todo.docs.Tarefa;
import dev.insannity.react_todo.dtos.TarefaDTO;
import dev.insannity.react_todo.repositories.TarefasRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TarefasService {

    private final TarefasRepository tarefasRepository;

    public List<TarefaDTO> listarTarefas() {
        List<Tarefa> tarefas = tarefasRepository.findAll();
        return tarefas.stream().map(TarefaDTO::new).toList();
    }

    public TarefaDTO criarTarefa(TarefaDTO tarefaDTO) {
        Tarefa tarefa = new Tarefa();
        dtoToEntity(tarefaDTO, tarefa);
        tarefa = tarefasRepository.save(tarefa);
        return new TarefaDTO(tarefa);
    }

    public TarefaDTO atualizarTarefa(String id, TarefaDTO tarefaDTO) {
        Tarefa tarefa = tarefasRepository.findById(id).orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
        dtoToEntity(tarefaDTO, tarefa);
        tarefa = tarefasRepository.save(tarefa);
        return new TarefaDTO(tarefa);
    }

    public TarefaDTO atualizarStatusTarefa(String id, boolean status) {
        Tarefa tarefa = tarefasRepository.findById(id).orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
        tarefa.setConcluida(status);
        tarefa = tarefasRepository.save(tarefa);
        return new TarefaDTO(tarefa);
    }


    private void dtoToEntity (TarefaDTO tarefaDTO, Tarefa tarefa) {
        tarefa.setTitulo(tarefaDTO.getTitulo());
        tarefa.setDescricao(tarefaDTO.getDescricao());
        tarefa.setConcluida(tarefaDTO.isConcluida());
    }

}
