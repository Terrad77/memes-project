import { Form } from "@heroui/form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from "@heroui/react";
import { useState } from "react";

export default function EditModal({ meme, isOpen, onClose, onSave }) {
  const [title, setTitle] = useState(meme.title);
  const [likes, setLikes] = useState(meme.likes);
  const [image, setImage] = useState(meme.image);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return url.endsWith(".jpg");
    } catch {
      return false;
    }
  };

  const handleSave = () => {
    if (!title || title.length < 3 || title.length > 100) return;
    if (!isValidUrl(image)) return;
    if (!Number.isInteger(Number(likes)) || likes < 0 || likes > 99) return;

    onSave({ ...meme, title, likes: Number(likes), image });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalContent>
        <ModalHeader>Редагувати мем</ModalHeader>
        <ModalBody className="flex flex-col gap-3">
          <Input label="ID" value={meme.id} isReadOnly />
          <Input
            label="Назва"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
          />
          <Input
            label="Зображення (JPG URL)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            isRequired
          />
          <Input
            label="Лайки"
            type="number"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            isRequired
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="flat" onPress={onClose} color="default">
            Скасувати
          </Button>
          <Button onPress={handleSave} color="primary">
            Зберегти
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
