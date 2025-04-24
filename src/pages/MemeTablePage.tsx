import MemesTable from "../components/MemesTable";
import defaultMemes from "../data/defaultMemes";

export default function MemeTablePage() {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Memes Table</h1>
      <MemesTable memes={defaultMemes} onEdit={() => {}} />
    </div>
  );
}
