import MemeTable from "../components/MemeTable";
import defaultMemes from "../data/defaultMemes";

export default function MemeTablePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Memes Table</h1>
      <MemeTable memes={defaultMemes} onEdit={() => {}} />
    </div>
  );
}
