import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
import type TarefaDTO_1 from "./dev/insannity/react_todo/dtos/TarefaDTO.js";
async function atualizarStatusTarefa_1(id: string | undefined, status: boolean, init?: EndpointRequestInit_1): Promise<TarefaDTO_1 | undefined> { return client_1.call("TarefasController", "atualizarStatusTarefa", { id, status }, init); }
async function atualizarTarefa_1(id: string | undefined, tarefaDTO: TarefaDTO_1 | undefined, init?: EndpointRequestInit_1): Promise<TarefaDTO_1 | undefined> { return client_1.call("TarefasController", "atualizarTarefa", { id, tarefaDTO }, init); }
async function criarTarefa_1(tarefaDTO: TarefaDTO_1 | undefined, init?: EndpointRequestInit_1): Promise<TarefaDTO_1 | undefined> { return client_1.call("TarefasController", "criarTarefa", { tarefaDTO }, init); }
async function listarTarefas_1(init?: EndpointRequestInit_1): Promise<Array<TarefaDTO_1 | undefined> | undefined> { return client_1.call("TarefasController", "listarTarefas", {}, init); }
export { atualizarStatusTarefa_1 as atualizarStatusTarefa, atualizarTarefa_1 as atualizarTarefa, criarTarefa_1 as criarTarefa, listarTarefas_1 as listarTarefas };
