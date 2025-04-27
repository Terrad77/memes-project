import MemsCard from "./MemsCard";
import { Meme } from "../types/memeTypes";
// import { motion } from "framer-motion"; // Importing motion for animations

interface MemeListProps {
  memes: Meme[];
}

export default function MemesList({ memes }: MemeListProps) {
  if (!memes?.length) {
    return <div className="text-center text-gray-500">No memes available</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {memes.map((meme) => (
        <div
          key={meme.id}
          className="
          flex justify-center
          basis-full
          sm:basis-[calc(50%-1rem)]
          lg:basis-[calc(25%-1rem)]
          max-w-full
          sm:max-w-[calc(50%-1rem)]
          lg:max-w-[calc(25%-1rem)]
          mb-6 sm:mb-0
          "
        >
          <MemsCard meme={meme} />
        </div>
      ))}
    </div>

    // ------------  Approach 2 "usage CSS Grid" ------------------ //
    // <motion.div
    //   className="grid grid-cols-auto-fill-min gap-4 p-4"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ staggerChildren: 0.1 }}
    // >
    //   {memes.map((meme) => (
    //     <motion.div
    //       key={meme.id}
    //       initial={{ y: 20, opacity: 0 }}
    //       animate={{ y: 0, opacity: 1 }}
    //       transition={{ type: "spring", stiffness: 100 }}
    //     >
    //       <MemsCard meme={meme} />
    //     </motion.div>
    //   ))}
    // </motion.div>
  );
}
