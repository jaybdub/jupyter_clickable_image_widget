# Jupyter Clickable Image Widget

This repository contains an image widget (much like the ipywidgets.Image), but will send messages when the image is clicked.

# Setup

To install the widget type the following in a terminal

```bash
sudo npm install -g typescript
git clone https://github.com/jaybdub/jupyter_clickable_image_widget
cd jupyter_clickable_image_widget
sudo python3 setup.py build
sudo npm run build
sudo pip3 install .
sudo jupyter labextension install .
sudo jupyter labextension install @jupyter-widgets/jupyterlab-manager
```

# Usage

```python
from jupyter_clickable_image_widget import ClickableImageWidget


image_widget = ClickableImageWidget()

def on_message(_, content, _):
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
