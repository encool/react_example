var AppDispatcher = require('../dispatcher/mydispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var EntityConts = require('../constants/EntityConts.js');
var _ = require('lodash');
var items = {};
var CHANGE_EVENT = 'entities_change';

function hasItem() {
	return null;
}

function create(clazz, id, entity) {
	items[clazz] = {}
	items[clazz][id] = entity;
	//debugger;
}

function update(clazz, id, entity) {
	//debugger;
	var itementity = items[clazz][id];
	_.map(entity, function(value, key) {
			//	console.log(key);
			itementity[key] = entity[key];
		})
		//console.log(items);
}
var EntitiesStrore = assign({}, EventEmitter.prototype, {

	/**
	 * Get the entire collection of TODOs.
	 * @return {object}
	 */
	getAll: function() {
		//	console.log("get all",items);
		return items;
	},
	emitChange: function(event) {
		this.emit(CHANGE_EVENT);
	},
	getItem: function(clazz, id, fieldNo) {
		//	debugger;
		if (items[clazz] != undefined && items[clazz][id] != undefined && items[clazz][id][fieldNo] != undefined) {
			return items[clazz][id][fieldNo];
		}
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;
		var clazz = action.clazz;
		var id = action.id;
		var entity = action.entity;
		console.log("payload", payload);
		switch (action.actionType) {
			case EntityConts.ENTITY_CHANGE:
				update(clazz, id, entity);
				EntitiesStrore.emitChange(CHANGE_EVENT);
				break;
			case EntityConts.ENTITY_ADD:
				create(clazz, id, entity);
				EntitiesStrore.emitChange(CHANGE_EVENT);
				break;
				// add more cases for other actionTypes, like TODO_UPDATE, etc.
		}

		return true; // No errors. Needed by promise in Dispatcher.
	})

});
module.exports = EntitiesStrore;