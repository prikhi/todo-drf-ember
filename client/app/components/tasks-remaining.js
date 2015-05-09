import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  remaining: function() {
    var tasks = this.get('model');
    return tasks.filterBy('isFinished', false).get('length');
  }.property('model.@each.isFinished'),
});
