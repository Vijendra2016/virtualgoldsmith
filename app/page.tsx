import Image from "next/image";
import HeroImageSection from "./components/Heroimage";
import ShowcaseSection from "./components/ShowcaseSection";
export default function Home() {
  return (
   
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <main className="flex min-h-screen w-full  flex-col items-center justify-between py-2 px-16 bg-white dark:bg-black sm:items-start">
       <HeroImageSection/>
       <ShowcaseSection
      cards={[
        {
          image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6996f6c089797d2f7bf76c3d_footerforvirtualgoldsmith.png',
          title: 'Meet The Royal Gold Ring',
          description:
            'Precision-crafted 18k gold ring with timeless elegance and handcrafted perfection.',
          href: '/royal-gold-ring',
        },
        {
          image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6996f6c089797d2f7bf76c3d_footerforvirtualgoldsmith.png',
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
