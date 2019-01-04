'use strict';

System.register(['app/plugins/sdk', 'lodash', './renderer'], function (_export, _context) {
  "use strict";

  var PanelCtrl, _, renderer, _createClass, Mousetrap, panelDefaults, CustomizeHeaderCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_renderer) {
      renderer = _renderer.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {
        tvMode: {
          pluginPanel: false,
          dashboardTitle: false,
          actionButtons: false,
          cycleViewButton: false,
          datePicker: true,
          timeRangeZoomButton: true,
          refreshButton: true
        },
        kioskMode: {
          pluginPanel: false,
          dashboardTitle: false,
          actionButtons: false,
          cycleViewButton: false,
          datePicker: true,
          timeRangeZoomButton: true,
          refreshButton: true
        }
      };

      _export('CustomizeHeaderCtrl', CustomizeHeaderCtrl = function (_PanelCtrl) {
        _inherits(CustomizeHeaderCtrl, _PanelCtrl);

        function CustomizeHeaderCtrl($scope, $injector, $routeParams, $window, contextSrv, datasourceSrv, variableSrv) {
          _classCallCheck(this, CustomizeHeaderCtrl);

          var _this = _possibleConstructorReturn(this, (CustomizeHeaderCtrl.__proto__ || Object.getPrototypeOf(CustomizeHeaderCtrl)).call(this, $scope, $injector));

          _this.disableEscKey = false;

          _.defaults(_this.panel, panelDefaults);
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));

          $scope.$on('$locationChangeSuccess', function ($event, next, current) {
            if ($routeParams['kiosk']) {
              $window.Mousetrap.bind('esc', function () {
                console.log("Mode change by ESC key is disabled");
              });
            } else {
              $window.Mousetrap.unbind('esc');
            }
          });

          return _this;
        }

        _createClass(CustomizeHeaderCtrl, [{
          key: 'updatePanel',
          value: function updatePanel() {
            this.render();
          }
        }, {
          key: 'showNavBar',
          value: function showNavBar() {
            return this.panel.tvMode.dashboardTitle || this.panel.tvMode.actionButtons || this.panel.tvMode.cycleViewButton || this.panel.tvMode.datePicker || this.panel.tvMode.timeRangeZoomButton || this.panel.tvMode.refreshButton || this.panel.kioskMode.dashboardTitle || this.panel.kioskMode.actionButtons || this.panel.kioskMode.cycleViewButton || this.panel.kioskMode.datePicker || this.panel.kioskMode.timeRangeZoomButton || this.panel.kioskMode.refreshButton || false;
          }
        }, {
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Customize Header', 'public/plugins/grafana-customize-header/partials/editor.html', 2);
          }
        }]);

        return CustomizeHeaderCtrl;
      }(PanelCtrl));

      _export('CustomizeHeaderCtrl', CustomizeHeaderCtrl);

      CustomizeHeaderCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=customize_header_ctrl.js.map
