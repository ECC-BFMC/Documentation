# BFMC Documentation

[![Documentation CI and Deploy](https://github.com/ECC-BFMC/Documentation/actions/workflows/docs-deploy.yml/badge.svg?branch=main)](https://github.com/ECC-BFMC/Documentation/actions/workflows/docs-deploy.yml)

Source files for the Bosch Future Mobility Challenge competition documentation.

- Documentation: [documentation.boschfuturemobility.com](https://documentation.boschfuturemobility.com/)
- Competition website: [boschfuturemobility.com](https://boschfuturemobility.com/)

## Local Setup

Create a Python environment and install the Sphinx dependencies:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

On Linux or macOS, activate the environment with:

```bash
source .venv/bin/activate
```

## Build The Documentation

Build the HTML site locally with the same strict checks used in CI:

```bash
sphinx-build -n -W --keep-going -b html source build/html
```

The generated site is written to `build/html/index.html`.

## Deployment

Pushes to `main` run the GitHub Actions workflow in
`.github/workflows/docs-deploy.yml`. The workflow validates a clean Sphinx HTML
build and, only after it succeeds, triggers a Render deployment.

Configure the repository Actions secret `RENDER_DEPLOY_HOOK_URL` with the
Render deploy hook URL for the documentation service.
