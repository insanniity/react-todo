import type UserDTO_1 from "./UserDTO.js";
interface UserUpdateDTO extends UserDTO_1 {
    senha?: string;
    confirmacaoSenha?: string;
}
export default UserUpdateDTO;
