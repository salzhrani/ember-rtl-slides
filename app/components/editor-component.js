import Ember from 'ember';
import getHtml from 'ember-rtl/utils/get-html';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('output', getHtml(`import Ember from 'ember' ;export default Ember.Component.extend({});`, '{{#if true}}Hello{{/if}}'))
  }
});
