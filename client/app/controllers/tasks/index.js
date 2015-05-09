import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['tasks/task'],

  newTask: {title: "", description: "", isFinished: false, favorite: false},


  actions: {
    createNewTask: function() {
      var that = this;
      var task = this.store.createRecord('task', this.get('newTask'));
      task.save().then(function() {
        that.set('newTask', {title: "", description: "", isFinished: false, favorite: false});
        that.set('errors', {});
        that.set('added', task);
      }, function(reason) {
        that.set('errors', reason.errors);
        that.set('added', false);
        task.deleteRecord();
      });
    },
  }
});
