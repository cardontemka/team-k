import styles from "../styles/components/HomePage.module.css";
import scroll from "../styles/components/ScrollPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from "../assets/png/team.png";
import event1 from "../assets/png/event1.png";
import event2 from "../assets/png/event2.png";
import event3 from "../assets/png/event3.png";
import meet from "../assets/png/meeting.png";
import calicon from "../assets/png/calicon.png";
import notif from "../assets/png/notif.png";
import calendar from "../assets/png/calendar.png";
import bgwoman1 from "../assets/svg/bgwoman1.svg";
import bgwoman2 from "../assets/svg/bgwoman2.svg";

export const HomePage = () => {
    const [pos, setPos] = useState(0);

    const baseUrl = 'https://dummyapi.io/data/v1/'
    useEffect(() => {
        axios
            .get(baseUrl + "user", {
                headers: {
                    "app-id": "636f2fc9e8d0ff51ae3fc566",
                },
            })
            .then((res) => {
                console.log(res.data);
            })
            .then((err) => {
                console.log(err);
            })
    })
    return (
        <div className={styles.contain}>
            <div className={styles.firstContain}>
                <div className={styles.headContain}>
                    <img src={logo} className={styles.logo} />
                    <div className={styles.links}>
                        <div className={styles.link}>Products</div>
                        <div className={styles.link}>Service</div>
                        <div className={styles.link}>Contact</div>
                        <div className={styles.link}>Log in</div>
                        <div className={styles.getButton}>Get Access</div>
                    </div>
                </div>
                <div className={styles.homeContain}>
                    <p className={styles.title}>Instant collaborations for remote teams</p>
                    <p className={styles.text}>All in one for your remote team chats, collaboration and track projects</p>
                    <div className={styles.inputs}>
                        <input className={styles.email} placeholder='Email' />
                        <div className={styles.inputButton}>Get early access</div>
                    </div>
                </div>
            </div>
            <div className={scroll.contain}>
                <div className={scroll.textContain}>
                    <p className={scroll.title}>Your Hub for teamwork</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <Button variant="link" className={scroll.lrnmore} >Learn more <FaLongArrowAltRight /></Button>
                </div>
                <div className={scroll.imageContain}>
                    <img className={scroll.coverImage} src={meet} />
                    <img className={scroll.calicon} src={calicon} />
                    <img className={scroll.notif} src={notif} />
                    <img className={scroll.event} src={event1} />
                </div>
            </div>
            <div className={scroll.contain}>
                <div className={scroll.imageContain}>
                    <div className={scroll.bgwoman1}></div>
                </div>
                <div className={`${scroll.textContain} ${scroll.textMargin}`}>
                    <p className={scroll.title}>Simple task management</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <Button variant="link" className={scroll.lrnmore} >Learn more <FaLongArrowAltRight /></Button>
                </div>
            </div>
            <div className={scroll.contain}>
                <div className={scroll.textContain}>
                    <p className={scroll.title}>Scheduling that actually works</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <Button variant="link" className={scroll.lrnmore} >Learn more <FaLongArrowAltRight /></Button>
                </div>
                <div className={scroll.imageContain}>
                    <div className={scroll.bgwoman2}></div>
                </div>
            </div>
        </div>
    )
}