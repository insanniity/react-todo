import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import UserDTOModel_1 from "./UserDTOModel.js";
import type UserUpdateDTO_1 from "./UserUpdateDTO.js";
class UserUpdateDTOModel<T extends UserUpdateDTO_1 = UserUpdateDTO_1> extends UserDTOModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(UserUpdateDTOModel);
    get senha(): StringModel_1 {
        return this[_getPropertyModel_1]("senha", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get confirmacaoSenha(): StringModel_1 {
        return this[_getPropertyModel_1]("confirmacaoSenha", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
}
export default UserUpdateDTOModel;
