import { useEffect } from "react";
import Works from "../../components/Works2";
import WorksLayout from "../../layouts/works";
import MainLayout from "../../layouts/main";
import PWA from "../../components/Home3/Plans_pwa";

const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <MainLayout footerClass="bg-dark">
      <Works />
       <PWA id="#plans" />
    </MainLayout>
  )
}

export default Index