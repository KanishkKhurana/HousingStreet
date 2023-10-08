/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Script from "next/script";
import BottomNavbar from "@/components/BottomNavbar";
import Topbar from "@/components/Topbar";
import { useRouter } from 'next/router'


export default function layout({ children }) {
    const router = useRouter()

  return (
    <div className="text-white relative">      
      <Head>
        <title>HousingStreet</title>
        <meta name="description" content="HousingStreet" />
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800;900&family=Lalezar&display=swap');
        </style>
      </Head>      
      <main>
        <div className={`fixed z-10 w-full top-0 ${router.asPath==="/getting-started" || router.asPath==="/getting-started/login" || router.asPath==="/getting-started/register" ? "hidden" : ""}`}>
            <Topbar />
        </div>
        {children}
      <div className={`fixed z-10 w-full bottom-0 ${router.asPath==="/getting-started" || router.asPath==="/getting-started/login" || router.asPath==="/getting-started/register" ? "hidden" : ""}`}>
        <BottomNavbar />
      </div>
      </main>
    </div>
  );
}