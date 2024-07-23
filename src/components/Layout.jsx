
const Layout = ({children}) => {
  return <div style={{background: "lightgray"}}>
    {children ? children : <></>}
  </div>;
};

export default Layout;
