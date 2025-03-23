import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import Carrossel from "@/components/carrossel/carrossel";


const BlogSabor: React.FC = () => {
    const width = useWindowWidth();

    return (
        <section className={`bg-[url('/images/bg/background-sabor.webp')]
                                bg-cover bg-center w-full  
                                grid grid-cols-12 items-start 
                                ${width <= 1920 ? "" : "max-w-[1900px] mx-auto  bg-[0px_-80px]  h-auto"}`}>



            <div className="col-span-12">
                <h1 className="text-left sm:text-center px-10 sm:px-0 text-[2.1rem] sm:text-[2.9rem] md:text-[3.9rem] 2xl:text-[8rem] Nexa text-primary pt-10 uppercase font-bold ">Blog do sabor</h1>
                <h2 className="text-left sm:text-center px-10 sm:px-0 text-[1.02rem] md:text-[1.2rem] Nexa text-tertiary  font-bold ">O Blog do sabor é o espaço ideal para apaixonados por gastronomia!</h2>
                <h3 className="text-left sm:text-center px-10 sm:px-0 text-[1.02rem] sm:text-[0.8rem] md:text-[0.9rem] Nexa text-tertiary font-normal ">Aqui, você encontra dicas, receitas, técnicas culinárias e as últimas tendências do mundo da culinária</h3>
                <div>
                    <Carrossel />
                </div>
            </div>

        </section>
    );
};

export default React.memo(BlogSabor);