import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Component.extend({
  actions: {
    finishTask: function() {
      var task = this.get('task');
      task.set('isFinished', true);
      task.save();
      Notify.info('"%@" was finished.'.fmt(task.get('title')));
    },

    deleteTask: function() {
      var task = this.get('task');
      task.destroyRecord();
      Notify.alert('"%@" was deleted.'.fmt(task.get('title')));
    },

    toggleFavorite: function() {
      var task = this.get('task');
      task.set('isFavorite', !task.get('isFavorite'));
      if (task.get('isFavorite')) {
        Notify.success('"%@" was favorited.'.fmt(task.get('title')));
      } else {
        Notify.success('"%@" was un-favorited.'.fmt(task.get('title')));
      }
      task.save();
    },
  }
});
