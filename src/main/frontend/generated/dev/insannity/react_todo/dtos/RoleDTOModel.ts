import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotBlank as NotBlank_1, ObjectModel as ObjectModel_1, Size as Size_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type RoleDTO_1 from "./RoleDTO.js";
class RoleDTOModel<T extends RoleDTO_1 = RoleDTO_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(RoleDTOModel);
    get id(): StringModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get nome(): StringModel_1 {
        return this[_getPropertyModel_1]("nome", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 3, max: 50, message: "O nome deve ter entre 3 e 50 caracteres" })], meta: { javaType: "java.lang.String" } }));
    }
    get descricao(): StringModel_1 {
        return this[_getPropertyModel_1]("descricao", (parent, key) => new StringModel_1(parent, key, true, { validators: [new NotBlank_1({ message: "Campo obrigat\u00F3rio" })], meta: { javaType: "java.lang.String" } }));
    }
}
export default RoleDTOModel;
