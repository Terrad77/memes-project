import MemeList from "../components/MemeList";
import defaultMemes from "../data/defaultMemes";

export default function MemeListPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Memes List</h1>
      <MemeList memes={defaultMemes} />
    </div>
  );
}
