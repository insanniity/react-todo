import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "@vaadin/hilla-react-form";
import UserInsertDTOModel from "Frontend/generated/dev/insannity/react_todo/dtos/UserInsertDTOModel";
import {useEffect} from "react";
import {RoleController, UserController} from "Frontend/generated/endpoints";
import UserInsertDTO from "Frontend/generated/dev/insannity/react_todo/dtos/UserInsertDTO";
import {Button, FormLayout, PasswordField, TextField} from "@vaadin/react-components";
import UserUpdateDTO from "Frontend/generated/dev/insannity/react_todo/dtos/UserUpdateDTO";
import UserUpdateDTOModel from "Frontend/generated/dev/insannity/react_todo/dtos/UserUpdateDTOModel";
import RoleDTOModel from "Frontend/generated/dev/insannity/react_todo/dtos/RoleDTOModel";
import RoleDTO from "Frontend/generated/dev/insannity/react_todo/dtos/RoleDTO";



const EditRole = () => {
    const {field, model , submit, read} = useForm(RoleDTOModel, {onSubmit: onSubmit});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            RoleController.findById(id).then(data => {
                read(data);
            });
        }else{
            navigate("/roles");
        }
    }, []);


    async function onSubmit (data: RoleDTO){
        await RoleController.update(id, data);
        navigate("/roles");
    }


    return (
        <>
            <FormLayout>
                <TextField label="Nome" {...{ colspan: 2 }} {...field(model.nome)} />
                <TextField label="Descrição" {...{ colspan: 2 }} {...field(model.descricao)} />
                <Button theme={"primary"} onClick={submit} {...{ colspan: 2 }} className={"mt-m"}>Salvar</Button>
            </FormLayout>
        </>
    );
}


export default EditRole;