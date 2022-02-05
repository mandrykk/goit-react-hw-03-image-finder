import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ onLoadMore }) {
    return (
        <div className={styles.wrapper}>
            <button type="button" className={styles.button} onClick={onLoadMore}>
                Load more
            </button>
        </div>
    )
}

Button.propTypes = {
  onLoadMore: PropTypes.func,
};