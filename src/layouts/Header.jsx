import { Link } from "react-router-dom";
import logoPhotoSnap from '../assets/shared/desktop/logo.svg';
import burgerMenu from '../assets/shared/mobile/menu.svg';

const Header = () => {
  return (
    <header>
      <div className="header grid container">
        <Link to="/">
          <img src={logoPhotoSnap} alt="PHOTOSNAP" />
        </Link>
        <img src={burgerMenu} alt="To open the menu" />
      </div>
    </header>
  );
};
 
export default Header;