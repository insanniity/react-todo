import "../styles/styles.css"
import {useCallback, useEffect, useState} from "react";
import {TarefasController} from "Frontend/generated/endpoints";
import TarefaDTO from "Frontend/generated/dev/insannity/react_todo/dtos/TarefaDTO";
import {Grid, GridColumn} from "@vaadin/react-components";
import TarefaEditor from "Frontend/components/TarefaEditor";


const TarefasView = () => {
    const [tarefas, setTarefas] = useState<(TarefaDTO | undefined)[] | undefined>()
    const [selected, setSelected] = useState<TarefaDTO | null | undefined>(null);

    const fetchData = useCallback(() => {
        TarefasController.listarTarefas()
            .then((res) => setTarefas(res));
    }, [])


    useEffect(() => {
        fetchData()
    }, [fetchData]);


    const onSalvar = async (tarefa: TarefaDTO) => {
        if(tarefa.id){
            await TarefasController.atualizarTarefa(tarefa.id, tarefa);
        }else{
            await TarefasController.criarTarefa(tarefa);
        }
        fetchData();
    }


    return (
        <div className="p-m">
            <h1>Home Page</h1>
            <Grid
                items={tarefas}
                onActiveItemChanged={e =>  setSelected(e.detail.value)}
                selectedItems={selected ? [selected]: []}
            >
                <GridColumn path={"id"} />
                <GridColumn path={"titulo"} />
                <GridColumn path={"descricao"} />
                <GridColumn path={"concluida"} renderer={ props => (props.item.concluida ? "Sim" : "Não")} />
            </Grid>
            <TarefaEditor tarefa={selected} onSalvar={onSalvar} />
        </div>
    );
}


export default TarefasView;