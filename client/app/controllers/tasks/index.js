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
      var task = this.store.createRecord('task', {
        title: this.get('formTitle'),
        description: this.get('formDescription'),
        favorite: false,
        isFinished: false,
      });
      task.one('didCreate', this,  function() {
        this.set('formTitle', '');
        this.set('formDescription', '');
      });
      var that = this;
      task.save().then(function() {
        this.set('formTitle', '');
        this.set('formDescription', '');
      }, function(reason) {
        console.log(reason);
        that.set('errors', reason.errors);
        task.deleteRecord(); 
      });
    },
  }
});
