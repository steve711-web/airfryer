export interface AirFryerPick {
  id: string;
  rank: number;
  name: string;
  capacity: string;
  bestFor: string;
  note: string;
  amazonSearch: string;
}

export const topAirFryers: AirFryerPick[] = [
  {
    id: "cosori-turboblaze",
    rank: 1,
    name: "Cosori TurboBlaze",
    capacity: "6 qt",
    bestFor: "Best overall",
    note: "Consistently ranks at the top of independent lab tests for crisping performance, with a dehydrate setting most single-basket models skip.",
    amazonSearch: "https://www.amazon.com/s?k=Cosori+TurboBlaze+air+fryer",
  },
  {
    id: "ninja-af",
    rank: 2,
    name: "Ninja Air Fryer (4-qt)",
    capacity: "4 qt",
    bestFor: "Best for 1-2 people",
    note: "Compact single-basket model with strong temperature accuracy — a good fit for a couple or small kitchen without sacrificing crisp results.",
    amazonSearch: "https://www.amazon.com/s?k=Ninja+Air+Fryer+4+quart",
  },
  {
    id: "ninja-foodi-8qt",
    rank: 3,
    name: "Ninja Foodi 8-Quart 2-Basket",
    capacity: "8 qt (2 baskets)",
    bestFor: "Best for families",
    note: "Two independent baskets let you cook two foods at two different temperatures at once and finish together — the biggest advantage for a household cooking full meals.",
    amazonSearch: "https://www.amazon.com/s?k=Ninja+Foodi+8+Quart+2+Basket+air+fryer",
  },
  {
    id: "instant-vortex-plus",
    rank: 4,
    name: "Instant Pot Vortex Plus",
    capacity: "6 qt",
    bestFor: "Most versatile",
    note: "Adds roast, bake, broil, and dehydrate modes on top of air frying, from the brand best known for kitchen reliability.",
    amazonSearch: "https://www.amazon.com/s?k=Instant+Pot+Vortex+Plus+air+fryer",
  },
  {
    id: "chefman-compact",
    rank: 5,
    name: "Chefman Compact (2-qt)",
    capacity: "2 qt",
    bestFor: "Best budget pick",
    note: "The cheapest way to try air frying without committing counter space — a solid choice for one person or a dorm-style kitchen.",
    amazonSearch: "https://www.amazon.com/s?k=Chefman+2+quart+air+fryer",
  },
];
