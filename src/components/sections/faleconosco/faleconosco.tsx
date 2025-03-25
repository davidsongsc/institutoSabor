import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import Image from "next/image";
import HeaderExterno from "@/components/header/home/header";
import Localizacao from "../homepage/localizacao";
import { Button } from "antd";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ChatIcon from '@mui/icons-material/Chat';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const FaleConoscoComponent: React.FC = () => {
    const width = useWindowWidth();
    const canaisOficiais = [
        {
            name: "Whatsapp",
            icone: <WhatsAppIcon className="text-primary" fontSize="large" />,
        },
        {
            name: "Chat",
            icone: <MarkUnreadChatAltIcon className="text-primary" fontSize="large" />,
        },
        {
            name: "Messenger",
            icone: <ChatIcon className="text-primary" fontSize="large" />,
        },
        {
            name: "Email",
            icone: <MailOutlineIcon className="text-primary" fontSize="large" />,
        },
        {
            name: "Duvidas",
            icone: <HelpOutlineIcon className="text-primary" fontSize="large" />,
        },
    ];
    return (
        <>
            <HeaderExterno />
            <section >
                <aside
                    id="faleconosco"
                    className={` w-full bg-quinary
                                   grid grid-cols-12 items-center 
                                   mx-auto h-full sm:pt-24 sm:px-[140px] sm:py-20 px-2`}
                >
                    <div className="col-span-12 lg:col-span-6 flex flex-col items-start justify-center">
                        <div className="text-[2.7rem] md:text-[4rem] lg:text-[3rem] 2xl:text-[5rem] uppercase font-bold ">
                            <h1 className="text-secondary bg-primary rounded-[10px]  px-2 ">Fale Conosco</h1>
                            <h2 className="mt-[-10px] px-2">Estamos aqui</h2>
                            <h2 className="mt-[-20px] px-2">para você</h2>
                        </div>
                        <div className="text-[.9rem] md:text-[1.3rem] lg:text-[.9rem]">
                            <p>
                                Tem dúvidas, sugestões ou quer saber mais sobre
                            </p>
                            <p>
                                nossos cursos? <span className="font-bold">Entre em contato e descubra como</span>
                            </p>
                            <p>
                                <span className="font-bold">podemos ajudar na sua jornada gastronômica!</span>
                            </p>
                            <br />
                        </div>
                        <Button type="primary">Entre em contato</Button>
                    </div>

                    <Image className="col-span-6 " src={'/images/outros/faleconosco.png'}
                        alt="Fale Conosco"
                        width={800}
                        height={800} />
                </aside>

            </section>
            <section className="grid grid-cols-12 items-center justify-center">
                <aside className="col-span-12 flex flex-col items-center justify-center Nexa">
                    <h1 className="text-[1.2rem] lg:text-[3rem]  uppercase font-bold pt-10">Canais Oficiais de atendimento</h1>
                    <div className="grid sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 grid-cols-4 items-center justify-center gap-2 font-bold">
                        <div key="telefone" className="col-span-2 border border-primary flex flex-col items-start justify-start rounded-[10px] p-2 h-36 w-44">
                            <div className="flex border border-b-terciary w-full justify-between items-center"> <CallIcon className="text-primary " fontSize="large" />
                                <p>Numero para contato</p>
                            </div>
                            <div >
                                <p>(21) <span className="font-normal">xxxxx-xxxx</span></p>
                                <p>(21) <span className="font-normal">xxxxx-xxxx</span></p>
                            </div>
                        </div>
                        {canaisOficiais.map((canal, index) => (
                            <div key={index} className="col-span-2 border border-primary flex flex-col items-start justify-between rounded-[10px] p-2 h-36 w-44">
                                {canal.icone}
                                <div className="flex w-full justify-between items-end ">
                                    <p >{canal.name} </p><KeyboardArrowRightIcon fontSize="small" className="border border-terciary rounded-full transform scale-[.8] " />
                                </div>

                            </div>
                        ))}
                    </div>
                </aside>
            </section>
            <Localizacao />
        </>
    );
};

export default React.memo(FaleConoscoComponent);