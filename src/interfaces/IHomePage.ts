import { ReactNode } from "react";

export interface IHomePage {
    titulo?: ReactNode;
    h1?: ReactNode;
    h2?: ReactNode;
    h3?: ReactNode;
    h4?: ReactNode;
    h5?: ReactNode;
    texto?: ReactNode | string[];
    tituloTexto?: ReactNode[];
    images?: string[];
    imagem?: string;
    buttonTexto?: string;
    listaItens?: ReactNode[];
    listaOpcoes?: { titulo: string; texto: string; }[];
}
