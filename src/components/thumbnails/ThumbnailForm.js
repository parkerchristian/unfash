import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FashForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    imgUrl: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, imgUrl } = this.state;
    // error here ?
    this.props.onSubmit(title, imgUrl);
    this.setState({ title: '', imgUrl: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, imgUrl } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="imgUrl">
          Enter the image url: 
          <input type="text" name="imgUrl" value={imgUrl} onChange={this.handleChange} />
        </label>
        <label htmlFor="title">
          Enter your title:
          <input type="text" name="title" value={title} onChange={this.handleChange}/>
        </label>
        <button>Submit</button>
      </form>
    );
  }

}
