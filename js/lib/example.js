import { DOMWidgetModel, DOMWidgetView } from '@jupyter-widgets/base';
var ipywidgets = require("@jupyter-widgets/controls");

// See example.py for the kernel counterpart to this file.

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be serialized.

export class ClickableImageModel extends ipywidgets.ImageModel{
    defaults() {
        return {
            ...super.defaults(),
            _model_name : 'ClickableImageModel',
            _view_name : 'ClickableImageView',
            _model_module : 'jupyter_clickable_image_widget',
            _view_module : 'jupyter_clickable_image_widget',
            _model_module_version : '0.1.0',
            _view_module_version : '0.1.0',
        };
    }
}

export class ClickableImageView extends ipywidgets.ImageView {
    initialize(parameters) {
        super.initialize(parameters);
    }
    events() {
        return {
            'click': '_handle_click'
        };
    }
    _handle_click(event) {
        event.preventDefault();
        console.log(event);
        console.log(event.offsetX);
        this.send({
            event: 'click',
            eventData: {
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey,
                offsetX: event.offsetX,
                offsetY: event.offsetY,
                width: event.target.width,
                height: event.target.height,
                naturalWidth: event.target.naturalWidth,
                naturalHeight: event.target.naturalHeight,
            }
        });
    }
}
