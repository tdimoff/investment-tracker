import SideNav from "./SideNav";

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <div className="flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
