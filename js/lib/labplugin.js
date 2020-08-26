var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter_clickable_image_widget',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter_clickable_image_widget',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

