package dev.insannity.react_todo.controllers;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import dev.insannity.react_todo.dtos.TarefaDTO;
import dev.insannity.react_todo.services.TarefasService;
import lombok.RequiredArgsConstructor;
import reactor.util.annotation.NonNull;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
@RequiredArgsConstructor
public class TarefasController{


    private final TarefasService tarefasService;

    public List<TarefaDTO> listarTarefas() {
        return tarefasService.listarTarefas();
    }

    public TarefaDTO atualizarTarefa(String id, TarefaDTO tarefaDTO) {
        return tarefasService.atualizarTarefa(id, tarefaDTO);
    }

    public TarefaDTO criarTarefa(@NonNull TarefaDTO tarefaDTO) {
        return tarefasService.criarTarefa(tarefaDTO);
    }

    public TarefaDTO atualizarStatusTarefa(String id, boolean status) {
        return tarefasService.atualizarStatusTarefa(id, status);
    }



}
