import Ember from 'ember';

export default Ember.Controller.extend({
  newTask: {title: "", description: "", isFinished: false, isFavorite: false},

  actions: {
    createNewTask: function() {
      var task = this.get('newTask');
      task.save().then(() => {
        this.set('newTask', this.store.createRecord('task'));
        this.set('errors', {});
        var messageText = 'Added "%@".'.fmt(task.get('title'));
        this.notify.success(messageText);
      }, reason => {
        this.set('errors', reason.errors);
      });
    },
  }
});
