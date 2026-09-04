# Portfolio Website Structure

## Main files

- `index.html` — home page
- `projects.html` — automatically lists all projects from `projects-data.js`
- `project.html` — one reusable project detail page
- `projects-data.js` — project database/content
- `style.css` — your existing main stylesheet

## Project folders

Each project has its own folder:

projects/
  project-01-kitchen-cabinet/
    images/
    documents/

## Adding a future project

1. Create a new folder under `projects/`.
2. Create `images/` and `documents/` inside it.
3. Add the cover and project images.
4. Add project-specific PDFs/ZIP files.
5. Open `projects-data.js`.
6. Copy the commented future-project object.
7. Change the project ID, title, descriptions, image paths and document paths.
8. Commit and push to GitHub.

You do NOT need to create a new HTML page for every project.

The same `project.html` automatically displays whichever project ID is selected.

## Important

Keep file names and paths exactly consistent. GitHub Pages is case-sensitive.

Current project document paths:

projects/project-01-kitchen-cabinet/documents/
- 01_Cabinet_Production_Workbook.pdf
- 02_MDF_Cutting_Plan.pdf
- 03_Nanxing_Panel_Saw_Input_Files.zip
- Kitchen_Cabinet_Project_Case_Study.pdf

General guide:

documents/Cabinet_Documentation_Guide.pdf
