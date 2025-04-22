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

interface MemeTableProps {
  memes: Meme[];
  onEdit: (meme: Meme) => void;
}

export default function MemeTable({ memes, onEdit }: MemeTableProps) {
  if (!memes || memes.length === 0) {
    return <div className="text-center text-gray-500">No memes available</div>;
  }

  return (
    <Table aria-label="Memes table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>LIKES</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {memes.map((meme) => (
          <TableRow key={meme.id}>
            <TableCell>{meme.id}</TableCell>
            <TableCell>{meme.title}</TableCell>
            <TableCell>{meme.likes}</TableCell>
            <TableCell>
              <Button
                size="sm"
                color="primary"
                variant="flat"
                onPress={() => onEdit(meme)}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
