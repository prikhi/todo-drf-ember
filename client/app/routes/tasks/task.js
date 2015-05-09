import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(task) {
    task.one('didDelete', this, function() {
      this.controller.transitionToRoute('tasks.index');
    });
  }
});
