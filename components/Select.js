// 0. hidden: true, don't show
// 1. combine: "csv" true? ==> multiple selections
// 2. if values.length>0, we got the list for the select Options
// 3. if values.length===0 if default "true" || "false" ==> boolean

const Select = ({ name = "noOption" }) => {
  return (
    <div className="m-2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize"
      >
        {name}
      </label>
      <select
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize"
        defaultValue="noOption"
      >
        <option value="noOption" className="">
          Choose value...
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

export default Select;
