import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

export default function ImageGallery ({images, onModalShow}) {
  return(
    <ul className={styles.imageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return(
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onModalShow={onModalShow}
        />
        )
      })}
    </ul>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onModalShow: PropTypes.func.isRequired,
};