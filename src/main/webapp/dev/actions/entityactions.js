var MyDispatcher = require('../dispatcher/mydispatcher');
var EntityConstants = require('../constants/entityconts');

var EntityActions = {
  /**
   * @param  {string} text
   */
  create: function(clazz, id, entity) {
    MyDispatcher.handleViewAction({
      actionType: EntityConstants.ENTITY_ADD,
      clazz: clazz,
      id: id,
      entity: entity
    });
  },
  update: function(clazz, id, entity) {
    MyDispatcher.handleViewAction({
      actionType: EntityConstants.ENTITY_CHANGE,
      clazz: clazz,
      id: id,
      entity: entity
    });
  }
};

module.exports = EntityActions;