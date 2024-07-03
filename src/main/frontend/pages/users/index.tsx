import UserDTO from "Frontend/generated/dev/insannity/react_todo/dtos/UserDTO";
import {useEffect, useState} from "react";
import {UserController} from "Frontend/generated/endpoints";
import {Button, Grid, GridColumn} from "@vaadin/react-components";
import {useNavigate} from "react-router-dom";


const ListUsers = () => {
    const [users, setUsers] = useState<(UserDTO | undefined)[] | undefined>()
    const navigate = useNavigate()

    useEffect(() => {
        UserController.findAll().then(setUsers);
    }, []);

    console.log(users)


    return (
        <>
            <Button onClick={() => navigate("/users/add")} theme="primary" className="mb-l">Adicionar</Button>
            <Grid
                items={users}
            >
                <GridColumn path={"id"} autoWidth />
                <GridColumn path={"email"} autoWidth />
                <GridColumn path={"nome"} autoWidth />
                <GridColumn path={"roles"} autoWidth />
                <GridColumn header={"Ações"} frozenToEnd autoWidth>
                    {({item}) => <Button theme="primary" onClick={() => navigate(`/users/edit/${item.id}`)}>Edit</Button>}
                </GridColumn>
            </Grid>
        </>
    )
}

export default ListUsers;