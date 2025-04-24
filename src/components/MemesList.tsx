import MemsCard from "./MemsCard";
import { Meme } from "../types/memeTypes";

interface MemeListProps {
  memes: Meme[];
}

export default function MemesList({ memes }: MemeListProps) {
  if (!memes?.length) {
    return <div className="text-center text-gray-500">No memes available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      {memes.map((meme) => (
        <div key={meme.id} className="flex justify-center">
          <MemsCard meme={meme} />
        </div>
      ))}
    </div>
  );
}
