import { Card, CardHeader, CardFooter, Image, Link } from "@heroui/react";
import { Meme } from "../types/memeTypes";

interface MemeCardProps {
  meme: Meme;
}

export default function MemsCard({ meme }: MemeCardProps) {
  const { title, image, likes } = meme;

  //function to handle card press
  const handleCardPress = () => {
    window.open(image, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      isPressable
      onPress={handleCardPress}
      className="aspect-[4/3] h-auto min-h-[150px] w-full rounded-xl overflow-hidden shadow-lg  "
    >
      <CardHeader className="absolute z-10  flex-col !items-start">
        <div className="bg-black/50 p-2 rounded-lg backdrop-blur-opacity text-left">
          <h4 className="text-white font-bold text-large [text-shadow:_0_1px_3px_rgb(0_0_0_/_80%)]">
            {title}
          </h4>
          <p className="text-amber-200 font-medium text-xs">👍 {likes} likes</p>
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-cover"
        src={image}
        fallbackSrc="../../public/No-Image-Placeholder.svg"
      />
      <CardFooter className="absolute bg-black/30 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 text-colors-white backdrop-blur-opacity p-2 w-full">
        <Link
          isExternal
          showAnchorIcon
          href={image}
          className=" text-white hover:text-amber-200 transition-colors"
          color="danger"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Image
        </Link>
      </CardFooter>
    </Card>
  );
}
