
# jupyter_clickable_image_widget

[![Build Status](https://travis-ci.org/jaybdub/jupyter_clickable_image_widget.svg?branch=master)](https://travis-ci.org/jaybdub/jupyter_clickable_image_widget)
[![codecov](https://codecov.io/gh/jaybdub/jupyter_clickable_image_widget/branch/master/graph/badge.svg)](https://codecov.io/gh/jaybdub/jupyter_clickable_image_widget)


A clickable image widget for Jupyter.

## Installation

You can install using `pip`:

```bash
pip install jupyter_clickable_image_widget
```

Or if you use jupyterlab:

```bash
pip install jupyter_clickable_image_widget
jupyter labextension install @jupyter-widgets/jupyterlab-manager
```

If you are using Jupyter Notebook 5.2 or earlier, you may also need to enable
the nbextension:
```bash
jupyter nbextension enable --py [--sys-prefix|--user|--system] jupyter_clickable_image_widget
```
