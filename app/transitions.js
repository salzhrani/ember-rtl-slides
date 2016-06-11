export default function() {
  this.transition(
    this.use('crossFade', { duration: 230 }),
    this.reverse('crossFade', { duration: 230 })
  );
};
