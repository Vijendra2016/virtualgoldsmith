import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-center mb-12">
          Our CAD Designs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

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

        </div>

      </div>
    </section>
  );
}