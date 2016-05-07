'use strict';
var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);
var NavTab = require('./components/NavTab.js');
var MenuStrore = require('./stores/menustore.js');
var browserHistory = require('react-router').browserHistory
/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
var AddRemoveLayout = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
	  items: React.PropTypes.array
  },
  getDefaultProps() {
    return {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 20
    };
  },

  getInitialState() {
	  return {
		  items: this.props.items,
		  newCounter: 0
	  };
  },
  componentDidMount: function() {
	  MenuStrore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
	  MenuStrore.removeChangeListener(this._onChange);
  },
  _onChange(){
	  var items = MenuStrore.getAll();	 
//	  console.log("geteditems",items);
	  this.setState({
		  items:items		  
	  });
	  this.forceUpdate();
	  var item = MenuStrore.getActiveItem();	 
	  if(item!=undefined){
		  browserHistory.push(item.url);
	  }
	  
//	  console.log("zhuangtaishishenme",this.state);
  },
  createElement(item) {
//	console.log("item",item);
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
//    var i = item.add ? '+' : el.i;
    return (
    	<NavTab item={item}></NavTab>
    );
  },

  onAddItem() {
    /*eslint no-console: 0*/
 //   console.log('adding', 'n' + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: 'n' + this.state.newCounter,
        x: this.state.items.length * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 1,
        h: 1
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  },

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  },

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({layout: layout});
  },

  onRemoveItem(i) {
 //   console.log('removing', i);
    this.setState({items: _.reject(this.props.items, {i: i})});
  },
  /*<ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}*/
  render() {
//	  console.log("render tabs");
    return (  
    	<nav className="navbar navbar-default" style={{"min-height":"45px"}}>
        <ul className="nav nav-pills">
          {_.map(this.state.items, this.createElement)}
        </ul>
        </nav>
    );
  }
});
module.exports = AddRemoveLayout;