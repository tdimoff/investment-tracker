import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";

const SideNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className="p-2"
      >
        <span className="p-4 dark:bg-slate-800">
          <MenuIcon />
        </span>
      </IconButton>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem className="w-[15rem]">
            <AttachMoneyIcon className="mr-2" />
            <Link href="/investments">
              <ListItemText primary="Investments" />
            </Link>
          </ListItem>
          <ListItem className="w=[15rem]">
            <SettingsIcon className="mr-2" />
            <Link href="/settings">
              <ListItemText primary="Settings" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ThemeToggle />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideNav;
