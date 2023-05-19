import { AppBar } from "../AppBar/AppBar";
import "./Styles_Layout.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="Layout-container">
        <AppBar />
      </div>
      <div className="Main-container" >
        {children}
      </div>
    </>
  );
};
