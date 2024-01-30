import React from "react";
import { useDrag } from "react-dnd";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const DraggableRow = ({ data }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "ROW",
    item: { data },
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
      <div className="flex flex-row  justify-end">
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

function Table({ tableData }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const handleDrop = (item, targetColumn) => {
    // Perform logic to update the tableData based on the drop
    console.log(`Dropped item in column ${targetColumn}`, item);
    setDraggedItem(null);
  };
  // Separate data into age groups
  const ageGroups = {
    "1-18": [],
    "19-25": [],
    "26-45": [],
    "45+": [],
  };

  // Categorize data into age groups
  tableData.forEach((data) => {
    const { age } = data;
    if (age >= 1 && age <= 18) {
      ageGroups["1-18"].push(data);
    } else if (age >= 19 && age <= 25) {
      ageGroups["19-25"].push(data);
    } else if (age >= 26 && age <= 45) {
      ageGroups["26-45"].push(data);
    } else {
      ageGroups["45+"].push(data);
    }
  });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">1-18</th>
            <th className="py-2 px-4 border">19-25</th>
            <th className="py-2 px-4 border">26-45</th>
            <th className="py-2 px-4 border">45+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border border-green-700">
              {ageGroups["1-18"].map((data, index) => (
                <DraggableRow key={index} data={data} />
              ))}
            </td>
            <td className="py-2 px-4 border border-green-700">
              {ageGroups["19-25"].map((data, index) => (
                <DraggableRow key={index} data={data} />
              ))}
            </td>
            <td className="py-2 px-4 border border-green-700">
              {ageGroups["26-45"].map((data, index) => (
                <DraggableRow key={index} data={data} />
              ))}
            </td>
            <td className="py-2 px-4 border border-green-700">
              {ageGroups["45+"].map((data, index) => (
                <DraggableRow key={index} data={data} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
