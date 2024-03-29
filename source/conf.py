# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.

# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'BFMC - Competition Documentation'
copyright = 'Bosch Engineering Center Cluj and BFMC organizers'
author = 'Bosch Engineering Center Cluj and BFMC organizers'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx.ext.graphviz',
    'sphinx.ext.ifconfig',
    'sphinx.ext.intersphinx',
    'sphinx_copybutton',
    'sphinx_rtd_theme',
    # 'sphinx_sitemap',
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#

html_theme = 'sphinx_rtd_theme' # Best/


html_theme_options = {  'body_max_width': 'none',
                        'collapse_navigation': False,
                        'sticky_navigation': True,
                        'navigation_depth': -1,
                        'body_max_width': '90%',
                    }

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']
html_favicon = "_static/favicon.png"
html_baseurl = 'https://boschfuturemobility.com'



html_context = {
    'display_github': True,
    'github_user': 'ECC-BFMC',
    'github_repo': 'Documentation',
    'github_version': 'master/',  
}

html_css_files=['custom.css']


 
