import { _getPropertyModel as _getPropertyModel_1, Email as Email_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotBlank as NotBlank_1, NotEmpty as NotEmpty_1, NotNull as NotNull_1, ObjectModel as ObjectModel_1, Size as Size_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type UserDTO_1 from "./UserDTO.js";
class UserDTOModel<T extends UserDTO_1 = UserDTO_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(UserDTOModel);
    get id(): StringModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get nome(): StringModel_1 {
        return this[_getPropertyModel_1]("nome", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 3, max: 50, message: "O nome deve ter entre 3 e 50 caracteres" }), new NotBlank_1({ message: "O nome \u00E9 obrigat\u00F3rio" }), new NotEmpty_1({ message: "O nome n\u00E3o pode ser vazio" }), new NotNull_1({ message: "O nome n\u00E3o pode ser nulo" })], meta: { javaType: "java.lang.String" } }));
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Email_1({ message: "E-mail inv\u00E1lido" }), new NotBlank_1({ message: "O e-mail \u00E9 obrigat\u00F3rio" }), new NotEmpty_1({ message: "O e-mail n\u00E3o pode ser vazio" }), new NotNull_1({ message: "O e-mail n\u00E3o pode ser nulo" })], meta: { javaType: "java.lang.String" } }));
    }
}
export default UserDTOModel;
