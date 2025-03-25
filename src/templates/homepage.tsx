'use client';

import './styles.css';
import React, { useEffect, useState } from "react";
import SejaBemVindo from "@/components/sections/homepage/bemvindo";
import CombosExclusivos from "@/components/sections/homepage/combos";
import TransformeCarreira from "@/components/sections/homepage/paixao";
import FormacaoTecnica from "@/components/sections/homepage/formacao";
import Blog from '@/components/sections/homepage/blog';
import EduOn from '@/components/sections/homepage/eduon';
import Localizacao from '@/components/sections/homepage/localizacao';
import Footer from '@/components/footer/footer';
const HomePage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const Titulo = <>Conheça nossos <span className="text-primary">combos exclusivos</span></>;
    const buttonTexto   = 'Conheça outros cursos';
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (

        <main
            className={`opacity-0 transition-opacity duration-1000 ease-in-out transition-delay-500 ${isVisible ? "opacity-100" : ""
                }`}
        >
            <SejaBemVindo />

            <TransformeCarreira />

            <CombosExclusivos title={Titulo} buttonText={buttonTexto}/>

            <FormacaoTecnica />
            <Blog />
            <EduOn />
            <Localizacao />
            <Footer />

            {/*  */}

        </main >
    );
}

export default React.memo(HomePage);