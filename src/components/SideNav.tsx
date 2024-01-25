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
        classes='p-2'
      >
        <MenuIcon
          sx={{ marginLeft: "1rem", color: "black" }}
        />
      </IconButton>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
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
          <ListItem>
            <ThemeToggle />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideNav;
