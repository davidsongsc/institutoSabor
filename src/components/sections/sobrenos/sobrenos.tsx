import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import Image from "next/image";
import HeaderExterno from "@/components/header/sobre/header";
import Localizacao from "../homepage/localizacao";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ExtensionIcon from '@mui/icons-material/Extension';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
const SobreNos: React.FC = () => {
    const width = useWindowWidth();
    const listaTalentos = [
        {
            name: "Talento 1",
            description: "No Instituto do Sabor, unimos teoria e prática para que você aprimore suas habilidades e transforme ingredientes em verdadeiras obras-primas.",
            icone: <RestaurantIcon />,
        },
        {
            name: "Talento 2",
            description: "Além de cozinhar, um grande profissional sabe gerenciar e inovar. No Instituto do Sabor, você se capacita para empreender com sucesso na gastronomia.",
            icone: <BusinessCenterIcon />,
        },
        {
            name: "Talento 3",
            description: "A gastronomia é arte, e o talento torna cada prato único. No Instituto do Sabor, estimulamos a criatividade e experimentação, ajudando você a desenvolver seu próprio estilo.",
            icone: <ExtensionIcon />,
        },
        {
            name: "Talento 4",
            description: "Com técnica, talento e visão empreendora, você estará pronto para se destacar. No Instituto do Sabor, preparamos você para uma carreira de sucesso na gastronomia.",
            icone: <EmojiEventsIcon />,
        },
    ];

    return (
        <>
            <HeaderExterno />

            <section>
                <aside
                    id="sobrenos"
                    className={`bg-[url('/images/bg/background-formacao.webp')]
                        bg-cover bg-center w-full bg-primary
                        grid grid-cols-12 items-end 
                        mx-auto h-full lg:h-[400px] h-[100px] `}
                >

                    <div className="col-span-6 hidden md:block"></div>
                    <div className="col-span-12 md:col-span-6 flex items-center justify-center">
                        <div className="col-span-12 flex items-center justify-center max-w-[1900px] mx-auto">
                            <ul className="gap-4 grid grid-cols-6 items-center gap-2">
                                <li className="col-span-1"></li>
                                {[
                                    "mec",
                                    "google",
                                    "sperfil",
                                    "squalidade",
                                    "sconfianca",

                                ].map((logo, index) => (
                                    <li key={index} className="col-span-1">
                                        <Image src={`/images/selos/${logo}.png`} alt="logo" width={350} height={100} className="px-2" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>

                <aside className="bg-primary grid grid-cols-12 items-start h-auto bg-secondary  md:h-[502px] lg:md:h-[672px]  sm:px-20 py-6 px-2">
                    <Image src="/images/ideias/cozinheiros.png" alt="logo" width={600} height={800}
                        className="col-span-12 md:col-span-6 rounded-[30px] relative top-[0px] lg:top-[-200px] md:left-[-40px] p-2" />
                    <div
                        className="col-span-12 md:col-span-6 Nexa 
                                    text-[1.1rem] sm:text-[2rem]
                                    md:text-[1.4rem] lg:text-[3.4rem]
                                 ">
                        <h1 className="">Nós somos</h1>
                        <h2 className="uppercase font-bold text-primary 
                                        text-[1.1rem] sm:text-[2rem]
                                        md:text-[1.7rem] lg:text-[2rem] xl:lg:text-[3rem] ">
                            Instituto do Sabor</h2>
                        <h3 className="text-[1.1rem] sm:text-[2rem]
                                        md:text-[1.1rem] lg:text-[2rem]
                                        xl:lg:text-[2rem] 2xl:lg:text-[3rem]
                                        font-bold">Transformando Paixão em Carreira!</h3>
                        <div className="text-[.7rem] md:text-[1rem] lg:text-[1.3rem] 2xl:text-[2rem]">

                            <p>No Instituto do Sabor, a gastronomia é mais que cozinhar,
                                é uma arte que une paixão, técnica e inovação.
                                <span className="font-bold">
                                    Formamos chefs, lideres e empreendedores,
                                    prontos para criar experiências marcantes e
                                    gerir negócios de sucesso.
                                </span>
                                Nossa metodologia
                                combina teoria sólida e prática intensiva,
                                preparando profissionais para os desafios
                                do mercado. Aqui, talento e criatividade
                                se transformam em excelência gastronômica.</p>
                        </div>
                    </div>
                </aside>

                <aside id="blog-do-sabor" className={`bg-[url('/images/bg/background-formacao.webp')]
                        bg-cover bg-center w-full bg-primary
                        grid grid-cols-12 items-start text-secondary 
                        mx-auto h-full xl:h-[500px] h-[300px] py-8`}>

                    <div className="col-span-12 flex flex-col items-center justify-center">
                        <div className="col-span-12 flex flex-col items-center justify-center max-w-[1900px] mx-auto mt-6">
                            <h1 className="text-[1.4rem] sm:text-[2.7rem] Nexa font-bold uppercase">A Receita do sucesso:</h1>
                            <h2 className="text-[1rem] sm:text-[2.7rem] Nexa  ">Técnica, talento e empreendedorismo</h2>
                        </div>
                        <div className="grid grid-cols-12 gap-8 mt-8">
                            {listaTalentos.map((talento, index) => (
                                <div key={index} className="col-span-12 sm:col-span-6  flex items-center w-[300px] lg:w-[500px] gap-8">
                                    <div className=" text-primary bg-secondary rounded-full p-2">
                                        {React.cloneElement(talento.icone, { sx: { fontSize: "50px" } })}
                                    </div>
                                    <p className="text-[1rem]">{talento.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
   

                {/*   */}
            </section>
            <Localizacao />
        </>
    );
};

export default React.memo(SobreNos);