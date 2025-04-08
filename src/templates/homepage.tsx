'use client';

import './styles.css';
import React, { Suspense, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SejaBemVindo from '@/components/sections/homepage/bemvindo';
import { Spin } from 'antd';

// Lazy imports
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

// Lista dos componentes para carregar dinamicamente
const componentsToLoad = [
  { id: 'paixao', component: LazyTransformeCarreira },
  { id: 'combos', component: LazyCombosExclusivos },
  { id: 'formacao', component: LazyFormacaoTecnica },
  { id: 'blog', component: LazyBlog },
  { id: 'eduon', component: LazyEduOn },
  { id: 'localizacao', component: LazyLocalizacao },
  { id: 'footer', component: LazyFooter },
];

// Componente que carrega ao entrar na tela
const LazyScrollLoader = ({
  component: Component,
  onInView,
}: {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  onInView?: () => void;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // aciona com 5% do elemento visível
  });

  useEffect(() => {
    if (inView) {
      console.log('Componente entrou na view');
      onInView?.();
    }
  }, [inView, onInView]);

  return (
    <div ref={ref} style={{ minHeight: '300px', marginBottom: '50px' }}>
      {inView && (
        <Suspense fallback={<div className="w-full flex justify-center py-8"><Spin className='flex justify-center items-center' size="large" /></div>}>
          <Component />
        </Suspense>
      )}
    </div>
  );
};

const HomePage: React.FC = () => {
  const [loadedCount, setLoadedCount] = useState(0);

  return (
    <main>
      <SejaBemVindo />

      {componentsToLoad.map((item, index) => {
        if (index > loadedCount) return null;

        return (
          <LazyScrollLoader
            key={item.id}
            component={item.component}
            onInView={() => setLoadedCount((prev) => Math.max(prev, index + 1))}
          />
        );
      })}
    </main>
  );
};

export default React.memo(HomePage);
