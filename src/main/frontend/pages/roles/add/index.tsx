import {useForm} from "@vaadin/hilla-react-form";
import {RoleController} from "Frontend/generated/endpoints";
import {Button, FormLayout, TextField} from "@vaadin/react-components";
import {useNavigate} from "react-router-dom";
import RoleDTOModel from "Frontend/generated/dev/insannity/react_todo/dtos/RoleDTOModel";
import RoleDTO from "Frontend/generated/dev/insannity/react_todo/dtos/RoleDTO";


const AddRole = () => {
    const {field, model , submit} = useForm(RoleDTOModel, {onSubmit: onSubmit});
    const navigate = useNavigate();

    async function onSubmit (data: RoleDTO){
        await RoleController.save(data);
        navigate("/roles");
    }

    return (
        <>
            <FormLayout>
                <TextField label="Nome" {...{ colspan: 2 }} {...field(model.nome)} />
                <TextField label="Email" {...{ colspan: 2 }} {...field(model.descricao)} />
                <Button theme={"primary"} onClick={submit} {...{ colspan: 2 }} className={"mt-m"}>Salvar</Button>
            </FormLayout>
        </>
    )
}

export default AddRole;