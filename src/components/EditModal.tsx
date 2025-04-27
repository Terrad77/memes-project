import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { Meme } from "../types/memeTypes";
import MemeForm from "./MemeForm";

interface EditModalProps {
  meme: Meme | null;
  onClose: () => void;
  onSave: (updatedMeme: Meme) => void;
}

export default function EditModal({ meme, onClose, onSave }: EditModalProps) {
  if (!meme) return null;

  const handleSubmit = (data: Omit<Meme, "id">) => {
    onSave({ id: meme.id, ...data });
    onClose();
  };

  return (
    <Modal isOpen onClose={onClose} size="lg">
      <ModalContent>
        <ModalHeader>Edit meme</ModalHeader>
        <ModalBody>
          <MemeForm meme={meme} onSave={handleSubmit} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
