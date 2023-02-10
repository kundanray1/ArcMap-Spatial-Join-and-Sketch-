import { ButtonProps } from "@chakra-ui/react";
import theme from "config/theme";

// Styles for paginated buttons ------------------------------ //

export const baseStyles: ButtonProps = {
  w: 8,
  h: 8,
  fontSize: "sm",
  _disabled: {
    bg: "white",
    pointerEvents: "none",
  },
};

export const normalStyles: ButtonProps = {
  ...baseStyles,
  _hover: {
    bg: "primary.400",
    color: "white",
  },
  bg: "white",
  color: "gray.900",
};

export const activeStyles: ButtonProps = {
  ...baseStyles,
  bg: "primary.400",
  color: "white",
  _hover: {
    bg: "primary.400",
    color: "white",
  },
};

export const separatorStyles: ButtonProps = {
  w: 7,
  pointerEvents: "none",
};

// ---------------------------------------------------------- //

// Styles for react-select ------------------------------ //

export const reactSelectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    height: "0rem",
    minHeight: "36px",
    boxShadow: theme.shadows.input,
    borderRadius: theme.radii.sm,
    borderColor: state.isDisabled
      ? theme.colors.gray[200]
      : state.isFocused
      ? theme.colors.blue
      : "inherit",
    transition: "all 0.35s ease-in-out",
    backgroundColor: theme.colors.white,
    opacity: state.isDisabled ? "0.4" : "1",
    cursor: state.isDisabled ? "not-allowed" : "inherit",

    "&:hover": {
      borderColor: theme.colors.gray[300],
    },
  }),

  placeholder: (provided: any) => ({
    ...provided,
    color: theme.colors.gray[300],
  }),

  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: theme.colors.gray[100],
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: theme.colors.gray[300],
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? theme.colors.primary[300]
      : state.isFocused
      ? theme.colors.primary[100]
      : "transparent",
  }),

  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: theme.colors.blue[50],
    p: 0,
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    padding: "0 10px",
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: theme.radii.sm,
    zIndex: "3",
    fontSize: theme.fontSizes.sm,
  }),
};
// ---------------------------------------------------------- //

export const labelStyles = {
  color: "gray.900",
  fontWeight: "bold",
};

export const infoStyles = {
  color: "gray.600",
  fontWeight: "normal",
};
