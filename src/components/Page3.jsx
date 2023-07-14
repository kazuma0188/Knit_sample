import React, { Component } from 'react';

export default class Page3 extends Component {
  render() {
    return (
      <div>
        <p>画面遷移先のページ</p>
        <p>{this.props.location.state.text}</p>
      </div>
    );
  }
}
//URL  https://nakanishi-s.jp/react-x-db/
