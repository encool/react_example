// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var browserHistory = require('react-router').browserHistory
var Grid = require('./grid.js')
var MenuItem = require('./components/MenuItem.js')
var ReactForm = require('./components/ReactForm.js')
var ReactGridLayout = require('react-grid-layout');
var Table = require('./table.js');

var Tabs = require('./tabs.js');

var AccordionGroup = require('./components/AccordionMenuGroup.js')
var items = [{
  i: 'a',
  x: 0,
  y: 0,
  w: 1,
  h: 1,
  url: "/about",
  static: true
}, {
  i: 'b',
  x: 1,
  y: 0,
  w: 1,
  h: 1,
  url: "/inbox",
  static: true
}, {
  i: 'c',
  x: 2,
  y: 0,
  w: 1,
  h: 1,
  url: "/grid",
  static: true
}];
var Grid = React.createClass({
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [{
      i: 'Head',
      x: 0,
      y: 0,
      w: 12,
      h: 2,
      static: true
    }, {
      i: 'MenuLeft',
      x: 0,
      y: 1,
      w: 1,
      h: 10,
      static: true
    }, {
      i: 'Tabs',
      x: 1,
      y: 1,
      w: 11,
      h: 1,
      static: true
    }, {
      i: 'Content',
      x: 1,
      y: 2,
      w: 11,
      h: 12,
      static: true
    }];
    var navClass = 'nav nav-tabs';
    return (
      <div className="container-fluid" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div className="row" key={'Head'} style={{height:"80px"}}>
        	<div className="col-sm-12">i am a head</div>
        </div>
        <div className="row">
		        <div key={'MenuLeft'} className="col-sm-1">	
			       		<AccordionGroup groupId="test"/>
			    </div>
			    <div className="col-sm-11">
					    <div key={'Tabs'} className="">
					    <Tabs items={items}/>
					    </div>
				        <div key={'Content'} className="">
				        {this.props.children}
				        </div>
			    </div>
        </div>
      </div>
    )
  }
});
// add this method
var handleSubmit = function(event) {
  event.preventDefault()
  const userName = event.target.elements[0].value
  const repo = event.target.elements[1].value
  const path = `/repos/${userName}/${repo}`
  console.log(path)
  browserHistory.push('/inbox')
};
const About = React.createClass({
  render() {
    return (<div><h3>About</h3>
            <ReactForm clazz='Task' id='12'></ReactForm>
    		</div>)

  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

const routes = {
  path: '/',
  component: Grid,
  indexRoute: {
    component: About
  },
  childRoutes: [{
    path: 'about',
    component: About
  }, {
    path: 'grid',
    component: Table
  }, {
    path: 'inbox',
    component: Inbox,
    childRoutes: [{
      path: 'messages/:id',
      onEnter: ({
        params
      }, replace) => replace(`/messages/${params.id}`)
    }]
  }, {
    component: Inbox,
    childRoutes: [{
      path: 'messages/:id',
      component: Message
    }]
  }]
};

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById("content"))