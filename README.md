# Edwin Mburu Kamau Portfolio

A polished single-file portfolio for Edwin Mburu Kamau, designed for fast iteration in VS Code, easy customization with GitHub Copilot, and simple deployment to GitHub Pages.

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
- Hero section with Edwin Mburu Kamau's profile introduction and CTA buttons
- About section with Edwin's background across IT, cybersecurity, entrepreneurship, design, mentorship, and agriculture
- Capabilities section
- Filterable projects grid featuring SOPHIA, MITM Attack Simulation, and a custom trading bot
- Ventures section featuring SOPHIA, Urban Crew Apparel, Revhood Automotive, Brotherhood Fitness, and sustainable agriculture themes
- Workflow timeline
- Certifications section
- Testimonials and trust signals section
- Gallery section with SVG placeholders
- Contact section with GitHub, LinkedIn, and a clipboard-based contact message form
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

The core Edwin profile content has already been applied in `index.html`.

Update these remaining items when ready:

- Replace SVG placeholders with real images
- Replace `assets/cv.pdf` with Edwin's real CV
- Update project links if more specific repository URLs are available
- Add a direct email address if Edwin wants a true send-to-email contact flow

Replace placeholder assets when ready:

- `assets/avatar.svg` with your portrait image
- `assets/gallery-1.svg`, `assets/gallery-2.svg`, `assets/gallery-3.svg` with real screenshots or photos
- `assets/cv.pdf` with your actual CV
- `assets/og-cover.svg` with a custom Open Graph preview if needed

## Copilot Prompt Examples

Use prompts like these in GitHub Copilot Chat:

- `@workspace Replace the avatar placeholder in index.html with assets/avatar.jpg and update the alt text for Edwin Mburu Kamau`
- `@workspace Replace the SOPHIA project card with a more detailed case study summary and technologies used`
- `@workspace Add a new venture card for a real Edwin Kamau initiative in the ventures section`
- `@workspace Update the gallery cards in index.html to use real project images from assets/`
- `@workspace Change the color palette in index.html to a deeper midnight blue and gold theme while preserving readability`

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

- Edwin Mburu Kamau profile content reviewed
- Social links tested
- Project links refined to exact repositories where possible
- CV file replaced
- Avatar and gallery images replaced if available
- Page title updated
- Meta description updated
- Open Graph image confirmed
- Mobile layout checked
- Clipboard-based contact form tested

## Notes

- The contact form currently copies a formatted contact message to the clipboard
- The project is intentionally static for easy hosting on GitHub Pages
- There are no editor errors in the current template structure
