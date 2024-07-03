import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
import type RoleDTO_1 from "./dev/insannity/react_todo/dtos/RoleDTO.js";
async function delete_1(id: string | undefined, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("RoleController", "delete", { id }, init); }
async function findAll_1(init?: EndpointRequestInit_1): Promise<Array<RoleDTO_1 | undefined> | undefined> { return client_1.call("RoleController", "findAll", {}, init); }
async function findById_1(id: string | undefined, init?: EndpointRequestInit_1): Promise<RoleDTO_1 | undefined> { return client_1.call("RoleController", "findById", { id }, init); }
async function save_1(roleDTO: RoleDTO_1 | undefined, init?: EndpointRequestInit_1): Promise<RoleDTO_1 | undefined> { return client_1.call("RoleController", "save", { roleDTO }, init); }
async function update_1(id: string | undefined, roleDTO: RoleDTO_1 | undefined, init?: EndpointRequestInit_1): Promise<RoleDTO_1 | undefined> { return client_1.call("RoleController", "update", { id, roleDTO }, init); }
export { delete_1 as delete, findAll_1 as findAll, findById_1 as findById, save_1 as save, update_1 as update };
