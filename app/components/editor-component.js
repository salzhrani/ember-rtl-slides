import Ember from 'ember';
import getHtml from 'ember-rtl/utils/get-html';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('output', getHtml(this.get('js') || '', this.get('hbs') || ''))
  }
});
