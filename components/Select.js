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

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#374151",
    fontSize: "0.875rem",
    borderRadius: 6,
    border: "1px solid #4b5563",
    borderColor: "#4b5563",
    boxShadow: "none",

    "&:hover": {
      borderColor: "#4b5563",
      border: "1px solid #4b5563",
    },
  }),

  menuList: (base) => ({
    ...base,
    padding: 2,
    background: "#374151",
  }),

  // multiValue: (base) => ({
  //   ...base,
  //   color: "white",
  //   background: "#374151",
  // }),
  // multiValueLabel: (base) => ({
  //   ...base,
  //   color: "white",
  //   fontSize: "0.875rem",
  // }),
  // multiValueRemove: (base) => ({
  //   ...base,
  //   color: "red",
  //   background: "#374151",
  //   "&:hover": {
  //     background: "pink",
  //   },
  // }),
  option: (base) => ({
    ...base,
    background: "#374151",
    color: "white",
    fontSize: "0.875rem",
    borderRadius: 6,
    border: "1px solid #4b5563",
    overflow: "hidden",
    "&:hover": {
      borderColor: "#3b82f6",
    },
    "&:.dark": {
      borderColor: "#76f63b",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "white",
    fontSize: "0.875rem",
  }),
  // singleValue: (base) => ({
  //   ...base,
  //   color: "yellow",
  //   fontSize: "0.875rem",
  // }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  groupHeading: (base) => ({
    ...base,
    color: "white",
    fontSize: "0.875rem",
  }),
  input: (base) => ({
    ...base,
    color: "red",
    border: "none",
    fontSize: "0.875rem",
  }),
};

const customStylesWhite = {
  control: (base, state) => ({
    ...base,
    background: "white",
    fontSize: "0.875rem",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    boxShadow: "none",
  }),

  menuList: (base) => ({
    ...base,
    padding: 2,
    background: "white",
  }),

  // multiValue: (base) => ({
  //   ...base,
  //   color: "white",
  //   background: "#374151",
  // }),
  // multiValueLabel: (base) => ({
  //   ...base,
  //   color: "white",
  //   fontSize: "0.875rem",
  // }),
  // multiValueRemove: (base) => ({
  //   ...base,
  //   color: "red",
  //   background: "#374151",
  //   "&:hover": {
  //     background: "pink",
  //   },
  // }),
  option: (base) => ({
    ...base,
    background: "white",
    color: "black",
    fontSize: "0.875rem",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    overflow: "hidden",
    "&:hover": {
      borderColor: "#3b82f6",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "black",
    fontSize: "0.875rem",
  }),
  // singleValue: (base) => ({
  //   ...base,
  //   color: "yellow",
  //   fontSize: "0.875rem",
  // }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  groupHeading: (base) => ({
    ...base,
    color: "white",
    fontSize: "0.875rem",
  }),
  input: (base) => ({
    ...base,
    color: "green",
    fontSize: "0.875rem",
  }),
};

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
    <div className="m-2 ">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize"
      >
        {name}
      </label>
      <ReactSelect
        popout={true}
        controlShouldRenderValue={false}
        isClearable={true}
        backspaceRemovesValue={false}
        styles={customStylesWhite}
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
        placeholder={
          optionSelected
            ? optionSelected.length > 0
              ? `${optionSelected.length} selected`
              : "Select..."
            : "Select..."
        }
      />
    </div>
  );
};

export default Select;
