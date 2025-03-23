'use client';

import './styles.css';
import React from "react";
import SejaBemVindo from "@/components/sections/homepage/bemvindo";
import CombosExclusivos from "@/components/sections/homepage/combos";
import TransformeCarreira from "@/components/sections/homepage/paixao";
const HomePage: React.FC = () => {
    return (
        <main className="">

            <SejaBemVindo />
            <TransformeCarreira/>
            {/* 
            <CombosExclusivos />
      
        <FormacaoTecnica />
            */}

        </main >
    );
}

export default React.memo(HomePage);