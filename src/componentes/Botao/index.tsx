import React from "react";
import style from './Botao.module.scss';

interface props {
    texto: string
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}


export default function Botao({ onClick, type, texto }: props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {texto}
        </button>
    )

}

