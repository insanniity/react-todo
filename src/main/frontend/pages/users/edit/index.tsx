import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "@vaadin/hilla-react-form";
import UserInsertDTOModel from "Frontend/generated/dev/insannity/react_todo/dtos/UserInsertDTOModel";
import {useEffect} from "react";
import {UserController} from "Frontend/generated/endpoints";
import UserInsertDTO from "Frontend/generated/dev/insannity/react_todo/dtos/UserInsertDTO";
import {Button, FormLayout, PasswordField, TextField} from "@vaadin/react-components";
import UserUpdateDTO from "Frontend/generated/dev/insannity/react_todo/dtos/UserUpdateDTO";
import UserUpdateDTOModel from "Frontend/generated/dev/insannity/react_todo/dtos/UserUpdateDTOModel";



const EditUser = () => {
    const {field, model , submit, read} = useForm(UserUpdateDTOModel, {onSubmit: onSubmit});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            UserController.findById(id).then(user => {
                read(user);
            });
        }else{
            navigate("/users");
        }
    }, []);


    async function onSubmit (user: UserUpdateDTO){
        await UserController.update(id, user);
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
    );
}


export default EditUser;