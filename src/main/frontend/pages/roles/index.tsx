import {useEffect, useState} from "react";
import RoleDTO from "Frontend/generated/dev/insannity/react_todo/dtos/RoleDTO";
import {useNavigate} from "react-router-dom";
import {RoleController} from "Frontend/generated/endpoints";
import {Button, Grid, GridColumn} from "@vaadin/react-components";


const ListRoles = () => {
    const [roles, setRoles] = useState<(RoleDTO | undefined)[] | undefined>()
    const navigate = useNavigate()

    useEffect(() => {
        RoleController.findAll().then(setRoles);
    }, []);

    return (
        <>
            <Button onClick={() => navigate("/roles/add")} theme="primary" className="mb-l">Adicionar</Button>
            <Grid
                items={roles}
            >
                <GridColumn path={"id"} autoWidth/>
                <GridColumn path={"nome"} autoWidth/>
                <GridColumn path={"descricao"} autoWidth/>
                <GridColumn header={"Ações"} frozenToEnd autoWidth>
                    {({item}) => <Button theme="primary"
                                         onClick={() => navigate(`/roles/edit/${item.id}`)}>Edit</Button>}
                </GridColumn>
            </Grid>
        </>
    )
}


export default ListRoles;