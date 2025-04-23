import { useState } from "react";
import { Form, Input, Button, Modal } from "@heroui/react";

export default function EditMemeFormModal({ meme, onSave, onClose, isOpen }) {
  const [title, setTitle] = useState(meme.title);
  const [likes, setLikes] = useState(meme.likes);
  const [image, setImage] = useState(meme.image);

  const [errors, setErrors] = useState({});

  const isValidUrl = (url: URL) => {
    try {
      // Check if the URL is valid and has a valid protocol
      const parsed = new URL(url.href);
      // Check if the protocol is HTTP or HTTPS and if the URL ends with .jpg or .jpeg
      return (
        parsed.protocol.startsWith("http") && url.href.endsWith(".jpg || .jpeg")
      );
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: "instanceof Error") => {
    e.preventDefault();
    const newErrors = {};

    if (!title || title.length < 3 || title.length > 100) {
      newErrors.title = "Name must have from 3 to 100 symbols";
    }

    if (!isValidUrl(image)) {
      newErrors.image = "Input valid URL link to JPG image";
    }

    const numericLikes = Number(likes);
    if (
      !Number.isInteger(numericLikes) ||
      numericLikes < 0 ||
      numericLikes > 99
    ) {
      newErrors.likes = "Likes must be an integer from 0 to 99";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({ ...meme, title, likes: numericLikes, image });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Редагування мема">
      <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input label="ID" value={meme.id} isReadOnly name="id" />
        <Input
          label="Назва"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
          validationBehavior="aria"
          minLength={3}
          maxLength={100}
          isInvalid={!!errors.title}
          errorMessage={errors.title}
        />
        <Input
          label="Зображення (JPG URL)"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          isRequired
          validationBehavior="aria"
          isInvalid={!!errors.image}
          errorMessage={errors.image}
        />
        <Input
          label="Лайки"
          name="likes"
          type="number"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
          isRequired
          validationBehavior="aria"
          min={0}
          max={99}
          isInvalid={!!errors.likes}
          errorMessage={errors.likes}
        />
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            Скасувати
          </Button>
          <Button type="submit" color="primary">
            Зберегти
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
