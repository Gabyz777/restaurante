import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { GoHomeFill } from 'react-icons/go';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdRestaurantMenu } from 'react-icons/md';
import { PiPhoneFill } from 'react-icons/pi';
import { RiTeamFill } from 'react-icons/ri';
import { MdAutoAwesome } from 'react-icons/md';
import imgLogo2 from '../../img/logoRedonda.png';
import imgLogo from '../../img/nomeLogo.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={imgLogo2} alt="Logo2" className={styles.logoImg2} />

                <img src={imgLogo} alt="Logo" className={styles.logoImg} />
            </div>
            <ul className={styles.links}>
                <li>
                    {' '}
                    <Link to="/">
                        <GoHomeFill className={styles.icon} />
                    </Link>
                </li>
                <li>
                    {' '}
                    <Link to="/sobre">
                        <BsFillPersonFill className={styles.icon} />
                    </Link>
                </li>
                <li>
                    {' '}
                    <Link to="/servicos">
                        <MdRestaurantMenu className={styles.icon} />
                    </Link>
                </li>
                <li>
                    {' '}
                    <Link to="/contato">
                        <PiPhoneFill className={styles.icon} />
                    </Link>
                </li>
                <li>
                    {' '}
                    <Link to="/equipe">
                        <RiTeamFill className={styles.icon} />
                    </Link>
                </li>
                <li>
                    {' '}
                    <Link to="/extra">
                        <MdAutoAwesome className={styles.icon} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
