import { useEffect } from "react";
import WorksLayout from "../../layouts/works";
import MainLayout from "../../layouts/main";
import Works from "../../components/Works3/Works";
import CallAction from "../../components/Works3/CallAction";
import Pricing from "../../components/Home3/Pricing";
import Sites from "../../components/Home3/Sites";

const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <MainLayout footerClass="bg-dark">
      <Sites id="#plans" />
    </MainLayout>
  )
}

export default Index