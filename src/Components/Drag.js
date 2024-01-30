// DraggableRow.js
import React from "react";
import { useDrag } from "react-dnd";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const DraggableRow = ({ data, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "ROW",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        padding: "8px",
        border: "1px solid #ccc",
        margin: "4px",
      }}
    >
      <div className="flex flex-row justify-end">
        <p>
          <MdEdit />
        </p>
        <p>
          <MdDelete />
        </p>
      </div>
      <p className="font-bold">name: {data.name}</p>
      <p>email: {data.email}</p>
      <p>Phone: {data.Phone}</p>
      <p>Age: {data.age}</p>
    </div>
  );
};

export default DraggableRow;
