var AppDispatcher = require('../dispatcher/mydispatcher');
var MenuConstants = require('../constants/menuconstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'tabs_change';
var nextActiveitem = undefined;
var items = {}; // collection of  items
var _ = require('lodash');
/**
 * Create a TODO item.
 * @param {string} text The content of the TODO
 */
function create(item) {
  nextActiveitem = undefined;
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  items[id] = {
    id: id,
    url: item.url,
    name: item.name
  };
}

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy(item){
//	console.log("delete item",item);
	setRightItem(item);
	delete items[item.id];
}

function hasItem(item){
	var result = false;
	_.map(items,function(it,i){
		if(it.url==item.url){
			console.log("iiiii",i);
			result = true;
		}
	});
	return result;
}

function setRightItem(item){
  	var index = undefined;
  	var leftItem = undefined;
  	var rightItem = undefined;
	_.map(items,function(it,i){
		
		if(it.url==item.url){
			index = i;
		}else{
			leftItem = it;
		}		
		if(index!=undefined&&i==index+1){
			rightItem = it;
		}
	});
	if(rightItem!=undefined){
		nextActiveitem = rightItem;
	}else if(leftItem!=undefined){
		nextActiveitem = leftItem;
	}
}
var MenuStrore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
//	console.log("get all",items);
    return items;
  },
  getActiveItem:function(){
	  return nextActiveitem;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
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
    var item = action.item;
    console.log("payload",payload);
    switch(action.actionType) {
      case MenuConstants.MENU_CLICKED:
    	console.log("detected click",item);
        if(!hasItem(item)){
          create(item);
          MenuStrore.emitChange();
        }
        break;
      case MenuConstants.TAB_XCLICKED:
    	  destroy(item);
    	  MenuStrore.emitChange();
    	  break;
      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = MenuStrore;