# Jupyter Clickable Image Widget

This repository contains an image widget (much like the ipywidgets.Image), but will send messages when the image is clicked.

# Setup

To install the widget type the following in a terminal

```bash
sudo pip3 install jupyter jupyterlab
sudo apt-get install nodejs-dev node-gyp libssl1.0-dev
sudo apt-get install npm
jupyter labextension install @jupyter-widgets/jupyterlab-manager
git clone https://github.com/jaybdub/jupyter_clickable_image_widget
cd jupyter_clickable_image_widget
sudo pip3 install -e .
jupyter labextension install js
```

# Usage

```python
from jupyter_clickable_image_widget import ClickableImageWidget


image_widget = ClickableImageWidget()

def on_message(_, content, ignore):
    if content['event'] == 'click':
        data = content['eventData']
        alt_key = data['altKey']
        ctrl_key = data['ctrlKey']
        shift_key = data['shiftKey']
        x = data['offsetX']
        y = data['offsetY']
        
        # do something...
        
image_widget.on_msg(on_message)
```
