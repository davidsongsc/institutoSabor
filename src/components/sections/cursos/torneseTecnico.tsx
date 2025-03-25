import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from "framer-motion";
import { torneseTecnicotextos } from "@/consts/cursosTextos";
import { Button } from "antd";

const TorneseTecnico: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <section className="grid grid-cols-12 items-center justify-center text-center h-auto mt-16 bg-terciary text-secondary">
                <div className="col-span-12">
                    <h1 className="uppercase font-bold text-[1.4rem] sm:text-[2.2rem]">
                        {torneseTecnicotextos.titulo}
                    </h1>
                </div>
                <ul className="col-span-12 grid grid-cols-12 items-start justify-center text-center h-auto gap-4 sm:px-20 cursor-pointer my-4">
                    {torneseTecnicotextos.listaOpcoes?.map((item, index) => (
                        <li
                            key={index}
                            className="col-span-6 grid grid-cols-12 items-center justify-center text-center h-auto bg-terciary text-secondary"
                        >
                            <div
                                className="col-span-12"
                                onClick={() => toggleExpand(index)}
                            >
                                <h1
                                    className="uppercase font-bold text-[1.4rem] sm:text-[2rem] text-left border border-quaternary rounded-lg flex items-center gap-2 px-2"
                                >
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{
                                            rotate: expandedIndex === index ? 90 : 0,
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <ArrowRightIcon sx={{ fontSize: 70 }} className="text-quaternary" />
                                    </motion.div>
                                    {item.titulo}
                                </h1>
                                <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: expandedIndex === index ? "auto" : 0,
                                        opacity: expandedIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden text-[1rem] sm:text-[1.2rem] mt-2 text-left px-10 bg-gray-700 p-2  rounded-lg"
                                >
                                    {item.texto}
                                </motion.p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="col-span-12">
                    <Button
                        type="primary"
                        className="text-[0.8rem] sm:text-[2rem] py-6 uppercase font-bold ">
                        {torneseTecnicotextos.buttonTexto}
                    </Button>
                </div>
            </section>
        </>
    );
};

export default React.memo(TorneseTecnico);