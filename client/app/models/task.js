import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  favorite: DS.attr('boolean'),
  isFinished: DS.attr('boolean'),
});
