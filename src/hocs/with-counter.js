import React from "react";

export const withCounter = (Component) => {
  return class Hoc extends React.Component {
    // some logic
    render() {
      return (
        <>
          <Component {...this.props} counter="1" />
        </>
      );
    }
  };
};
