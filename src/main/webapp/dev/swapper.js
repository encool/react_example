var React = require('react');
var ReactDOM = require('react-dom');

var Swapper = React.createClass({
  propTypes: {
    // `leftChildren` and `rightChildren` can be a string, element, array, etc.
    leftChildren: React.PropTypes.node,
    rightChildren: React.PropTypes.node,

    swapped: React.PropTypes.bool
  },
  render: function() {
    var children;
    if (this.props.swapped) {
      children = [this.props.rightChildren, this.props.leftChildren];
    } else {
      children = [this.props.leftChildren, this.props.rightChildren];
    }
    return <div>{children}</div>;
  }
});
module.exports = Swapper;