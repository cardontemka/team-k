import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Navbar.module.css'
import logo from "../assets/png/team.png";
import { useContext, useState } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const routes = [
    { name: "Products", to: "/" },
    { name: "Services", to: "blog" },
    { name: "Contacts", to: "post" },
    { name: "Log in", to: "log" },
];

export const Navbar = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const [bar, setBar] = useState();
    const [lastScrollTop, setLastScrollTop] = useState();
    document.addEventListener('scroll', () => {
        if (document.body.scrollTop > lastScrollTop || document.documentElement.scrollTop > lastScrollTop) {
            setBar((bar) => true)
        } else {
            setBar((bar) => false)
        }
        setLastScrollTop((lastScrollTop) => document.body.scrollTop || document.documentElement.scrollTop)
    })
    return (
        <div className={`${styles.headContain} ${bar ? styles.hideBar : styles.showBar}`}>
            <img src={logo} className={styles.logo} />
            <div className={styles.links}>
                <div className={`${styles.toggle} ${isDark ? styles.dark : styles.white}`} onClick={toggleTheme}>{isDark ? 'Dark' : 'White'}</div>
                {routes.map(({ name, to }) => (
                    <div key={name} className={styles.link}><Link to={to} />{name}</div>
                ))}
                <div className={styles.getButton}><Link to='access' />Get Access</div>
            </div>
        </div>
    );
};
