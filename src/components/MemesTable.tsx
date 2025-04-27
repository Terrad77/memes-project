import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";
import { Meme } from "../types/memeTypes";
import { useState } from "react";
import EditModal from "./EditModal";

interface MemeTableProps {
  memes: Meme[];
  onSave: (updatedMeme: Meme) => void;
}

export default function MemesTable({ memes, onSave }: MemeTableProps) {
  const [editingMeme, setEditingMeme] = useState<Meme | null>(null);

  const handleEditClick = (meme: Meme) => {
    setEditingMeme(meme);
  };

  const handleModalClose = () => {
    setEditingMeme(null);
  };

  if (memes.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">No memes available</div>
    );
  }

  return (
    <>
      <Table aria-label="Memes table" className="w-full">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>IMAGE URL</TableColumn>
          <TableColumn>LIKES</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.title}</TableCell>
              <TableCell>{meme.image}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  onPress={() => handleEditClick(meme)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditModal
        meme={editingMeme}
        onClose={handleModalClose}
        onSave={onSave}
      />
    </>
  );
}
