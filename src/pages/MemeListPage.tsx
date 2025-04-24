import MemesList from "../components/MemesList";
import defaultMemes from "../data/defaultMemes";

export default function MemeListPage() {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold  mb-4">Memes List</h1>
      <MemesList memes={defaultMemes} />
    </div>
  );
}
