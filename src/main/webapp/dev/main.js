// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var Grid = require('./grid.js')
var MenuItem = require('./components/MenuItem.js')

var ReactGridLayout = require('react-grid-layout');
var Table = require('./table.js');

var Tabs = require('./tabs.js');

var AccordionGroup = require('./components/AccordionMenuGroup.js')
var items = [
          {i: 'a', x: 0, y: 0, w: 1, h: 1,url:"/about", static: true},
          {i: 'b', x: 1, y: 0, w: 1, h: 1,url:"/inbox", static: true},
          {i: 'c', x: 2, y: 0, w: 1, h: 1,url:"/grid",  static: true}
        ];
var Grid = React.createClass({
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'Head', x: 0, y: 0, w: 12, h: 2, static: true},
      {i: 'MenuLeft', x: 0, y: 1, w: 1, h: 10,static: true},
      {i: 'Tabs', x: 1, y: 1, w: 11, h: 1,static: true},
      {i: 'Content', x: 1, y: 2, w: 11, h: 12,static: true}
    ];
    var navClass = 'nav nav-tabs';
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'Head'}>aaaaaaaaaaa</div>
        <div key={'MenuLeft'} >	
	       	<ul className={navClass}>
	       		<AccordionGroup groupId="test"/>
	       		<li role="presentation"> <MenuItem item={{url:'/inbox',name:'收件箱'}}/></li>
	       		<li role="presentation"><MenuItem item={{url:'/grid',name:'表格'}}/></li>
	       		<li role="presentation"><Link to="/grid">Grid</Link></li>
	        </ul>
	    </div>
	    <div key={'Tabs'}>
	    <Tabs items={items}/>
	    </div>
        <div key={'Content'}>
        {this.props.children}
        </div>
      </ReactGridLayout>
    )
  }
});

const About = React.createClass({
  render() {
    return <div><h3>About</h3><input/></div>
    
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
		  indexRoute: { component: About },
		  childRoutes: [
		    { path: 'about', component: About },
		    { path: 'grid', component: Table },
		    {
		      path: 'inbox',
		      component: Inbox,
		      childRoutes: [{
		        path: 'messages/:id',
		        onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
		      }]
		    },
		    {
		      component: Inbox,
		      childRoutes: [{
		        path: 'messages/:id', component: Message
		      }]
		    }
		  ]
		};

ReactDOM.render(<Router routes={routes} />, document.getElementById("content"))