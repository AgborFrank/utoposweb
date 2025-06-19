
import Image from "next/image";


export default function Metaverse() {
    const Cards = [
        {
            title: 'Online Shopping',
            description: 'our state-of-the-art ecommerce platform allows you to browse, shop and pay with ease, all powered by our UTOP token.',
            image: '/assets/img/knight.svg'
        },
        {
            title: 'Connect, Date & Socialize',
            description: 'our social networking site dedicated solely to the community’s needs and interests.',
            image: '/assets/img/icon-colors.png'
        },
        {
            title: 'IoT, AI, blockchain, VR, and robotic',
            description: 'Internet of Things covering an entire urban area, all fueled by AI, blockchain, VR, and robotic technologies',
            image: '/assets/img/play-2.svg'
        }
    ]
    return (
      <section className="bg-black mt-10">
        <div className="max-w-screen-xl mx-auto px-6 py-8 sm:py-16 lg:px-8 lg:py-24 flex md:flex-row flex-col items-center justify-center md:gap-40">
          <div className="md:w-1/2 w-full space-y-3 flex flex-col">
          <span className="inline-block bg-primary text-white md:text-lg w-fit text-md font-semibold px-3 py-1 rounded-full mb-4">
                  Utoverse
                </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Connect, Play, Earn and Relax in Utoverse
            </h1>
            <p>
              Utopos city is the ultimate destination for a futuristic and
              exciting lifestyle! it aims to offer a unique blend of ecommerce,
              gaming, dating, innovation, social networking, leisure, and
              education - all in one place.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col space-y-3">
              {Cards.map((card, index) => (
                <div
                  className="border-1 border-purple-300/15  shadow-lg  bg-[#13111AFF] hover:bg-black items-bottom justify-center rounded-2xl py-3 px-6"
                  key={index}
                >
                  <h1 className="text-xl mb-2">{card.title}</h1>
                  <p className="text-[14px] text-gray-400">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}