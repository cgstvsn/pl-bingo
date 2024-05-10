"use client";

import { useState } from "react";

export default function BingoTile({ tile }: { tile: string }) {
  const [checked, setChecked] = useState(false);

  if (tile === "Free Tile") {
    return (
      <button className="flex items-center justify-center p-4 rounded-lg bg-emerald-500">
        {tile}
      </button>
    );
  }
  return (
    <button
      onClick={() => setChecked(!checked)}
      className={`flex items-center justify-center p-4  rounded-lg ${
        checked ? "bg-emerald-500" : "bg-gray-400"
      }`}
    >
      {tile}
    </button>
  );
}
