import TarefaDTO from "Frontend/generated/dev/insannity/react_todo/dtos/TarefaDTO";
import {useForm} from "@vaadin/hilla-react-form";
import TarefaDTOModel from "Frontend/generated/dev/insannity/react_todo/dtos/TarefaDTOModel";
import {Button, Checkbox, TextField} from "@vaadin/react-components";
import {useEffect} from "react";


type Props = {
    tarefa: TarefaDTO | undefined | null;
    onSalvar: (tarefa: TarefaDTO) => Promise<void>;
}


const TarefaEditor = ({tarefa, onSalvar}: Props) => {
    const {field, model , submit, read} = useForm(TarefaDTOModel, {onSubmit: onSalvar});

    useEffect(() => {
        read(tarefa)
    }, [tarefa]);

    return (
        <div className={"grid grid-cols-4 gap-s items-baseline"}>
            <TextField label="Nome" {...field(model.titulo)} />
            <TextField label="Descrição" {...field(model.descricao)} />
            <Checkbox label="Status" {...field(model.concluida)} />
            <Button onClick={submit} theme={"primary"}>Salvar</Button>
        </div>
    );
}


export default TarefaEditor;