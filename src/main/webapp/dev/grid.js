// main.js
var React = require('react');
var ReactDOM = require('react-dom');
//var Swapper = require('./swapper.js');
//ReactDOM.render(
//		<Swapper type="sd" leftChildren="<div>left</div>" rightChildren="<div>left</div>" swapped="true"/>,
//		document.getElementById('content')
//);

var ReactGridLayout = require('react-grid-layout');

var Grid = React.createClass({
   getDefaultProps() {
	    return {
	      className: "layout",
	      isDraggable: false,
	      isResizable: false,
	      items: 50,
	      cols: 12,
	      rowHeight: 30
	    };
	  },
  render: function() {

    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'Head', x: 0, y: 0, w: 12, h: 2, static: true},
      {i: 'MenuLeft', x: 0, y: 2, w: 1, h: 10, minW: 2, maxW: 4},
      {i: 'Content', x: 1, y: 2, w: 11, h: 12}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'Head'}>a</div>
        <div key={'MenuLeft'}>b</div>
        <div key={'Content'}>
        </div>
      </ReactGridLayout>
    )
  }
});
module.exports = Grid;