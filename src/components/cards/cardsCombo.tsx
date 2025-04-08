import Image from "next/image";
import React, { useState } from "react";
import { Button, Spin } from "antd";
import { CardData } from "@/hooks/useCardsData";

interface CardCombosProps {
    card: CardData;
    setActiveIndex: any;
    activeIndex: number;
    index: number;
    words: string[];
    middleIndex: number;
}
const CardCombosExclusivos: React.FC<CardCombosProps> = ({
    card,
    activeIndex,
    setActiveIndex,
    index,
    words,
    middleIndex
}) => {


    return (
        <div
            key={card.id}
            onMouseEnter={() => setActiveIndex(index)}
            className={`col-span-2 relative z-10 transition-all duration-500 ease-in-out my-4 w-[340px] ${activeIndex === index ? "group" : ""
                }`}
        >
            <div
                className={`h-[690px] ${activeIndex === index ? "h-[740px] translate-y-0" : "translate-y-[30px] "
                    } transform rounded-[20px] bg-quinary transition-all duration-500 ease-in-out`}
            >
                <div className="relative overflow-hidden flex flex-col items-center rounded-[20px] border border-black h-full">
                    <div
                        className={` w-full flex flex-col items-center justify-start rounded-[10px]
                                                    transition-all duration-300 px-2  h-[290px]
                                                    ${activeIndex === index
                                ? "text-secondary bg-primary py-10"
                                : "group-hover:text-secondary group-hover:bg-primary py-4"
                            }`}
                    >
                        <h3 className={`text-5xl text-center uppercase font-[700]`}>
                            {words.slice(0, middleIndex).join(" ")}
                        </h3>
                        <h3
                            className={`text-5xl text-center uppercase font-[700] border-b-2 border-senary w-[300px] mb-2`}
                        >
                            {words.slice(middleIndex).join(" ")}
                        </h3>

                        <p className="text-sm text-center">{card.description}</p>
                        <Button
                            type="primary"
                            className={`mt-5 px-5 py-8 uppercase rounded-[10px] text-[2.7rem] ${activeIndex === index ? "bg-quaternary" : "group-hover:bg-quaternary"
                                }`}
                            onClick={() => {
                                const element = document.getElementById('seja-bem-vindo');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Saiba mais
                        </Button>

                    </div>

                    <div className="w-full bg-gray-100 flex items-start justify-start" >
                        <ul >
                            <li className={` transition-all duration-200 ease-in-out
                                                            ${activeIndex === index
                                    ? "mt-4"
                                    : "mt-[-28px] "
                                }`}></li>
                            {card.lista.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-center font-bold mb-4"
                                >
                                    <div className="flex items-center justify-start w-full">
                                        <Image src={`/images/items/${item.img}.webp`} alt="logo" width={90} height={100}
                                            priority={false}
                                            quality={75} ></Image>
                                        <span className="text-left text-[1.1rem] w-[210px]">{item.texto}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default React.memo(CardCombosExclusivos);