import Select from "react-select";

function SelectList({ options, onChange, defaultValue, placeholder }) {
  const styles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: "#EDEEEF",
      borderColor: isFocused ? "#00C7B1" : "transparent",
      boxShadow: isFocused ? 0 : 0,
      "&:hover": {
        borderColor: isFocused ? "#00C7B1" : "transparent",
      },
      borderRadius: "1rem",
    }),
    menu: (styles, state) => {
      return { ...styles, borderRadius: "1rem", overflow: "hidden" };
    },

    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        color: isSelected ? "#009585" : "#051c2c",
        background: isSelected ? "#EDEEEF" : "transparent",
        cursor: "pointer",
        "&:hover": {
          ...styles[":hover"],
          backgroundColor: "#EDEEEF",
        },
      };
    },
    // dropdownIndicator: (styles) => ({ ...styles, display: "none" }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  };
  return (
    <div>
      <Select
        placeholder={placeholder}
        options={options}
        styles={styles}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}

export default SelectList;
