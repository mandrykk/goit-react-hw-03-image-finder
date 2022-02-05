import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({webformatURL, largeImageURL, onModalShow, tags }) {
  return (
<li className={styles.imageGalleryItem}
    onClick={() => onModalShow(largeImageURL)}>
      <img src={webformatURL}
        alt={tags}
        className={styles.imageGalleryItemImage}
      />
</li>
  )
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onModalShow: PropTypes.func.isRequired,
  tags: PropTypes.string,
};