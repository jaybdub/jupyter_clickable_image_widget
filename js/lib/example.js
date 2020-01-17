var widgets = require('@jupyter-widgets/base');
var ipywidgets = require("@jupyter-widgets/controls");
var _ = require('lodash');


var ClickableImageModel = ipywidgets.ImageModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'ClickableImageModel',
        _view_name : 'ClickableImageView',
        _model_module : 'jupyter_clickable_image_widget',
        _view_module : 'jupyter_clickable_image_widget',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
    })
});


var ClickableImageView = ipywidgets.ImageView.extend({
    events: function() {
        return {'click': '_handle_click'}
    },
    
    _handle_click: function(event) {
        event.preventDefault()
        console.log(event)
        console.log(event.srcElement.width)
        this.send({
            event: 'click',
            eventData: {
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey,
                offsetX: event.offsetX,
                offsetY: event.offsetY,
                width: event.srcElement.width,
                height: event.srcElement.height,
                naturalWidth: event.srcElement.naturalWidth,
                naturalHeight: event.srcElement.naturalHeight,
            }
        });
    }
    
});


module.exports = {
    ClickableImageModel: ClickableImageModel,
    ClickableImageView: ClickableImageView
};
