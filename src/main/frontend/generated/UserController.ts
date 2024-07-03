import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
import type UserDTO_1 from "./dev/insannity/react_todo/dtos/UserDTO.js";
import type UserInsertDTO_1 from "./dev/insannity/react_todo/dtos/UserInsertDTO.js";
import type UserUpdateDTO_1 from "./dev/insannity/react_todo/dtos/UserUpdateDTO.js";
async function delete_1(id: string | undefined, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("UserController", "delete", { id }, init); }
async function findAll_1(init?: EndpointRequestInit_1): Promise<Array<UserDTO_1 | undefined> | undefined> { return client_1.call("UserController", "findAll", {}, init); }
async function findById_1(id: string | undefined, init?: EndpointRequestInit_1): Promise<UserDTO_1 | undefined> { return client_1.call("UserController", "findById", { id }, init); }
async function save_1(userDTO: UserInsertDTO_1 | undefined, init?: EndpointRequestInit_1): Promise<UserDTO_1 | undefined> { return client_1.call("UserController", "save", { userDTO }, init); }
async function update_1(id: string | undefined, userDTO: UserUpdateDTO_1 | undefined, init?: EndpointRequestInit_1): Promise<UserDTO_1 | undefined> { return client_1.call("UserController", "update", { id, userDTO }, init); }
export { delete_1 as delete, findAll_1 as findAll, findById_1 as findById, save_1 as save, update_1 as update };
