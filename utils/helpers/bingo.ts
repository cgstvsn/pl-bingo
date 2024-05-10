import { tiles } from "@/app/tiles";
export const randomTile = () => {
  const randomIndex = Math.floor(Math.random() * tiles.length);
  return tiles[randomIndex];
};

export const getTiles = () => {
  // pick 24 random tiles
  const tiles: string[] = [];
  while (tiles.length < 24) {
    const tile = randomTile();
    if (!tiles.includes(tile)) {
      tiles.push(tile);
    }
  }
  return tiles;
};
