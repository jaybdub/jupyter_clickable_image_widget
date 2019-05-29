// Copyright (c) John Welsh
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel, DOMWidgetView, ISerializers
} from '@jupyter-widgets/base';

// import {
//   ImageModel, ImageView
// } from '@jupyter-widgets/controls';

import {
  MODULE_NAME, MODULE_VERSION
} from './version';


import * as _ from 'underscore';

// CLICKABLE IMAGE WIDGET

export
class ClickableImageModel extends DOMWidgetModel {
    defaults() {
        return _.extend(super.defaults(), {
            _model_name: 'ClickableImageModel',
            _model_module: MODULE_NAME,
            _model_module_version: MODULE_VERSION,
            _view_name: 'ClickableImageView',
            _view_module: MODULE_NAME,
            _view_module_version: MODULE_VERSION,
            format: 'png',
            width: '',
            height: '',
            value: new DataView(new ArrayBuffer(0))
        });
    }

    static serializers: ISerializers = {
        ...DOMWidgetModel.serializers,
        value: {serialize: (value, manager) => {
            return new DataView(value.buffer.slice(0));
        }}
    };
}

export
class ClickableImageView extends DOMWidgetView {
    render() {
        /**
         * Called when view is rendered.
         */
        super.render();
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-image');
        this.update(); // Set defaults.
        console.log('sanity test!')
    }

    update() {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */

        let url;
        let format = this.model.get('format');
        let value = this.model.get('value');
        if (format !== 'url') {
            let blob = new Blob([value], {type: `image/${this.model.get('format')}`});
            url = URL.createObjectURL(blob);
        } else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }

        // Clean up the old objectURL
        let oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        let width = this.model.get('width');
        if (width !== undefined && width.length > 0) {
            this.el.setAttribute('width', width);
        } else {
            this.el.removeAttribute('width');
        }

        let height = this.model.get('height');
        if (height !== undefined && height.length > 0) {
            this.el.setAttribute('height', height);
        } else {
            this.el.removeAttribute('height');
        }
        return super.update();
    }

    remove() {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        super.remove();
    }

    
    events(): {[e: string]: string} {
        return {'click': '_handle_click'}
    }
    
    _handle_click(event: any) {
        event.preventDefault()
        console.log(event)
    }
    
    /**
     * The default tag name.
     *
     * #### Notes
     * This is a read-only attribute.
     */
    get tagName() {
        // We can't make this an attribute with a default value
        // since it would be set after it is needed in the
        // constructor.
        return 'img';
    }


    el!: HTMLImageElement;
}

// EXAMPLE WIDGET

// export
// class ExampleModel extends DOMWidgetModel {
//   defaults() {
//     return {...super.defaults(),
//       _model_name: 'ExampleModel',
//       _model_module: MODULE_NAME,
//       _model_module_version: MODULE_VERSION,
//       _view_name: 'ExampleView',
//       _view_module: MODULE_NAME,
//       _view_module_version: MODULE_VERSION,
//       value : 'Hello World'
//     };
//   }

//   static serializers: ISerializers = {
//       ...DOMWidgetModel.serializers,
//       // Add any extra serializers here
//     }

// //   static model_name = 'ExampleModel';
// //   static model_module = MODULE_NAME;
// //   static model_module_version = MODULE_VERSION;
// //   static view_name = 'ExampleView';   // Set to null if no view
// //   static view_module = MODULE_NAME;   // Set to null if no view
// //   static view_module_version = MODULE_VERSION;
// }


// export
// class ExampleView extends DOMWidgetView {
//   render() {
//     this.value_changed();
//     this.model.on('change:value', this.value_changed, this);
//   }

//   value_changed() {
//     this.el.textContent = this.model.get('value');
//   }
// }
