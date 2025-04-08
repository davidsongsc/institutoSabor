'use client';

import './styles.css';
import React, { Suspense } from "react";
import { useInView } from 'react-intersection-observer';
import SejaBemVindo from "@/components/sections/homepage/bemvindo";

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

// Carregamento dinâmico dos componentes com React.lazy
const LazyTransformeCarreira = React.lazy(() => import('@/components/sections/homepage/paixao'));
const LazyFormacaoTecnica = React.lazy(() => import('@/components/sections/homepage/formacao'));
const LazyBlog = React.lazy(() => import('@/components/sections/homepage/blog'));
const LazyEduOn = React.lazy(() => import('@/components/sections/homepage/eduon'));
const LazyLocalizacao = React.lazy(() => import('@/components/sections/homepage/localizacao'));
const LazyFooter = React.lazy(() => import('@/components/footer/footer'));

const LazyCombosExclusivos = React.lazy(() =>
    Promise.resolve({
        default: () => {
            const Titulo = <>Conheça nossos <span className="text-primary">combos exclusivos</span></>;
            const buttonTexto = 'Conheça outros cursos';
            const Combos = require('@/components/sections/homepage/combos').default;
            return <Combos title={Titulo} buttonText={buttonTexto} />;
        }
    })
);


const HomePage: React.FC = () => {
    return (
        <main>
            <SejaBemVindo />
            
            <LazyComponent component={LazyTransformeCarreira} />
            <LazyComponent component={LazyCombosExclusivos} />
            <LazyComponent component={LazyFormacaoTecnica} />
            <LazyComponent component={LazyBlog} />
            <LazyComponent component={LazyEduOn} />
            <LazyComponent component={LazyLocalizacao} />
            <LazyComponent component={LazyFooter} />
        </main>
    );
};

export default React.memo(HomePage);
