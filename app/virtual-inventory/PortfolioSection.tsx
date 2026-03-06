import Image from "next/image";

export default function VirtualInventoryPortfolioSection() {
  return (
    <section className="py-20">
      <div className="w-full mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
            alt="Virtual inventory ring"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />

          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg"
            alt="Virtual inventory pendant"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />

          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg"
            alt="Virtual inventory jewelry model"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />

          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
            alt="Virtual inventory jewelry"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />

        </div>

        {/* Full Width Image */}
        <div className="mt-8">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg"
            alt="Virtual Inventory Services"
            width={1200}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Description */}
        <p className="text-lg mt-8 text-gray-700 leading-relaxed">
          We digitize your entire jewelry collection into production-accurate 3D models and render them beautifully for web, print, and e-commerce use. Each piece is captured with attention to detail — metal finish, gemstone color, proportions, and texture — ensuring your virtual inventory reflects the true quality of your craftsmanship.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you are a retail jeweler looking to expand your online presence or a brand needing a scalable digital catalog, our virtual inventory solution eliminates the need for costly photo shoots while delivering a consistent, polished presentation across all your sales channels.
        </p>

      </div>
    </section>
  );
}
