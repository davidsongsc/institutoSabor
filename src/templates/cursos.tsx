'use client';

import './styles.css';
import React, { useEffect, useState } from "react";
import Footer from '@/components/footer/footer';
import CursosSection from '@/components/sections/cursos/cursosSection';
import CombosExclusivos from '@/components/sections/homepage/combos';
import Localizacao from '@/components/sections/homepage/localizacao';
import CursosSaibaMais from '@/components/sections/cursos/saibaMais';
import TorneseTecnico from '@/components/sections/cursos/torneseTecnico';

const Cursos: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const titulo = <><span className="text-primary">Escolha seu combo,</span> conquiste seu certificado</>;
    const stitulo = <>e saia como um <b>técnico reconhecido pelo MEC!</b></>;
    const buttonTexto = 'Saiba mais';
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main

        >
            <CursosSection />
            <CombosExclusivos title={titulo} subtitle={stitulo} buttonText={buttonTexto} />
            <CursosSaibaMais />
            <TorneseTecnico />
            <Localizacao />
            <Footer />
        </main >
    );
}

export default React.memo(Cursos);