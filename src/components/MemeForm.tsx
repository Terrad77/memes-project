// components/EditMemeForm.jsx
import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { Meme } from "../types/memeTypes";

interface Props {
  meme: Meme; // Объект мема для редактирования
  onSave: (meme: Meme) => void; // Функция сохранения
  onClose: () => void; // Функция закрытия
}

// Define the Meme type
export default function MemeForm({ meme, onSave, onClose }: Props) {
  const [title, setTitle] = useState(meme.title);
  const [likes, setLikes] = useState(String(meme.likes));
  const [image, setImage] = useState(meme.image);
  const [error, setError] = useState("");

  // Handle for submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Validate the form data
    if (!title.trim() || !image.trim()) {
      setError("Fill in all fields");
      return;
    }

    const likesNum = parseInt(likes);
    if (isNaN(likesNum) || likesNum < 0 || likesNum > 99) {
      setError("Invalid likes value");
      return;
    }
    // function fore save updated mem
    onSave({ ...meme, title, likes: likesNum, image });
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {error && (
        <div className="text-red-600 text-sm" role="alert">
          {error}
        </div>
      )}
      <Input label="ID" value={meme.id.toString()} isReadOnly name="id" />
      <Input
        label="Title"
        labelPlacement="outside"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        isRequired
        minLength={3}
        maxLength={100}
        placeholder="Enter title"
        description
      />
      <Input
        label="Image"
        labelPlacement="outside"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        isRequired
        pattern="^https://.*\.(jpg|jpeg)$"
        description="Image URL must start with https:// and end with .jpg or .jpeg"
        placeholder="Enter URL to IMG"
      />
      <Input
        label="Likes"
        labelPlacement="outside"
        name="likes"
        type="number"
        value={likes}
        onChange={(e) => setLikes(e.target.value)}
        isRequired
        min={0}
        max={99}
        placeholder="Enter number of likes"
        description="Likes must be a number between 0 and 99"
      />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onPress={onClose}>
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Save
        </Button>
      </div>
    </Form>
  );
}
