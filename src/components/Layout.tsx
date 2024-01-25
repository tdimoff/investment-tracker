import SideNav from "./SideNav";
import { Box, Container } from "@mui/material";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <SideNav />
      <Container>
        <Box display="flex" justifyContent="flex-end" p={2}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
