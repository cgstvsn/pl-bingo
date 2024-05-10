import { getTiles } from "@/utils/helpers/bingo";
import BingoTile from "./BingoTile";
export default function BingoCard() {
  const tiles = getTiles();
  // add a free tile in the center
  const freeTile = "Free Tile";
  tiles.splice(12, 0, freeTile);

  const tileElements = tiles.map((tile, index) => {
    return <BingoTile key={index} tile={tile} />;
  });

  return (
    <div className="max-w-5xl bg-white border-8 border-gray-200 rounded-xl">
      <div className="grid grid-cols-5 grid-rows-5 gap-4 p-4">
        {tileElements}
      </div>
    </div>
  );
}
