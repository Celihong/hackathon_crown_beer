export type Beer = {
  id: string;
  name: string;
  style: string;
  brewery: string;
  image?: string;
};

export const BEERS: Beer[] = [
  { id: "1", name: "Beer 1", style: "Hazy IPA", brewery: "Sak Pub" },
  { id: "2", name: "Beer 2", style: "Hazy IPA", brewery: "Project Brews" },
  { id: "3", name: "Beer 3", style: "Speciality IPA", brewery: "Black Bamboo" },
  {
    id: "4",
    name: "Beer 4",
    style: "Weizenbock",
    brewery: "Botanico Brewing Company",
  },
  {
    id: "5",
    name: "Beer 5",
    style: "New England IPA",
    brewery: "Riel Brewing and Distilling",
  },
  { id: "6", name: "Beer 6", style: "American IPA", brewery: "Fuzzy Logic" },
  { id: "7", name: "Beer 7", style: "Blonde Ale", brewery: "Chug Lab" },
  {
    id: "8",
    name: "Beer 8",
    style: "American Pale Ale",
    brewery: "Brew Khnear",
  },
  { id: "9", name: "Beer 9", style: "Brut IPA", brewery: "Funghi Art" },
  {
    id: "10",
    name: "Beer 10",
    style: "American Stout",
    brewery: "Jaya-Vara Meadery",
  },
  {
    id: "11",
    name: "Beer 11",
    style: "Specialty IPA",
    brewery: "Krama Craft Brewery",
  },
];
