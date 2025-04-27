import MemesList from "../components/MemesList";
import { Meme } from "../types/memeTypes";

interface MemeListPageProps {
  memes: Meme[];
}

export default function MemeListPage({ memes }: MemeListPageProps) {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Memes List</h1>
      <MemesList memes={memes} />
    </div>
  );
}
