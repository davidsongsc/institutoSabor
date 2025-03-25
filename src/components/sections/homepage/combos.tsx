import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { Button, Spin } from "antd";
import { useCardsDataOffline } from "@/hooks/useCardsDataOffline";
import CardCombosExclusivos from "@/components/cards/cardsCombo";
import CardCombosLoading from "@/components/cards/cardsComboLoading";
import ficticioLoading from "@/services/fake";
import { motion, AnimatePresence } from "framer-motion";

interface ICombosProps {
    title: ReactNode
    subtitle?: ReactNode
    buttonText?: string
}
const CombosExclusivos: React.FC<ICombosProps> = (
    { title, subtitle, buttonText }
) => {
    const googlePasta = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRb4Gfi3HjunpPb_-tMBmwYNfrfDQffiY1oZheCBrITYr3SV4oZ8aiVTprLoTOh5_gntnjl3U2gRNre/pub?output=csv";
    const { cards, loading, error } = useCardsDataOffline();
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <>
            <section className="mt-60 h-[130px] flex flex-col  items-center justify-center Nexa relative top-[-120px] 2xl:top-0">
                <h1 className="uppercase text-[2rem] lg:text-[3rem] xl:text-[4rem] text-center relative z-10 font-[800]" >{title}</h1>
                <p className="text-[2.2rem] text-center relative z-10">{subtitle}</p>
            </section>
            <section
                id="combos-exclusivos"
                className="flex justify-start items-center sm:items-start h-[800px] sm:h-[800px] gap-[10px] 
               bg-[url('/images/bg/background-combos.webp')] bg-no-repeat bg-top m-w-[1020px] 
               mt-[-40px] 2xl:mt-[0] relative z-10
               sm:flex-wrap sm:justify-center items-end 
               flex-row overflow-x-scroll sm:overflow-x-hidden overflow-y-hidden
               
              "
                style={{
                    backgroundSize: "100% 1200px",
                    backgroundPositionY: "-195px",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                <div className="absolute h-screen inset-0  bg-cover bg-top bg-[-30px_-280px] z-1 opacity-5"></div>

                <AnimatePresence>
                    {loading && ficticioLoading.map((card, index) => {
                        const words = card.title.split(" ");
                        const middleIndex = words.length > 3 ? Math.ceil(words.length / 2) : 1;

                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="shrink-0 sm:w-auto"
                            >
                                <CardCombosLoading
                                    card={card}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    index={index}
                                    words={words}
                                    middleIndex={middleIndex}
                                    isLoading
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                <AnimatePresence>
                    {!loading && cards.map((card, index) => {
                        const words = card.title.split(" ");
                        const middleIndex = words.length > 3 ? Math.ceil(words.length / 2) : 1;

                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
                                className="shrink-0 sm:w-auto"
                            >
                                <CardCombosExclusivos
                                    card={card}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    index={index}
                                    words={words}
                                    middleIndex={middleIndex}
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

            </section>
            <div className="flex items-center justify-center py-5">
                <Button type="primary" size="large" className="uppercase text-[calc(1rem+1.5vw)] p-8 Nexa" >{buttonText}</Button>
            </div>
        </>
    )
}

export default React.memo(CombosExclusivos);