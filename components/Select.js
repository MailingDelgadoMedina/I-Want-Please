import { useState } from "react";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";

//custom component for the dropdown.
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export const colourOptions = [
  { value: "ocean1", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

const Select = ({
  name = "noOption",
  values = "",
  advancedSearchQuery,
  setAdvancedSearchQuery,
}) => {
  const [optionSelected, setOptionSelected] = useState(null);

  const handleChange = (selected) => {
    setOptionSelected(selected);
    setAdvancedSearchQuery({
      ...advancedSearchQuery,
      [name[0]]: selected.map((option) => option.value.replace(/\s+/g, "%20")),
    });
    console.log({ selected });
    console.log(name[0]);
  };
  return (
    <div className="m-2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize"
      >
        {name}
      </label>
      <ReactSelect
        className="dark:text-white dark:bg-gray-600 bg-red-500"
        id={name}
        options={values}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option,
        }}
        onChange={handleChange}
        allowSelectAll={true}
        value={optionSelected}
      />
    </div>
  );
};

export default Select;
