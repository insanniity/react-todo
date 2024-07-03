import PainelLayout from "Frontend/components/PainelLayout";
import {useForm} from "@vaadin/hilla-react-form";
import UserInsertDTOModel from "Frontend/generated/dev/insannity/react_todo/dtos/UserInsertDTOModel";
import {UserController} from "Frontend/generated/endpoints";
import {Button, FormLayout, PasswordField, TextField} from "@vaadin/react-components";
import {useNavigate} from "react-router-dom";
import UserInsertDTO from "Frontend/generated/dev/insannity/react_todo/dtos/UserInsertDTO";


const AddUser = () => {
    const {field, model , submit} = useForm(UserInsertDTOModel, {onSubmit: onSubmit});
    const navigate = useNavigate();

    async function onSubmit (user: UserInsertDTO){
        await UserController.save(user);
        navigate("/users");
    }

    return (
        <>
            <FormLayout>
                <TextField label="Nome" {...{ colspan: 2 }} {...field(model.nome)} />
                <TextField label="Email" {...{ colspan: 2 }} {...field(model.email)} />
                <PasswordField label="Senha" {...{ colspan: 2 }} {...field(model.senha)} />
                <PasswordField label="Confirmação de Senha" {...{ colspan: 2 }} {...field(model.confirmacaoSenha)} />
                <Button theme={"primary"} onClick={submit} {...{ colspan: 2 }} className={"mt-m"}>Salvar</Button>
            </FormLayout>
        </>
    )
}

export default AddUser;