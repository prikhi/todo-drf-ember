import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['tasks/task'],

  formTitle: "",
  formDescription: "",

  remaining: function() {
    var tasks = this.get('model');
    return tasks.filterBy('isFinished', false).get('length');
  }.property('model.@each.isFinished'),

  actions: {
    createNewTask: function() {
      var that = this;
      var task = this.store.createRecord('task', {
        title: this.get('formTitle'),
        description: this.get('formDescription'),
        favorite: false,
        isFinished: false,
      });
      task.save().then(function() {
        that.set('formTitle', '');
        that.set('formDescription', '');
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
