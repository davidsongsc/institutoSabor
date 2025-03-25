import { ICursosTextos } from "@/interfaces/ICursosTextos";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';

/* Cursos | Seja bem vindo ---------------------------------------------------------*/
export const sejaBemVindoTextos: ICursosTextos = {
    h1: "Torne-se técnico em até",
    h2: "30 Dias",
    h3: "Certificação técnica reconhecida",
    tituloTexto: [
        "Para impulsionar sua carreira!",
        <>Certificação <b>reconhecido pelo MEC e publicado no SISTEC.</b> </>,
        "Enriqueça seu currículo e destaque-se no mercado de trabalho!"
    ],
    images: [
        "sistec",
        "google",
        "squalidade",
        "sconfianca",
    ],
    buttonTexto: 'Quero saber mais',
};
/* Conquiste sua Certificação           --------------------------------------------*/

export const conquisteCertificacaoTextos: ICursosTextos = {
    imagem: "curso_exp.png",
    h1: <>Conquiste sua<span className="text-primary"> certificação</span></>,
    h2: <><span className="text-primary">Técnica sem custo</span> adicional!</>,
    h3: <><b>    transforme sua paixão em uma profissão!</b></>,
    tituloTexto: [
        <>Ao adquirir qualquer um dos nossos <b>Combos Profissionalizantes,</b></>,
        <>você já ganha automaticamente o <b>nivelamento técnico para um </b></>,
        <>dos nossos Cursos Técnicos reconhecidos pelo MEC.</>
    ],
    listaItens: [
        <li className="p-2 border border-terciary rounded-md text-[.9rem]">
            <SchoolIcon className="mr-2" />
            <span>Cursos completos e atualizados</span>
        </li>,

        <li className="p-2 border border-terciary rounded-md text-[1.2rem]">
            <SettingsIcon className="mr-2" /> <span>Publicado no SISTEC</span>
        </li>,

        <li className="p-2 border border-terciary rounded-md text-[.65rem]">
            <BusinessCenterIcon className="mr-2" /> <span>Maior valorização no mercado de trabalho</span>
        </li>

    ]
}

/* Cursos | Saiba mais ---------------------------------------------------------*/
export const listaSaibaMais = [
    { titulo: "Técnico em gastronomia", icone: "cap", texto: "Aperfeiçoe suas habilidades com técnicas clássicas e contemporâneas, prepare-se para atuar em diversas áreas da cozinha profissional e desenvolva uma base sólida em gestão e sustentabilidade." },
    { titulo: "Técnico em nutrição e dietética", icone: "nutricao", texto: "Aperfeiçoe suas habilidades com técnicas clássicas e contemporâneas, prepare-se para atuar em diversas áreas da cozinha profissional e desenvolva uma base sólida em gestão e sustentabilidade." },
    { titulo: "Técnico em alimentação escolar", icone: "ingredientes", texto: "Aperfeiçoe suas habilidades com técnicas clássicas e contemporâneas, prepare-se para atuar em diversas áreas da cozinha profissional e desenvolva uma base sólida em gestão e sustentabilidade." },
    { titulo: "Técnico em alimentos", icone: "lupa", texto: "Aperfeiçoe suas habilidades com técnicas clássicas e contemporâneas, prepare-se para atuar em diversas áreas da cozinha profissional e desenvolva uma base sólida em gestão e sustentabilidade." },
    { titulo: "Técnico em guia de turismo", icone: "turismo", texto: "Aperfeiçoe suas habilidades com técnicas clássicas e contemporâneas, prepare-se para atuar em diversas áreas da cozinha profissional e desenvolva uma base sólida em gestão e sustentabilidade." },
    { titulo: "Técnico em logística", icone: "logistica", texto: "Aperfeiçoe suas habilidades com técnicas clássicas e contemporâneas, prepare-se para atuar em diversas áreas da cozinha profissional e desenvolva uma base sólida em gestão e sustentabilidade." },
    { titulo: "Técnico em segurança do trabalho", icone: "segtrabalho", texto: "Aperfeiçoe suas habilidades com técnicas clássicas e contemporâneas, prepare-se para atuar em diversas áreas da cozinha profissional e desenvolva uma base sólida em gestão e sustentabilidade." },
];

export const saibaMaisTextos: ICursosTextos = {
    titulo: <>O Instituto do Sabor</>,
    texto: <>disponibiliza uma ampla variedade de cursos técnicos por competência</>,
    buttonTexto: 'Saiba mais',
};
/* ---------------------------------------------------------------------------------*/

export const torneseTecnicotextos: ICursosTextos = {
    titulo: <>Torne-se um técnico no <span className="text-quaternary">Instituto do Sabor!</span></>,
    texto: <>a Certificação Técnica valida suas habilidades e fortalece seu currículo, ampliando suas oportunidades no mercado gastronômico. <b>Invista no seu futuro!</b></>,
    buttonTexto: 'Quero saber mais',
    listaOpcoes: [
        {
            titulo: "Chef de cozinha",
            texto: "O curso de Chef de cozinha e certificação Técnica oferece uma base solida em gastronomia, nutrição e gestão. Aprenda a preparar alimentos de alta qualidade e atuar como um chef profissional."
        },
        {
            titulo: "Diretor de alimentos e bebidas",
            texto: "O Curso de Diretor de Alimentos e Bebidas e Certificação Técnica oferece uma base solida em gastronomia, nutrição e gestão. Aprenda a liderar equipes e atuar como um diretor profissional."
        },
        {
            titulo: "Gerente de restaurante",
            texto: "O Curso de Gerente de Restaurante e Certificação Técnica oferece uma base solida em gastronomia, nutrição e gestão. Aprenda a liderar equipes e atuar como um gerente profissional."
        },
        {
            titulo: "Especialista em harmonização",
            texto: "O Curso de Especialista em Harmonização e Certificação Técnica oferece uma base solida em gastronomia, nutrição e gestão. Aprenda a liderar equipes e atuar como um especialista profissional."
        },
        {
            titulo: "Gerente de operações",
            texto: "O Curso de Gerente de Operações e Certificação Técnica oferece uma base solida em gastronomia, nutrição e gestão. Aprenda a liderar equipes e atuar como um gerente profissional."
        },
        {
            titulo: "Sommelier",
            texto: "O Curso de Sommelier e Certificação Técnica oferece uma base solida em gastronomia, nutrição e gestão. Aprenda a liderar equipes e atuar como um sommelier profissional."
        },
        {
            titulo: "Consultor gastronômico",
            texto: "O Curso de Consultor Gastrônomo e Certificação Técnica oferece uma base solida em gastronomia, nutrição e gestão. Aprenda a liderar equipes e atuar como um consultor profissional."
        },
        {
            titulo: "Consultor de cardápios",
            texto: "O Curso de Consultor de Cardápios e Certificação Técnica oferece uma base solida em gastronomia, nutrição e gestão. Aprenda a liderar equipes e atuar como um consultor profissional."
        },
    ]
};


