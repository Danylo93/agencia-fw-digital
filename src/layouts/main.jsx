/* eslint-disable @next/next/no-css-tags */
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const MainLayout = ({ children, footerClass }) => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
      else navbar.classList.remove("nav-scroll");
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/base.css" />
      </Head>

      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <FloatingWhatsApp phoneNumber="5511951508630" accountName="Agência FW Digital" chatMessage="Olá, seja muito bem vindo, em que posso ajuda-lo(a)?" placeholder="Digite aqui a sua mensagem" statusMessage="Marketing e Desenvolvimento"/>
      <Footer classText={footerClass} />
    </>
  );
};

export default MainLayout;
