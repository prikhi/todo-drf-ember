import Ember from 'ember';

export function breakNewlines(text) {
  text = Ember.Handlebars.Utils.escapeExpression(text);
  text = text.toString();
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new Ember.Handlebars.SafeString(text);
}

export default Ember.HTMLBars.makeBoundHelper(breakNewlines);
