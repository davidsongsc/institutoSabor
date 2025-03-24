'use client';

import './styles.css';
import React, { useEffect, useState } from "react";
import Footer from '@/components/footer/footer';
import FaleConoscoComponent from '@/components/sections/faleconosco/faleconosco';

const FaleConosco: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main

        >
    
            <FaleConoscoComponent />
            <Footer />

            {/*  */}

        </main >
    );
}

export default React.memo(FaleConosco);