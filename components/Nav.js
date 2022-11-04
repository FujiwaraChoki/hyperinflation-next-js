import { Navbar } from "react-navbar-menu";

const Nav = () => {
  // Navbar component
  return (
    <div>
      <Navbar
        IconColor={"yellow"}
        MenuNumber={3}
        Center={true}
        Position={"top"}
        url1={"/"}
        icon1={"fas fa-home"}
        url2={"/articles/"}
        icon2={"fas fa-newspaper"}
        url3={"/contact"}
        icon3={"fas fa-envelope"}
        backgroundColor={"#151c28"}
        degree={`to bottom`}
        gradcolor1={"#a595e9"}
        gradcolor2={"#a595e933"}
      />
    </div>
  );
};

export default Nav;
