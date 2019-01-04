import { PanelCtrl } from 'app/plugins/sdk';
import _ from 'lodash';

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
  },
  disableEscInKioskMode: true
}
export class CustomizeHeaderCtrl extends PanelCtrl {
  static templateUrl = 'module.html';

  constructor($scope, $injector, $routeParams, $window, contextSrv, datasourceSrv, variableSrv) {
    super($scope, $injector);
    _.defaults(this.panel, panelDefaults);
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    var currentPanel = this.panel;
    $scope.$on('$locationChangeSuccess', function($event, next, current) { 
      if ($routeParams['kiosk'] && currentPanel.disableEscInKioskMode){
        $window.Mousetrap.bind('esc', function() { 
          console.log("Mode change by ESC key is disabled in panel settings"); 
        });
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
}
