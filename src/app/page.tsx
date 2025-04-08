"use client";
import { Spin } from "antd";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function HomeNative() {
  const [showPage, setShowPage] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPage) return <Spin size="large" tip="Carregando..." />
  else (router.push(`/home`));

  return;

}
