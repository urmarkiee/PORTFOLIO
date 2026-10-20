# Mark Allen Sarmiento — Engineering Desk

A responsive, single-page Computer Engineering portfolio designed around a dark developer-desk visual direction, inspired by the structural ideas of https://www.fernando-lin.dev/ — terminal identity panel, profile scan, engineering process, project case files, public GitHub signal, and contact portal. This is a new implementation using Mark Allen's own materials, descriptions, photos, and links.

## How to open

1. Extract the ZIP archive.
2. Open `index.html` from the extracted `mark-allen-engineering-desk` folder in Chrome, Edge, or Firefox.
3. Keep `styles.css`, `script.js`, and the `assets/` folder next to `index.html`.

For best compatibility, preview through a local server (for example, VS Code Live Server), then publish to GitHub Pages.

## Site features

- Dark, Light, and Slate themes, remembered locally on the device.
- Optional, bundled calm background music with play/pause and volume control; music requires visitor interaction in most browsers.
- Sticky navigation on desktop and a touch-friendly mobile menu.
- Four project case studies with Hardware/Web/App UI filters and a full-size image viewer.
- Engineering process, real project photos, skill categories, academic background, experience, and SIP recognition.
- GitHub public repositories and followers shown *only if a live fetch succeeds*. Offline mode does not invent values.
- Contact topic controls launch the visitor's email application with a draft; they do not send messages automatically.
- Keyboard controls, reduced-motion preferences, and responsive breakpoints for mobile/tablet/desktop.

## Files

- `index.html`: Page structure and content.
- `styles.css`: Visual theme and responsive styling.
- `script.js`: Navigation, filtering, gallery, preferences, and optional GitHub metadata.
- `assets/profile.jpg`: Profile photograph.
- `assets/projects/`: Robot and MEDICARE photographs, LogiTrack screenshot, and Synced N Welcome/Login screenshots.
- `assets/documents/`: Résumé image, certificate, and MEDICARE schematic/code PDFs.
- `assets/tool-logos/`: Bundled tool icons, with their `ATTRIBUTION.txt`.
- `assets/audio/calm-instrumental.mp3`: Instrumental soundtrack.

## Synced N project contribution

Synced N — Church Ministry Management appears as CASE 04. The project highlights Mark Allen’s roles as **Frontend Developer** and **System Analyst** and includes the actual supplied welcome and sign-in screenshots. The card now details the frontend contribution, login and account-access requirements, member/admin workflows, and the two supplied screens. Both screenshots open in the full-size project image gallery.

## Deploy to GitHub Pages

Upload the contents of this folder to the root of a GitHub repository, then in Settings → Pages choose `Deploy from a branch` and select the main branch and `/ (root)` folder.

The font system has fallbacks if the optional Google Fonts stylesheet is unavailable. All project images, audio, PDFs, and icons are bundled locally; only live GitHub statistics require an internet connection.

## Mobile optimization (October 2026)

The desktop appearance has been retained. The site now has an intentionally stacked hero on smaller tablets, scaled profile photo card, mobile-friendly project cards, adjustable section headings, flexible contact layouts, scrollable project filters and tool icons, and at least 44px touch targets on primary menu controls. The ambiance panel stays within the viewport and its contents scroll on small screens. The full-screen image viewer sizes its images for narrow phone displays.

Browser layout checks were run with an inlined local build at CSS viewport widths 320, 360, 375, 390, 430, 600, 680, 700, 768, 820, 860, 920, 1024, and 1440px. No page-wide horizontal overflow or page JavaScript exceptions were observed. The mobile menu, ambiance theme, app project filter, gallery, photo switch, and tech-strip controls responded to automated interaction tests. Actual device testing is still recommended.


## Compact carousel update
The Projects section is now horizontally swipeable with previous/next arrow buttons, clickable progress dots, keyboard-arrow support (focus the project rail), category filters, and an active-card highlight. Detailed case-file information is still available in each card through **View project breakdown**.

**Synced N** is clearly marked **Under Development**, with frontend development and system analysis responsibilities retained. The site's existing image galleries, theme selector, music controls, and responsive navigation are preserved.


Update: The hero Get in touch button now scrolls directly to the NEW.INQUIRY topic selector instead of opening an email app.


## ByteQuest — Computer Studies Adventure

An Android educational game project for Computer Studies students, with beginner-friendly challenges, learning levels, quizzes, achievements, and progress tracking. The portfolio includes clickable welcome and dashboard screenshots.

## ByteQuest live website

The ByteQuest project card includes a **Visit ByteQuest Website** button that opens https://urmarkiee.github.io/ByteQuest_Web/ in a new browser tab. The welcome/dashboard image gallery remains available.
