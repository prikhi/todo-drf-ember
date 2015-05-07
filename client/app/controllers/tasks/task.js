import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {

    finishTask: function(task) {
      task.set('isFinished', true);
      task.save();
      this.set('errors', {});
      this.set('added', task);
    },

    deleteTask: function(task) {
      task.one('didDelete', this, function() {
        this.transitionToRoute('tasks.index');
      });
      task.destroyRecord();
      this.set('errors', {});
      this.set('added', task);
    },

  }
});
