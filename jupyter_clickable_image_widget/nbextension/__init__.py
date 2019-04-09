#!/usr/bin/env python
# coding: utf-8

# Copyright (c) John Welsh
# Distributed under the terms of the Modified BSD License.

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'nbextension/static',
        'dest': 'jupyter_clickable_image_widget',
        'require': 'jupyter_clickable_image_widget/extension'
    }]
