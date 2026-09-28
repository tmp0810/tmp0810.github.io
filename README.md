# tmp0810.github.io

Personal academic website of **Minh-Phuc Truong**, a final-year Data Science and AI student at Hanoi University of Science and Technology.

Research interests include efficient machine learning, optimal transport, representation learning, model distillation, optimization, and efficient adaptation of foundation models.

## Local development

This website uses the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

```bash
docker compose pull
docker compose up
```

Open <http://localhost:8080> to preview the site.

## Deployment

Push changes to the `main` branch. The `Deploy site` GitHub Actions workflow builds the site and publishes the generated files to `gh-pages`.

In the repository settings, configure GitHub Pages to deploy from the `gh-pages` branch.

## Content

- `_pages/`: About, Research, Publications, Experience, Awards, Blog, and CV pages
- `_projects/`: research project pages
- `_news/`: homepage news items
- `_bibliography/papers.bib`: publications and preprints
- `_data/cv.yml`: web CV
- `_data/socials.yml`: public contact and profile links
- `assets/img/`: profile and publication images
- `assets/pdf/Minh-Phuc-Truong-CV.pdf`: downloadable CV
