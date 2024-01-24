import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/src/store";
import { toggleTheme } from "../store/themeSlice";

const SideNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        <div>
          <List>
            <ListItem>
              <Link href="/investments">
                <ListItemText primary="Investments" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/settings">
                <ListItemText primary="Settings" />
              </Link>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem onClick={handleThemeToggle}>
              <ListItemIcon>
                {themeMode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
              </ListItemIcon>
              <ListItemText primary="Toggle Theme" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default SideNav;
