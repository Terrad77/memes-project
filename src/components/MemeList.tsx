import MemeCard from "../components/MemCard";
import { Meme } from "../types/memeTypes";

interface MemeListProps {
  memes: Meme[];
}

export default function MemeList({ memes }: MemeListProps) {
  if (!memes || memes.length === 0) {
    return <div className="text-center text-gray-500">No memes available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
}
