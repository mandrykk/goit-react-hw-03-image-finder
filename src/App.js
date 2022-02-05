import './App.css';
import React, { Component } from "react";
import { ToastContainer, toast} from "react-toastify";

import fetchApi from "./components/api";
import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";

export default class App extends Component {
  state = {
    searchInfo: '',
    images: [],
    largeImage: '',
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchInfo !== this.state.searchInfo || prevState.page !== this.state.page) {
      this.getFetch();
    }
  }

  handleFormSubmit = name => {
    this.setState({ searchInfo: name, page: 1, images: [] });
  };

  getFetch = () => {
    const { searchInfo, page } = this.state;
    this.setState({ status: 'pending' });

    fetchApi(searchInfo, this.state.page).then(images => {
      if (images.totalHits !== 0) {
        return this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          status: 'resolved',
        }));
      }
      return this.setState({ status: 'rejected' });
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onCloseModal = () => {
    this.setState({ largeImage: '' });
  };

  onImageOpen = largeImage => {
    this.setState({ largeImage: largeImage });
  };

  render() {
    const { status, images, page, largeImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && ''}
        {status === 'pending' && <Loader />}
        {status === 'pending' && page > 1 && (
          <>
            <ImageGallery images={images} onModalShow={this.onImageOpen} />
            <Loader />
          </>
        )}
        {status === 'resolved' && (
          <>
            <ImageGallery images={images} onModalShow={this.onImageOpen} />

            <Button onLoadMore={this.onLoadMore} />
          </>
        )}

        <ToastContainer autoClose={4000} />
        
        {status === 'rejected' && toast.error('Please, try again')}
        {largeImage && <Modal image={largeImage} onClose={this.onCloseModal}></Modal>}
      </>
    );
  }
}
