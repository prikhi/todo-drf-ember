import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string', {defaultValue: ""}),
  favorite: DS.attr('boolean', {defaultValue: false}),
  isFinished: DS.attr('boolean', {defaultValue: false}),

});
