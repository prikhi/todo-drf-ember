import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    /* Filter our inital REST query to get a smaller dataset & the array to get
    * live feedback */
    return this.store.filter(
      'task',
      { is_finished: 'False', is_favorite: 'True' },
      task => {
          return !task.get('isFinished') && task.get('isFavorite');
      }
    );
  },
});
