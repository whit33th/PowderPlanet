import HomePage from "@/components/Containers/HomePage";
import JinxShortInfo from "@/components/Containers/JinxShortInfo";
import ConceptArt from "./../components/Containers/ConceptArt";
import Weapons from "../components/Containers/Weapons";
import Zaun from "./../components/Containers/Zaun";
import Footer from "./../components/Containers/Footer";
import Wall from "./../components/Containers/Wall";


export default function Home() {
  return (
    <>
      <main>
        {/* <ArcaneVideo /> */}
        <HomePage />
        <JinxShortInfo />
        <Wall />
        <Zaun />
        {/* Добавить зауну секцию с его технологиями */}
        <ConceptArt />

        {/* секция лола */}
        {/* <Skills /> */}

        <Weapons />
        <Footer />
      </main>
    </>
  );
}
