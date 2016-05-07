var React = require('react');
var Link = require('react-router').Link
var AccordionBody = require('./AccordionMenuBody.js')
var MenuItem = require('./MenuItem.js')
//TODO
var AccordionMenuGroup = React.createClass({
	  propTypes: {

	  },
	  getInitialState() {
	    return {
	      menus: this.props.menus==undefined?[{url:'/about'},{url:'/grid'}]:this.props.menus
	    };
	  },
	  getDefaultProps() {
	    return {
	    	menus:[{isGroup:true,url:'/about',name:"关于",childmenus: [{url:'/about',name:"关于"},{url:'/grid',name:"表格"}]},{url:'/inbox',name:"收件箱"},{url:'/grid',name:"表格"}],
	    	groupId: 'testbody'
	    };
	  },	  
/*		return item.isCroup?
:});*/
	  render: function() {
		  console.log(this.props);
		  var bodyId = this.props.groupId+'body';
		  var bodyherf = "#"+bodyId;
			  
		  return (
				  <ul id={this.props.groupId} className='nav nav-tabs'>
				  {this.props.menus.map(function(item){
					  return item.isGroup?
							  <li role="presentation" className="accordion-group" style={{width:'100%'}}>
								<Link to={item.url} className="accordion-heading accordion-toggle" data-toggle="collapse" data-parent="#accordion2" data-target={bodyherf}>
								{item.name}
					          </Link>
					          <AccordionMenuGroup groupId={bodyId} menus={item.childmenus}></AccordionMenuGroup>
					          </li>:<li role="presentation" style={{width:'100%'}}><MenuItem item={item}></MenuItem></li>
				  })}
				  </ul>
		  )
			
	    
	  }
});
module.exports = AccordionMenuGroup;