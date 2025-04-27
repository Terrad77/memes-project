import MemesTable from "../components/MemesTable";
import { Meme } from "../types/memeTypes";

interface MemeTablePageProps {
  memes: Meme[];
  onSave: (updatedMeme: Meme) => void;
}

export default function MemeTablePage({ memes, onSave }: MemeTablePageProps) {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Memes Table</h1>
      <MemesTable memes={memes} onSave={onSave} />
    </div>
  );
}
