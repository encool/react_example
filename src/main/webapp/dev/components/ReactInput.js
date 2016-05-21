var React = require('react');
var EntitiesStore = require('../stores/entitiestore.js')
var EntityAction = require('../actions/entityactions.js');
var ReactInput = React.createClass({

	getValue: function() {
		var clazz = this.props.clazz;
		var id = this.props.id;
		var fieldNo = this.props.fieldNo;
		var value = EntitiesStore.getItem(clazz, id, fieldNo);
		return value;
	},
	componentDidMount: function() {
		console.log("reactinput componentDidMount");
		EntitiesStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		EntitiesStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState({
			value: this.getValue()
		});
	},
	getInitialState: function() {
		return {
			value: this.getValue()
		};
	},
	handleChange: function(event) {
		var clazz = this.props.clazz;
		var id = this.props.id;
		var fieldNo = this.props.fieldNo;
		var newValue = event.target.value;
		var entity = {
			[fieldNo]: newValue
		}
		EntityAction.update(clazz, id, entity);
		this.setState({
			value: newValue
		});
	},
	render: function() {
		var value = this.state.value;
		return <input type="text" value={value} onChange={this.handleChange} />;
	}
});
module.exports = ReactInput;