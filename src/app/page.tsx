import HomePage from "@/components/Containers/HomePage";
import JinxShortInfo from "@/components/Containers/JinxShortInfo";
import ConceptArt from "@/components/Containers/ConceptArt";
import Zaun from "@/components/Containers/Zaun";
import Footer from "@/components/Containers/Footer";
import Wall from "@/components/Containers/Wall";

export default function Home() {
  return (
    <main>
      <HomePage />
      <JinxShortInfo />
      <Wall />
      <Zaun />
      <ConceptArt />
      <Footer />
    </main>
  );
}
