'use client';

import './styles.css';
import React, { useEffect, useState } from "react";
import SobreNos from '@/components/sections/sobrenos/sobrenos';
import Footer from '@/components/footer/footer';
const Sobre: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main
           
        >
            <SobreNos />
            <Footer />
           
              {/*  */}

        </main >
    );
}

export default React.memo(Sobre);