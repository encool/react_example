var React = require('react');
var ReactInput = require('./ReactInput.js');
var EntityAction = require('../actions/entityactions.js');
var _ = require('lodash');
var EntitiesStore = require('../stores/entitiestore.js');
var ReactForm = React.createClass({
	getEntity: function(clazz, id) {
		return {
			id: 12,
			name: '吃饭'
		}
	},
	assembleItem: function(clazz, entity) {
		var id = entity.id;
		return {
			[clazz]: {
				[id]: {
					entity: entity
				}
			}
		}
	},
	getDefaultProps() {
		return {
			entity: {
				id: 12,
				name: '吃饭'
			}
		}
	},
	componentDidMount: function() {
		console.log("formentity componentDidMount excute");
		console.log(this.props);
		EntitiesStore.addChangeListener(this._onChange);
		var clazz = this.props.clazz;
		var id = this.props.id;
		var entity = this.props.entity
		setTimeout(function() {
			EntityAction.create(clazz, id, entity);
		}, 3000);

	},
	_onChange: function() {

	},
	getInitiateStatus: function() {
		return {
			entity: {
				id: 12,
				name: '吃饭'
			}
		}
	},
	render: function() {
		var keys = _.keys(this.props.entity);
		var clazz = this.props.clazz;
		var id = this.props.id;
		var entity = this.props.entity;
		var child = _.map(keys, function(key) {
			return (<ReactInput clazz={clazz} id={id} fieldNo={key} value={entity[key]}> </ReactInput>)

		});
		console.log("child", child);
		return (<div>
 			 {child}
 			</div>)
	}
});
module.exports = ReactForm;