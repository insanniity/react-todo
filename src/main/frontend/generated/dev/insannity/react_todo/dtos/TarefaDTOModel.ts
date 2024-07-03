import { _getPropertyModel as _getPropertyModel_1, BooleanModel as BooleanModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, ObjectModel as ObjectModel_1, Size as Size_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type TarefaDTO_1 from "./TarefaDTO.js";
class TarefaDTOModel<T extends TarefaDTO_1 = TarefaDTO_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(TarefaDTOModel);
    get id(): StringModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get titulo(): StringModel_1 {
        return this[_getPropertyModel_1]("titulo", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 3, max: 50, message: "O t\u00EDtulo deve ter entre 3 e 50 caracteres" })], meta: { javaType: "java.lang.String" } }));
    }
    get descricao(): StringModel_1 {
        return this[_getPropertyModel_1]("descricao", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 3, max: 200, message: "A descri\u00E7\u00E3o deve ter entre 3 e 200 caracteres" })], meta: { javaType: "java.lang.String" } }));
    }
    get concluida(): BooleanModel_1 {
        return this[_getPropertyModel_1]("concluida", (parent, key) => new BooleanModel_1(parent, key, false, { meta: { javaType: "boolean" } }));
    }
}
export default TarefaDTOModel;
