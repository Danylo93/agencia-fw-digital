import { useEffect } from "react";
import WorksLayout from "../../layouts/works";
import MainLayout from "../../layouts/main";
import Works from "../../components/Works3/Works";
import CallAction from "../../components/Works3/CallAction";
import Pricing from "../../components/Home3/Pricing";
import Plans from "../../components/Home3/Plans";

const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <MainLayout footerClass="bg-dark">
      <Plans id="#plans" />
    </MainLayout>
  )
}

export default Index