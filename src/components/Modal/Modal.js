import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { image, tags } = this.props;
    return createPortal(
      <div className={styles.overlay} onClick={this.handleOverlayClick}>
        <div>
          <img src={image} alt={tags} className={styles.modal} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
};