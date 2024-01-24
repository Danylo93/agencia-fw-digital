import { useEffect } from "react";
import Works from "../../components/Works1";
import WorksLayout from "../../layouts/works";
import Apps from "../../components/Home3/Plans_apps";
import MainLayout from "../../layouts/main";
const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <MainLayout footerClass="bg-dark">
      <Works />
      <Apps />
    </MainLayout>
      
    
  )
}

export default Index