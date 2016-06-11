import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fourteenth-slide', 'Integration | Component | fourteenth slide', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fourteenth-slide}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fourteenth-slide}}
      template block text
    {{/fourteenth-slide}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
