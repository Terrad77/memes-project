import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { Meme } from "../types/memeTypes";

interface MemeCardProps {
  meme: Meme;
}

export default function MemsCard({ meme }: MemeCardProps) {
  const { title, image, likes } = meme;

  return (
    <Card className="h-[300px] w-full">
      <CardHeader className="absolute z-10  flex-col !items-start">
        <div className="bg-black/50 p-2 rounded-lg backdrop-blur-sm">
          <h4 className="text-white font-bold text-large [text-shadow:_0_1px_3px_rgb(0_0_0_/_80%)]">
            {title}
          </h4>
          <p className="text-amber-200 font-medium text-small">
            👍 {likes} likes
          </p>
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-cover"
        src={image}
        fallbackSrc="https://img.heroui.chat/image/places?w=400&h=300&u=placeholder"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <Button
          as="a"
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          radius="full"
          className="text-tiny"
        >
          View Image
        </Button>
      </CardFooter>
    </Card>
  );
}
