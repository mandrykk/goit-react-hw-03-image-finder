import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={styles.loader}>
             <ThreeDots
             heigth="100"
             width="100"
             color='#ff3a77'
             ariaLabel='loading'
            />
        </div>
    )
}