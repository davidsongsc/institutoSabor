'use client';

import BemVindo from "@/components/homepage/bemvindo";
import CombosExclusivos from "@/components/homepage/combos/combosExclusivos";
import TransformeSuaPaixao from "@/components/homepage/outros/transforme";
export default function HomePage() {
    return (
        <div className="">
            <BemVindo />
            <TransformeSuaPaixao/>
            <CombosExclusivos />
        </div >
    );
}