import { Card, CardHeader, CardBody, Image } from "@heroui/react";

/// Define the Meme interface to type the props
interface Meme {
  id: number;
  title: string;
  image: string;
  likes: number;
}

export default function MemeCard({ meme }: { meme: Meme }) {
  const { id, title, image, likes } = meme; // Destructure the 'meme' object

  return (
    <Card key={id} className="max-w-[400px] " shadow="sm">
      <CardHeader className="flex justify-between items-center px-4 pt-4">
        <h4 className="font-bold text-large">{title}</h4>
        <div className="flex items-center gap-4">
          <p className="text-default-500">👍 {likes}</p>
          <a
            href={image}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-500 transition-colors"
          >
            View image
          </a>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible px-4 py-2">
        <Image
          isZoomed
          radius="lg"
          shadow="sm"
          loading="lazy"
          width={400}
          height={300}
          fallbackSrc="https://img.heroui.chat/image/places?w=400&h=300&u=placeholder"
          src={image}
          alt={title}
          className="object-cover w-full h-[300px]"
        />
      </CardBody>
    </Card>
  );
}
