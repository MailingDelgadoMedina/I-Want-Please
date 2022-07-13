// 0. hidden: true, don't show
// 1. combine: "csv" true? ==> multiple selections
// 2. if values.length>0, we got the list for the select Options
// 3. if values.length===0 if default "true" || "false" ==> boolean

const Select = ({
  name = "noOption",
  values = "",
  advancedSearchQuery,
  setAdvancedSearchQuery,
}) => {
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
        defaultValue=""
        onChange={(e) => {
          setAdvancedSearchQuery({
            ...advancedSearchQuery,
            [name[0]]: e.target.value.replace(/\s+/g, "%20"),
          });
          // console.log(e.target.value);
          // console.log(name[0]);
        }}
      >
        <option value="" className="">
          Choose value...
        </option>
        {values.map((value, idx) => {
          if (typeof value === "string") {
            return (
              <option key={idx} value={value} className="capitalize">
                {value}
              </option>
            );
          } else {
            return (
              <option key={idx} value={value[0]} className="">
                {value[0]}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};

export default Select;
