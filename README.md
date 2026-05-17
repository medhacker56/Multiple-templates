# Multiple Templates (Node.js + Express)

This repository contains a small Node.js + Express example demonstrating how to render the same data using multiple template engines: EJS, Pug, and Handlebars.

Files added:

- `app.js` — Main Express application that registers multiple template engines and defines routes.
- `package.json` — Project metadata and dependencies.
- `views/` — Template files for EJS, Pug, and Handlebars and a layout for Handlebars.
- `public/css/style.css` — Minimal styling served statically.
- `.gitignore` — Common ignores.

Quick start

1. Clone the repo (if you haven't already):

   git clone https://github.com/medhacker56/Multiple-templates.git
   cd Multiple-templates

2. Install dependencies:

   npm install

3. Run the app:

   npm start

4. Open a browser:

   - http://localhost:3000/        (index listing the examples)
   - http://localhost:3000/ejs     (EJS template)
   - http://localhost:3000/pug     (Pug template)
   - http://localhost:3000/hbs     (Handlebars template)

Notes

- The app registers engines for `.ejs`, `.pug`, and `.hbs` extensions and renders templates by specifying the filename including its extension. Handlebars uses a layout located at `views/layouts/main.hbs`.
- If your repository default branch is not `main`, you may need to adjust the branch when pushing or merging.

License

MIT
