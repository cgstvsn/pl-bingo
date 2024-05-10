import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import BingoCard from "@/components/bingo/BingoCard";

export const dynamic = "force-dynamic";

export default async function Index() {
  return (
    <div className="mt-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-300">PL Lounge Bingo</h1>
        <p className="text-gray-400">Refresh to get a new card.</p>
        <Link
          href="https://github.com/cgstvsn/pl-bingo"
          target="_blank"
          className="flex items-center gap-2 mt-4 text-gray-400 hover:underline"
        >
          <FaGithub /> Contribute
        </Link>
      </div>

      <BingoCard />
    </div>
  );
}
