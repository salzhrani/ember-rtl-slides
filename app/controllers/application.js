import Ember from 'ember';

const LEFT = 37;
const RIGHT = 39;
const SPACEBAR = 32;
const { computed } = Ember;

function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
          if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
      }

export default Ember.Controller.extend({
  slide: 0,
  queryParams: ['slide'],
  slides: [
    'first-slide',
    'second-slide',
    'third-slide',
    'why-slide',
    // 'fourth-slide',
    'fifth-slide',
    'sixth-slide',
    'netflix-slide',
    'seventh-slide',
    'eighth-slide',
    'ninth-slide',
    'tenth-slide',
    'eleventh-slide',
    'tools-slide',
    'twelfth-slide',
    'thirteenth-slide',
    'fourteenth-slide',
    'fifteenth-slide',
    'sixteenth-slide',
  ],
  setupListeners: function(){
    document.addEventListener('keydown', (evt) => {
      const { keyCode } = evt;
      const slide = this.get('slide');
      if (keyCode === LEFT && slide > 0) {
        this.set('slide', slide - 1);
      } else if ((keyCode === RIGHT || keyCode === SPACEBAR) && slide < this.get('slides').length - 1) {
        this.set('slide', slide + 1);
      } else if (keyCode === 192) {
        toggleFullScreen();
      }
    });
  }.on('init'),
  curSlide: computed('slide', function(){
    return this.slides[this.get('slide')];
  }),
  actions: {
    advance(){
      this.set('slide', this.get('slide') + 1);
    }
  }
});
