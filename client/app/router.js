import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('tasks', function() {
    this.route('task', { path: ':task_id' });
    this.route('favorites');
  });
});
