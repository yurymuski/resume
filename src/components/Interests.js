import React, { Component } from "react";

import Gallery from "./Gallery";
import sleeping from "../images/sleeping.jpg";

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
    return name === "Sleeping"
    ? sleeping
    : name === "Travelling"
    ? `https://loremflickr.com/320/240/travel`
    : `https://loremflickr.com/320/240/${name}`;
  };

  render() {
    return <Gallery tiles={this.state.tiles} />;
  }
}
