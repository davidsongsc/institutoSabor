'use client';

import './styles.css';
import React, { useEffect, useState } from "react";
import Footer from '@/components/footer/footer';
import CursosSection from '@/components/sections/cursos/cursosSection';
import CombosExclusivos from '@/components/sections/homepage/combos';
import Localizacao from '@/components/sections/homepage/localizacao';

const Cursos: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main

        >
            <CursosSection />
            <CombosExclusivos />
            <Localizacao />
            <Footer />
        </main >
    );
}

export default React.memo(Cursos);