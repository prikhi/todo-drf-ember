import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    finishTask: function() {
      var task = this.get('task');
      task.set('isFinished', true);
      task.save();
    },

    deleteTask: function() {
      var task = this.get('task');
      task.destroyRecord();
    },

    toggleFavorite: function() {
      var task = this.get('task');
      task.set('isFavorite', !task.get('isFavorite'));
      task.save();
    },
  }
});
