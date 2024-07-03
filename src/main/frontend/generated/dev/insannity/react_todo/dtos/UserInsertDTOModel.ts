import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotBlank as NotBlank_1, NotEmpty as NotEmpty_1, NotNull as NotNull_1, Size as Size_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import UserDTOModel_1 from "./UserDTOModel.js";
import type UserInsertDTO_1 from "./UserInsertDTO.js";
class UserInsertDTOModel<T extends UserInsertDTO_1 = UserInsertDTO_1> extends UserDTOModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(UserInsertDTOModel);
    get senha(): StringModel_1 {
        return this[_getPropertyModel_1]("senha", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 6, max: 20, message: "A senha deve ter entre 6 e 20 caracteres" }), new NotBlank_1({ message: "A senha \u00E9 obrigat\u00F3ria" }), new NotEmpty_1({ message: "A senha n\u00E3o pode ser vazia" }), new NotNull_1({ message: "A senha n\u00E3o pode ser nula" })], meta: { javaType: "java.lang.String" } }));
    }
    get confirmacaoSenha(): StringModel_1 {
        return this[_getPropertyModel_1]("confirmacaoSenha", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 6, max: 20, message: "A confirma\u00E7\u00E3o da senha deve ter entre 6 e 20 caracteres" }), new NotBlank_1({ message: "A confirma\u00E7\u00E3o da senha \u00E9 obrigat\u00F3ria" }), new NotEmpty_1({ message: "A confirma\u00E7\u00E3o da senha n\u00E3o pode ser vazia" }), new NotNull_1({ message: "A confirma\u00E7\u00E3o da senha n\u00E3o pode ser nula" })], meta: { javaType: "java.lang.String" } }));
    }
}
export default UserInsertDTOModel;
