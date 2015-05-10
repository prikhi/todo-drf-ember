import Ember from 'ember';

export default Ember.Controller.extend({
  newTask: {title: "", description: "", isFinished: false, isFavorite: false},

  actions: {
    createNewTask: function() {
      var task = this.store.createRecord('task', this.get('newTask'));
      task.save().then(() => {
        this.set('newTask', {title: "", description: "", isFinished: false, isFavorite: false});
        this.set('errors', {});
        this.set('added', task);
      }, reason => {
        task.deleteRecord();
        this.set('errors', reason.errors);
        this.set('added', false);
      });
    },
  }
});
