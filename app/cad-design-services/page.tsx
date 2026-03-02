import Image from "next/image";
import CADHeroImageSection from "./HeroImageSection";
import ShowcaseSection from "../components/ShowcaseSection";
import CADProcessSection from "./CADProcessSection";
export default function Home() {
  return (
   
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <main className="flex min-h-screen w-full  flex-col items-center justify-between py-2  bg-white dark:bg-black sm:items-start">
       <CADHeroImageSection/>
      <CADProcessSection/>
       <ShowcaseSection
      cards={[
        {
          image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58732f7fc30d460e53e8d_virtualgold.jpeg',
          title: 'Meet The Royal Gold Ring',
          description:
            'Precision-crafted 18k gold ring with timeless elegance and handcrafted perfection.',
          href: '/royal-gold-ring',
        },
        {
          image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg',
          title: 'Discover The Signature Necklace',
          description:
            'A bespoke necklace designed with modern refinement and traditional goldsmith mastery.',
          href: '/signature-necklace',
        },
      ]}
    />
       
        
        
      </main>
    </div>
  );
}
