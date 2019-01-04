import { PanelCtrl } from 'app/plugins/sdk';
import _ from 'lodash';
import renderer from './renderer';

var Mousetrap;

const panelDefaults = {
  tvMode : {
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
}
export class CustomizeHeaderCtrl extends PanelCtrl {
  static templateUrl = 'module.html';
  disableEscKey = false;

  constructor($scope, $injector, $routeParams, $window, contextSrv, datasourceSrv, variableSrv) {
    super($scope, $injector);
    _.defaults(this.panel, panelDefaults);
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    
    $scope.$on('$locationChangeSuccess', function($event, next, current) { 
      if($routeParams['kiosk']){
        $window.Mousetrap.bind('esc', function() { 
          console.log("Mode change by ESC key is disabled"); 
        });
      }else {
        $window.Mousetrap.unbind('esc');
      }
    });

    
  }

  updatePanel() {
    this.render();
  }

  showNavBar() {
    return this.panel.tvMode.dashboardTitle || this.panel.tvMode.actionButtons || this.panel.tvMode.cycleViewButton ||
    this.panel.tvMode.datePicker || this.panel.tvMode.timeRangeZoomButton || this.panel.tvMode.refreshButton ||
    this.panel.kioskMode.dashboardTitle || this.panel.kioskMode.actionButtons || this.panel.kioskMode.cycleViewButton ||
    this.panel.kioskMode.datePicker || this.panel.kioskMode.timeRangeZoomButton || this.panel.kioskMode.refreshButton || false;
          
  }

  onInitEditMode() {
    this.addEditorTab('Customize Header', 'public/plugins/grafana-customize-header/partials/editor.html', 2);
  }

  // /* eslint class-methods-use-this: 0 */
  // link(scope, elem, attrs, ctrl) {
  //   renderer(scope, elem, attrs, ctrl);
  // }
}