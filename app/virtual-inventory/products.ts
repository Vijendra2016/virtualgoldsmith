export interface VirtualInventoryProduct {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  thumbnails: string[];
  inquireLink: string;
  startProjectLink: string;
  matchingItems?: { id: string; image: string; title: string }[];
}

export const virtualInventoryProducts: VirtualInventoryProduct[] = [
  {
    id: "lemon-quartz-ring",
    title: "Lemon Quartz Statement Ring",
    shortDescription: "Elegant cushion-cut lemon quartz set in 18k yellow gold with diamond accents.",
    fullDescription:
      "This striking statement ring features a large cushion-cut lemon quartz center stone suspended in an architectural 18k yellow gold setting. The open geometric band is accented with pavé-set diamonds along the shoulders, creating a balance between bold color and refined sparkle. Available in custom sizing and alternate stone colors.",
    mainImage:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f8a4c07bf3b661d68392f2_virtualjewelery.jpeg",
    thumbnails: [
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f8a4c07bf3b661d68392f2_virtualjewelery.jpeg",
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f8a591b4ec9046934bf1cb_virtualjewelery2.jpeg",
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f8a5993eba724619d57ecb_virtualjewelery3.jpeg",
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f8a59ebf19183c463239f6_virtualjewelery4.jpeg",
    ],
    inquireLink: "/contact",
    startProjectLink: "https://virtualgoldsmith.bloom.io/get-started-11",
    matchingItems: [
      {
        id: "cad-ring-design",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
        title: "CAD Ring Design",
      },
      {
        id: "gold-band-ring",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
        title: "Gold Band Ring",
      },
      {
        id: "jewelry-services",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg",
        title: "Jewelry Services",
      },
    ],
  },
  {
    id: "cad-ring-collection",
    title: "CAD Ring Collection",
    shortDescription: "Precision-modeled ring designs rendered for virtual catalog presentation.",
    fullDescription:
      "A complete virtual inventory render of our signature ring collection. Each piece is modeled to exact specifications using advanced CAD software and rendered with photorealistic materials — capturing every facet, metal grain, and gemstone depth. Ideal for e-commerce listings, lookbooks, and wholesale catalogs.",
    mainImage:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    thumbnails: [
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
    ],
    inquireLink: "/contact",
    startProjectLink: "https://virtualgoldsmith.bloom.io/get-started-11",
    matchingItems: [
      {
        id: "lemon-quartz-ring",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f8a4c07bf3b661d68392f2_virtualjewelery.jpeg",
        title: "Lemon Quartz Ring",
      },
      {
        id: "gold-band-ring",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
        title: "Gold Band Ring",
      },
      {
        id: "jewelry-services",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg",
        title: "Jewelry Services",
      },
    ],
  },
  {
    id: "gold-band-ring",
    title: "Gold Band Ring",
    shortDescription: "Classic gold band rendered in multiple finishes for a complete virtual catalog.",
    fullDescription:
      "This timeless gold band design is rendered across multiple metal finishes — yellow gold, white gold, and rose gold — allowing retailers to showcase the full range without physical samples. The 3D model captures micro-texture details including brushed, polished, and hammered surfaces for a truly authentic digital presentation.",
    mainImage:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
    thumbnails: [
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    ],
    inquireLink: "/contact",
    startProjectLink: "https://virtualgoldsmith.bloom.io/get-started-11",
    matchingItems: [
      {
        id: "lemon-quartz-ring",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f8a4c07bf3b661d68392f2_virtualjewelery.jpeg",
        title: "Lemon Quartz Ring",
      },
      {
        id: "cad-ring-collection",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
        title: "CAD Ring Collection",
      },
      {
        id: "jewelry-services",
        image:
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg",
        title: "Jewelry Services",
      },
    ],
  },
];
