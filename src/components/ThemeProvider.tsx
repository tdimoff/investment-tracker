import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { lightTheme, darkTheme } from "@/styles/theme";

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <MUIThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
