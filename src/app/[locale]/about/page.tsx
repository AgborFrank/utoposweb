import AboutHero from "../components/About/AboutHero";
import ConnectSection from "../components/About/ConnectSection";
import CryptoCommunitySection from "../components/About/CryptoCommunitySection";
import GetInvolved from "../components/About/GetInvolved";
import BlockChains from "../components/Home/Chains";
import Features from "../components/Home/Features";
import UtoSwapCta from "../components/Home/Utoswap";



export default function About() {
    return (
        <>
        <AboutHero />
        <CryptoCommunitySection />
        <ConnectSection />
        <GetInvolved />
        <BlockChains />
        <UtoSwapCta />
        <Features />
        
        </>
    );
}