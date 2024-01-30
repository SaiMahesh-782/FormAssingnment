const AddForm = ({ onValChange, formObject, onFormSubmit }) => {
  return (
    <>
      <div className="shadow-md w-1/3  my-20 mx-32">
        <form>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <label for="name" className="mx-3  text-lg">
                name
              </label>
              <input
                type="text"
                name="name"
                onChange={onValChange}
                value={formObject.name}
                className="border w-64 p-2 m-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <label for="Email" className="mx-6 text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formObject.email}
                onChange={onValChange}
                className="border  w-64 p-2 m-3"
              ></input>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <label for="Phone" className="mx-6 text-lg">
                Phone
              </label>
              <input
                type="number"
                name="Phone"
                value={formObject.Phone}
                onChange={onValChange}
                className="border w-64 p-2 m-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <label for="age" className="mx-6 text-lg">
                age
              </label>
              <input
                type="number"
                name="age"
                value={formObject.age}
                onChange={onValChange}
                className="border w-64 p-2 m-3"
              ></input>
            </div>
          </div>
          <button
            type="Submit"
            onClick={onFormSubmit}
            className="m-4 bg-green-500 w-24 rounded-lg text-white"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddForm;
