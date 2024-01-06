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
      <FloatingWhatsApp phoneNumber="5511964891128" accountName="Agência FW Digital" chatMessage="Olá, seja muito bem vindo, em que posso ajuda-lo(a)?" placeholder="Digite aqui a sua mensagem" statusMessage="Marketing e Desenvolvimento" avatar="https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/370001993_134407156399659_3664457339542101492_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=sOGOrHIDzuYAX_nsysm&_nc_ht=scontent-gru2-2.xx&oh=00_AfAS9Ogtprx6s6z9AXQhKQhtqPMcgcFcWZRTg36NdzAhVw&oe=659F0934" />
      <Footer classText={footerClass} />
    </>
  );
};

export default MainLayout;
