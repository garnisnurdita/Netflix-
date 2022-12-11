const NavBtn = ({ children, href }) => {
  return (
    <a className="navbtn" href={href}>
      {children}
    </a>
  );
};

export default NavBtn;

//props ={link: http://netflix, text: beranda}
