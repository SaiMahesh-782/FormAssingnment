import React, { useState, Fragment } from "react";
import AddForm from "./AddForm";
import Table from "./Table";


const Card = () => {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const onValChange = (event) => {
    setFormObject({
      ...formObject,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = {
        name: "",
        email: "",
        phone: "",
        age: "",
      };
      setFormObject(isEmpty);
      setSelectedRowIndex(null); // Clear selected row index after submission
    }
  };

  

  return (
    <>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Data Management</h2>

        {/* Edit and Delete buttons */}

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Add Data</h3>
            <AddForm
              onValChange={onValChange}
              formObject={formObject}
              onFormSubmit={onFormSubmit}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Table View</h3>

        <div>
          <Table className="shadow-sm bg-gray-400" tableData={tableData} />
        </div>
      </div>
    </>
  );
};

export default Card;
