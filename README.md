# atiqurrahman.github.io

Personal portfolio of **MD Atiqur Rahman**. It's a static HTML/CSS/JS site with no build step.

Live: https://md-atiqur-rahman.github.io/atiqurrahman.github.io/

## Editing content
All text (bio, skills, experience, projects, education, links) lives in **`js/data.js`**. Edit that file and push.

- **Photo:** save it as `assets/img/profile.png`. If the file is missing, an "AR" initials avatar is shown instead.
- **Resume:** put a PDF at `assets/resume.pdf` and set `resume: "assets/resume.pdf"` in `data.js`.
- **LinkedIn / project links:** fill `contact.linkedin` and each project's `github` / `live` fields.

## Run locally
```bash
python -m http.server 8000
# open http://localhost:8000
```

## Deploy
GitHub Pages → Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
Every push to `main` goes live within about a minute.
