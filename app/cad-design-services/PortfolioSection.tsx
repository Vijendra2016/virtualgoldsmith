import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="py-20">
      <div className="w-full mx-auto px-6">

       

        <div className="grid md:grid-cols-4 gap-6">

          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
            alt="Diamond ring CAD design"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />

          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg"
            alt="Custom pendant CAD"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />

          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg"
            alt="Jewelry CAD model"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />


  <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
            alt="Jewelry CAD model"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />

          

        </div>
 {/* Full Width Image */}
        <div className="mt-8">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg"
            alt="CAD Jewellery Services"
            width={1200}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Description */}
        <p className="text-lg mt-8 text-gray-700 leading-relaxed">
We specialize in translating ideas into precise, production-ready digital models while thoughtfully combining customer images, existing jewelry references, and technical insight. Every design is developed with long-term enjoyment in mind, balancing aesthetics with real-world considerations such as durability, stone security, wearability, and manufacturing efficiency.

        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
Because our foundation is rooted in decades at the bench, we are able to anticipate potential design challenges early, guiding clients away from structural or functional issues before they become costly problems. The result is a refined digital model that stays true to the original vision while being fully prepared for confident production.
        </p>

      </div>
    </section>
  );
}