import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    value: "",
  };

  handleTextChange = (event) => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.value.trim() === "") {
      return toast.warning("Please, enter a request");
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
<header className={styles.searchbar}>
  <form className={styles.searchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
    </button>

    <input
      className={styles.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleTextChange}
      value={this.state.value}
    />
  </form>
</header>
    )
  }
}