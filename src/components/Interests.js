import React, { Component } from "react";

import Gallery from "./Gallery";

export default class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: Array.isArray(this.props.interests)
        ? this.props.interests.map(interest => ({
            title: interest.name,
            image: interest.image || this.extractImage(interest.name)
          }))
        : []
    };
  }

  extractImage = name => {
    return `https://loremflickr.com/320/240/${name}`;
  };

  render() {
    return <Gallery tiles={this.state.tiles} />;
  }
}
