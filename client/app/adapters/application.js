import Ember from 'ember';
import DS from 'ember-data';

import DRFAdapter from './drf';


export default DRFAdapter.extend({

  ajaxError: function(jqXHR) {
    var error = this._super(jqXHR);

    if (jqXHR && jqXHR.status === 400) {
      var response = Ember.$.parseJSON(jqXHR.responseText);
      return new DS.InvalidError(response);
    } else {
      return error;
    }
  }

});
