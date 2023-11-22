import { useEffect } from "react";
import MainLayout from "../../layouts/main";
import Header from "../../components/Home1/Header";
import Services from "../../components/Home1/Services";
import Block from "../../components/Home1/Block";
import Works from "../../components/Home1/Works";
import Testimonials from "../../components/Home1/Testimonials";
import Clients from "../../components/Home1/Clients";
import { GoogleTagManager } from '@next/third-parties/google'

const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.remove("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <MainLayout footerClass="bg-dark">
      <GoogleTagManager gtmId="GTM-5XFB7CTQ" />
      <Header />
      <Services />
      <Block />
      <Works />
      <Testimonials />
      <Clients />
     
      
    </MainLayout>
  )
}

export default Index