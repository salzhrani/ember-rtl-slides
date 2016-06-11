import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sixteenth-slide', 'Integration | Component | sixteenth slide', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sixteenth-slide}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sixteenth-slide}}
      template block text
    {{/sixteenth-slide}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
