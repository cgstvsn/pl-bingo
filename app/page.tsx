import BingoCard from "@/components/bingo/BingoCard";
export default async function Index() {
  return (
    <div className="mt-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-300">PL Lounge Bingo</h1>
        <p className="text-gray-400">Refresh to get a new card.</p>
      </div>

      <BingoCard />
    </div>
  );
}
