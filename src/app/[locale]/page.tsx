import Business from "./components/Home/Business";
import BlockChains from "./components/Home/Chains";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import Features from "./components/Home/Features";
import HeroSlider from "./components/Home/HeroSlider";
import MemberAdvantage from "./components/Home/MemberBenefits";
import UtoSwapCta from "./components/Home/Utoswap";


export default function Home() {
  return (
   <>
   <HeroSlider />
   <FeaturedProducts />
   <Business />
   <BlockChains />
   <MemberAdvantage />
   <Features />
   <UtoSwapCta />
   </>
  );
}
