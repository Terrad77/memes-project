import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { Meme } from "../types/memeTypes";
import MemeForm from "./MemeForm";

interface EditModalProps {
  meme: Meme;
  isOpen: boolean;
  onClose: () => void;
  onSave: (meme: Meme) => void;
}

export default function EditModal({
  meme,
  isOpen,
  onClose,
  onSave,
}: EditModalProps) {
  const handleSubmit = (data: Omit<Meme, "id">) => {
    onSave({ id: meme.id, ...data });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalContent>
        <ModalHeader>Edit meme</ModalHeader>
        <ModalBody>
          <MemeForm
            meme={meme}
            onSave={handleSubmit}
            onClose={onClose}
            isOpen
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
