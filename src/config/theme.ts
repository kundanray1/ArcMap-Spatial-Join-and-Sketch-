import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    paragraph: "#7C7D8F",
    heading: "#406F96",
    primary: {
      50: "#f2f8ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    green: {
      400: "#348511",
      500: "#348511",
    },
    red: {
      400: "#f56565",
      500: "#f23535",
    },
    cyan: {
      400: "#2dd7f8",
      500: "#08c5ea",
    },
    teal: {
      400: "#4cbab4",
      500: "#38b2ac",
    },
    orang: {
      400: "#ffa94d",
      500: "#ffa647",
    },
    purple: {
      400: "#a78bfa",
      500: "#8b5cf6",
    },

    pink: {
      400: "#f472b6",
      500: "#ec4899",
    },
    blue: {
      10: "#ecf3ff",
    },
    malibu: {
      400: "#7f90ff",
      500: "#7083ff",
    },
    purple2: {
      400: "#aa81de",
      500: "#a073da",
    },
    brown: {
      400: "#918f77",
      500: "#858268",
    },
    darkbrown: {
      400: "#a99e66",
      500: "#9f9355",
    },
    green2: {
      400: "#7daa47",
      500: "#6fa032",
    },
    blue2: {
      400: "#1caac8",
      500: "#03a0c2",
    },
    blue3: {
      400: "#519ac3",
      500: "#3e8fbc",
    },
    pink2: {
      400: "#bf4687",
      500: "#b8317a",
    },
    burlywood: {
      400: "#d7ae73",
      500: "#d7ac70",
    },
    purple3: {
      400: "#b794f4",
      500: "#805ad5",
    },
  },
  styles: {
    global: {
      "html,body": {
        bg: "gray.50",
        fontSize: "15px",
      },
    },
  },
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },

  shadows: {
    box: "0px 0px 60px rgba(0, 0, 0, 0.06)",
    input: "0px 1px 0px #EFF0F6",
  },
  components: {
    Popover: {
      baseStyle: {
        popper: {
          width: "fit-content",
          maxWidth: "fit-content",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "sm",
        fontWeight: "normal",
      },
    },

    Checkbox: {
      defaultProps: {
        colorScheme: "primary",
      },
    },
    Text: {
      baseStyle: {
        color: "#FFFFFF",
      },
    },
    Input: {
      sizes: {
        md: {
          field: {
            borderRadius: "sm",
            shadow: "input",
          },
        },
      },

      variants: {
        outline: {
          addon: {
            bg: "#f8f8f8",
            borderRadius: "sm",
            fontSize: "sm",
          },
        },
      },

      defaultProps: {
        _placeholder: {
          color: "red",
        },
      },
    },
    Textarea: {
      sizes: {
        md: {
          borderRadius: "sm",
          shadow: "input",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "heading",
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "sm",
        fontWeight: "semibold",
        mb: "3",
      },
    },

    Select: {
      sizes: {
        md: {
          field: {
            borderRadius: "sm",
            shadow: "input",
          },
        },
      },
    },
    Table: {
      baseStyle: {
        tr: {
          "&:last-of-type": {
            td: {
              borderBottom: "none",
            },
          },
        },
      },
    },
  },
});

export default theme;
