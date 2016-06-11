import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fifteenth-slide', 'Integration | Component | fifteenth slide', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fifteenth-slide}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fifteenth-slide}}
      template block text
    {{/fifteenth-slide}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
