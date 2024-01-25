import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { RootState } from "@/src/store";
import { Box, Switch, Typography } from "@mui/material";

const ThemeToggle = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  console.log("themeMode", themeMode)

  return (
    <Box>
      <Typography variant="body1" gutterBottom>
        {themeMode === "light" ? "Dark Mode" : "Light Mode"}
      </Typography>
      <Switch
        checked={themeMode === "light" ? false : true}
        onChange={handleThemeToggle}
        name="themeToggle"
        color="primary"
      />
    </Box>
  );
};

export default ThemeToggle;
