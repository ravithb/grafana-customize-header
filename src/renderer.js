export default function link(scope, elem, attrs, ctrl) {
  ctrl.events.on('render', () => {
    console.log('onRender called')
    render();
    ctrl.renderingCompleted();
  });

  function render() {
    console.log('render called');
  }
}
