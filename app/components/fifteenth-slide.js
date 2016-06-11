import Ember from 'ember';

export default Ember.Component.extend({
  js: `import Ember from 'ember';
export default
Ember.Component.extend({
  user: {
    name: 'Samy Alzhrani',
    tweets: [
      {
        body: 'Welcome to the network'
      },
    ],
  },
  actions: {
    addTweet: function(val){
      const tweets = this.get('user.tweets').pushObject({
        body: val,
      });
      this.set('tempTweet', '');
    }
  }
});`,
  hbs: `<div class="outer columns twelve">
      <div style="text-align: center">
        <i class="material-icons mdl-list__item-avatar">person</i>
        <h4>{{user.name}}</h4>
        <ul class="mdl-list">
          {{#each user.tweets as |tweet|}}
          <li class="mdl-list__item mdl-list__item--three-line">
            <i class="material-icons mdl-list__item-avatar">person</i>
            <div style="display: inline-block; padding: 0 10px; text-align:inherit;">
              <h6 style="margin: 10px 0; ">Samy Alzhrani</h6>
              <span>{{tweet.body}}</span>
            </div>
          </li>
          {{/each}}
        </ul>
      </div>

  {{textarea class="mdl-textfield__input" value=tempTweet placeholder="New tweet" enter="addTweet" cols="60"}}
</div>`,
  keyDown(evt){
    if (evt.target.tagName === 'TEXTAREA') {
      evt.stopPropagation();
    }
    return true;
  },
  updateVals() {
    console.log(Date.now());
    this.set('js', this._js);
    this.set('hbs', this._hbs);
  },
  didInsertElement(){
    this.$('#toggle').on('change', (evt) => {
      this.set('mode', evt.target.value)
    })
  },
  actions: {
    updateJS(val){
      Ember.run.debounce(this, 'updateVals', 300);
      this._js = val;
    },
    updateHBS(val){
      Ember.run.debounce(this, 'updateVals', 300);
      this._hbs = val;
    },
  },
  mode: 'js',
  showJS: Ember.computed.equal('mode', 'js')
});
