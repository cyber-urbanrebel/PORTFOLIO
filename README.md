# Portfolio Website

A polished single-file portfolio designed for fast iteration in VS Code, easy customization with GitHub Copilot, and simple deployment to GitHub Pages.

## Project Structure

```text
PORTFOLIO/
├── index.html
├── README.md
├── .gitignore
└── assets/
	├── avatar.svg
	├── cv.pdf
	├── gallery-1.svg
	├── gallery-2.svg
	├── gallery-3.svg
	└── og-cover.svg
```

## What Is Included

- A complete portfolio in `index.html` with HTML, CSS, and JavaScript in one file
- Hero section with CTA buttons
- About section with avatar placeholder
- Capabilities section
- Filterable projects grid
- Ventures section
- Workflow timeline
- Certifications section
- Testimonials section
- Gallery section with SVG placeholders
- Contact section with social links and mailto form
- GitHub Pages friendly structure

## Local Setup in VS Code

### 1. Open the folder

Open this folder in VS Code:

- `C:/Users/USER/OneDrive/PORTFOLIO`

### 2. Recommended extensions

Install these VS Code extensions:

- GitHub Copilot
- GitHub Copilot Chat
- Live Server
- Prettier
- HTML CSS Support

### 3. Preview locally

- Right-click `index.html`
- Choose `Open with Live Server`
- Your browser should open a local preview automatically

## Personalization Checklist

Update these placeholders in `index.html`:

- `Your Name`
- `SOPHIA`
- `YN`
- `YOUR_USERNAME`
- `YOUR_HANDLE`
- `hello@example.com`

Replace placeholder assets when ready:

- `assets/avatar.svg` with your portrait image
- `assets/gallery-1.svg`, `assets/gallery-2.svg`, `assets/gallery-3.svg` with real screenshots or photos
- `assets/cv.pdf` with your actual CV
- `assets/og-cover.svg` with a custom Open Graph preview if needed

## Copilot Prompt Examples

Use prompts like these in GitHub Copilot Chat:

- `@workspace Replace all instances of "Your Name" with Marcus Kamau in index.html`
- `@workspace Update the nav logo text "SOPHIA" to MK in index.html`
- `@workspace Add a new project card to #projects-grid in index.html with category="dev" and name="Security Dashboard"`
- `@workspace Replace the about avatar image with assets/avatar.jpg and update the alt text`
- `@workspace Update the CSS color palette in index.html to use a midnight blue and gold theme`

## Git Setup

Run these commands from the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio build"
```

## Deploy to GitHub Pages

### 1. Create a repository

Create a new public repository named:

- `YOUR_USERNAME.github.io`

### 2. Push the project

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

### 3. Enable Pages

In GitHub:

- Open the repository
- Go to `Settings`
- Open `Pages`
- Set source to `Deploy from a branch`
- Select `main` and `/ (root)`

Your site will go live at:

- `https://YOUR_USERNAME.github.io`

## Quality Checklist Before Going Live

- Real name added
- Social links updated
- Project links tested
- CV file replaced
- Contact email updated
- Page title updated
- Meta description updated
- Open Graph image confirmed
- Mobile layout checked
- No leftover placeholders remain

## Notes

- The contact form uses `mailto:` to open the user’s email app
- The project is intentionally static for easy hosting on GitHub Pages
- There are no editor errors in the current template structure
