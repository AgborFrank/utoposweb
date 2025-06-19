import Image from "next/image";


export default function Play() {
    const Cards = [
        {
            title: 'Real Strategy',
            description: 'Classic rules, pro-level play.',
            image: '/assets/img/knight.svg'
        },
        {
            title: 'On-Chain Rewards',
            description: 'Earn tokens for every win.',
            image: '/assets/img/icon-colors.png'
        },
        {
            title: 'Fair Play',
            description: 'Built on transparent, tamper-proof smart contracts.',
            image: '/assets/img/play-2.svg'
        },
        {
            title: 'Global Rankings',
            description: 'Compete in seasonal leaderboards.',
            image: '/assets/img/trophy.webp'
        }
    ]
    return (
      <section className="bg-gradient-to-br from-black to-[#26013FFF]">
        <div className="max-w-screen-xl mx-auto px-6 py-8 sm:py-16 lg:px-8 lg:py-24">
          <h1 className="text-4xl md:text-4xl font-semibold mb-2">Outplay. Outlast. Own the Board</h1>
          <p>KingFi Chess redefines the ancient game of kings with</p>

          <div className="grid grid-cols-2 md:grid-cols-4 space-y-3 mt-10 gap-4">
            {Cards.map ((card, index) => (
                <div className="border-1 border-purple-300/15 md:h-[180px] shadow-lg h-[160px] bg-[#0A090D66] hover:bg-black items-bottom justify-center rounded-2xl py-3 px-6" key={index} >
                    <div className="con h-14 w-14 rounded-full bg-purple-600/10 p-3 mb-3 overflow-hidden">
                        <Image src={card.image} alt={card.title} width={30} height={30} className=" object-contain" />                
                    </div>
                    <h1 className="text-2xl mb-3">{card.title}</h1>
                    <p className="text-[14px] text-gray-400">{card.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    );
}