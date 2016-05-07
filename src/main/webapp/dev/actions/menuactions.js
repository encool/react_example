/**
 * TodoActions
 */

var MyDispatcher = require('../dispatcher/mydispatcher');
var MenuConstants = require('../constants/menuconstants');

var MenuActions = {
  /**
   * @param  {string} text
   */
  create: function(item) {
	  MyDispatcher.handleViewAction({
      actionType: MenuConstants.MENU_CREATED,
      item: item
    });
  },
  click:function(item){
	  MyDispatcher.handleViewAction({
        actionType: MenuConstants.MENU_CLICKED,
        item: item
      });	  
  },
  tabclick:function(item){
	  MyDispatcher.handleViewAction({
	        actionType: MenuConstants.TAB_XCLICKED,
	        item: item
	  });
  }
};

module.exports = MenuActions;