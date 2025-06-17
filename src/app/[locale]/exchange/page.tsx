import DexAdvantage from "../components/metaverse/Advantage";
import EarnUtop from "../components/metaverse/Earn";
import Lending from "../components/metaverse/Lending";
import MetaHero from "../components/metaverse/MetaHero";
import UtopTrade from "../components/metaverse/Trade";


export default function Exchange()
{
    return (
        <>
          <MetaHero />
          <UtopTrade />
          <DexAdvantage />
          <EarnUtop />
          <Lending />
        </>
    )
    
}