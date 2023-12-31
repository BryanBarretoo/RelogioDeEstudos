import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { Itarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from 'uuid';

interface props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>

}

export default function Formulario({ setTarefas, }: props) {

    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")

    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ])
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    id="tarefa"
                    placeholder="O que voce quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step='1'
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao
                type="submit"
                texto='Adicionar'
            />
        </form>
    )
}

