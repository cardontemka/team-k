import styles from "../styles/pages/HomePage.module.css";
import scroll from "../styles/pages/ScrollPage.module.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import event1 from "../assets/png/event1.png";
import event2 from "../assets/png/event2.png";
import event3 from "../assets/png/event3.png";
import meet from "../assets/png/meeting.png";
import calicon from "../assets/png/calicon.png";
import notif from "../assets/png/notif.png";
import calendar from "../assets/png/calendar.png";
import { Review } from "../components";
import { ThemeContext } from "../providers/ThemeProvider";

export const HomePage = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className={`${styles.contain} ${isDark ? styles.dark : styles.white} ${isDark ? scroll.dark : scroll.white}`}>
            <div className={styles.firstContain}>
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
                <div className={`${scroll.textContain} ${isDark ? scroll.dark : scroll.white}`}>
                    <p className={scroll.title}>Your Hub for teamwork</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <p className={scroll.lrnmore}>Learn more <FaLongArrowAltRight /></p>
                </div>
                <div className={scroll.imageContain}>
                    <img className={scroll.coverImage} src={meet} />
                    <img className={scroll.calicon} src={calicon} />
                    <img className={scroll.notif} src={notif} />
                    <img className={scroll.event1} src={event1} />
                </div>
            </div>
            <div className={scroll.contain}>
                <div className={scroll.imageContain}>
                    <div className={scroll.bgwoman1}></div>
                    <img className={scroll.event2} src={event2} />
                    <img className={scroll.event3} src={event3} />
                </div>
                <div className={`${scroll.textContain} ${scroll.textMargin} ${isDark ? scroll.dark : scroll.white}`}>
                    <p className={scroll.title}>Simple task management</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <p className={scroll.lrnmore}>Learn more <FaLongArrowAltRight /></p>
                </div>
            </div>
            <div className={scroll.contain}>
                <div className={`${scroll.textContain} ${isDark ? scroll.dark : scroll.white}`}>
                    <p className={scroll.title}>Scheduling that actually works</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <p className={scroll.lrnmore}>Learn more <FaLongArrowAltRight /></p>
                </div>
                <div className={scroll.imageContain}>
                    <div className={scroll.bgwoman2}></div>
                    <img className={scroll.calendar} src={calendar}></img>
                </div>
            </div>
            <div className={`${scroll.wpsau} ${scroll.title} ${isDark ? scroll.dark : scroll.white}`}>What people say about us</div>
            <div className={scroll.reviewContain}>
                <div className={scroll.reviews}>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </div>
    )
}