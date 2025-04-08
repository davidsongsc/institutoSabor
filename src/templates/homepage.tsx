'use client';

import './styles.css';
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useInView } from 'react-intersection-observer';
import SejaBemVindo from "@/components/sections/homepage/bemvindo";
import Footer from '@/components/footer/footer';
import CombosExclusivos from '@/components/sections/homepage/combos';

const LazyComponent = ({ component: Component }: { component: React.LazyExoticComponent<React.ComponentType<any>> }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref}>
            {inView && (
                <Suspense fallback={<div>Carregando...</div>}>
                    <Component />
                </Suspense>
            )}
        </div>
    );
};

const LazyTransformeCarreira = React.lazy(() => import('@/components/sections/homepage/paixao'));
const LazyCombosExclusivosWrapper = React.lazy(() =>
    Promise.resolve({
        default: () => (
            <CombosExclusivos title={<>Conheça nossos <span className="text-primary">combos exclusivos</span></>} buttonText={"Conheça outros cursos"} />
        )
    })
);
const LazyFormacaoTecnica = React.lazy(() => import('@/components/sections/homepage/formacao'));
const LazyBlog = React.lazy(() => import('@/components/sections/homepage/blog'));
const LazyEduOn = React.lazy(() => import('@/components/sections/homepage/eduon'));
const LazyLocalizacao = React.lazy(() => import('@/components/sections/homepage/localizacao'));

const HomePage: React.FC = () => {
    const Titulo = <>Conheça nossos <span className="text-primary">combos exclusivos</span></>;
    const buttonTexto = 'Conheça outros cursos';

    return (
        <main>
            <SejaBemVindo />

            <LazyComponent component={LazyTransformeCarreira} />
            <LazyComponent component={LazyCombosExclusivosWrapper} />
            <LazyComponent component={LazyFormacaoTecnica} />
            <LazyComponent component={LazyBlog} />
            <LazyComponent component={LazyEduOn} />
            <LazyComponent component={LazyLocalizacao} />

            <Footer />
        </main>
    );
};

export default React.memo(HomePage);
