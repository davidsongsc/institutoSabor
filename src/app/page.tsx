"use client";
import { Spin } from "antd";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import SejaBemVindo from "@/components/sections/homepage/bemvindo";
export default function HomeNative() {
  const [showPage, setShowPage] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!showPage) { return <Spin className="h-screen w-screen flex justify-center items-center" size="large" ></Spin> }
  else (router.push(`/home`));

  return;

}
