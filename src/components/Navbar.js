import { AiFillCaretLeft, AiFillSetting } from 'react-icons/ai';
import { MdKeyboardVoice } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <NavLink to="/animaty">
        <AiFillCaretLeft />
      </NavLink>
      <li>ANIMATY</li>
      <li>
        <MdKeyboardVoice />
        <AiFillSetting />
      </li>
    </ul>
  </nav>
);

export default Navbar;
