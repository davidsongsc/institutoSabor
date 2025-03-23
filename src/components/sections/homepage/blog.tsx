import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import Carrossel from "@/components/carrossel/carrossel";


const BlogSabor: React.FC = () => {
    const width = useWindowWidth();

    return (
        <section className={`bg-[url('/images/bg/background-sabor.webp')]
                                bg-cover bg-center w-full  
                                grid grid-cols-12 items-start 
                                ${width <= 1920 ? "bg-[0px_-90px]" : "max-w-[1900px] mx-auto bg-[0px_-90px] h-auto"}`}>



            <div className="col-span-12">
                <h1 className="text-center text-blogTitle Nexa text-primary pt-10 uppercase font-bold ">Blog do sabor</h1>
                <h2 className="text-center text-blogSubTitle Nexa text-tertiary mt-[-35px]  font-bold ">O Blog do sabor é o espaço ideal para apaixonados por gastronomia!</h2>
                <h3 className="text-center text-blogText Nexa  text-tertiary font-normal ">Aqui, você encontra dicas, receitas, técnicas culinárias e as últimas tendências do mundo da culinária</h3>
                <div>
                    <Carrossel />
                </div>
            </div>

        </section>
    );
};

export default React.memo(BlogSabor);