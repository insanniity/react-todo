import type UserDTO_1 from "./UserDTO.js";
interface UserInsertDTO extends UserDTO_1 {
    senha?: string;
    confirmacaoSenha?: string;
}
export default UserInsertDTO;
