import styles from '../styles/components/Review.module.css'
import { AiFillStar } from "react-icons/ai";
import any from "../assets/png/Avatar.png"
import { useState } from 'react';

export const Review = () => {
    const rating = new Array(5).fill(true, 0, 5)
    const [star, setStar] = useState(rating)
    const handleStars = (ratingNumber) => {
        setStar((prev) => prev.map((el,index) => {return ratingNumber == 0 && !prev[1] && index <= ratingNumber ? !el : index <= ratingNumber }))
    }
    return <div className={styles.contain}>
        <div className={styles.starsContain}>
            {star.map((bool, index) => <AiFillStar className={bool ? styles.starColor : styles.gray} onClick={() => handleStars(index)} />)}
        </div>
        <div className={styles.textBox}>
            Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.
        </div>
        <div className={styles.account}>
            <img src={any} className={styles.profile} />
            <p className={styles.name}>Amy Klassen</p>
        </div>
    </div>
}