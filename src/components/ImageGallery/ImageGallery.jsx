import React, { Component } from 'react';
import style from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    return <ul className={style.gallery}>{this.props.children}</ul>;
  }
}

