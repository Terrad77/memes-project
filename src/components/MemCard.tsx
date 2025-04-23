import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Meme } from "../types/memeTypes";

interface MemeCardProps {
  meme: Meme;
}

export default function MemeCard({ meme }: MemeCardProps) {
  const { title, image, likes } = meme;

  return (
    <Card className="max-w-sm w-full mx-auto">
      <CardHeader className="flex flex-col items-start gap-2 px-4 pt-4">
        <h4 className="font-bold text-large">{title}</h4>
        <p className="text-default-500">👍 Likes {likes}</p>
      </CardHeader>
      <CardBody className="overflow-visible px-4 py-2">
        <Image
          isZoomed
          radius="lg"
          shadow="sm"
          loading="lazy"
          width="100%"
          height={192}
          fallbackSrc="https://img.heroui.chat/image/places?w=400&h=300&u=placeholder"
          src={image}
          alt={title}
          className="object-cover w-full h-48"
        />
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-500 hover:underline"
        >
          View image
        </a>
      </CardBody>
    </Card>
  );
}
