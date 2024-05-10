"use client";

import { useState } from "react";

export default function BingoTile({ tile }: { tile: string }) {
  const [checked, setChecked] = useState(false);

  if (tile === "Free Tile") {
    return (
      <div className="flex items-center justify-center p-4 rounded-lg bg-emerald-500">
        {tile}
      </div>
    );
  }
  return (
    <button
      onClick={() => setChecked(!checked)}
      className={`flex items-center justify-center p-2 aspect-square rounded-lg  transition text-sm ${
        checked ? "bg-emerald-500" : "bg-gray-600 hover:brightness-125"
      }`}
    >
      {tile}
    </button>
  );
}
