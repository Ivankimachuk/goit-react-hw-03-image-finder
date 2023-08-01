import React, { Component } from 'react';
import style from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <div className={style.BtnContainer}>
        <button className={style.button} type="button" onClick={this.props.onClick} >
          {this.props.children}
        </button>
      </div>
    );
  }
}
