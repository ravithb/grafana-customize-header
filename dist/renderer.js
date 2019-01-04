'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function link(scope, elem, attrs, ctrl) {
    ctrl.events.on('render', function () {
      console.log('onRender called');
      render();
      ctrl.renderingCompleted();
    });

    function render() {
      console.log('render called');
    }
  }

  _export('default', link);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=renderer.js.map
