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

## ByteQuest developer role and live website

**My role:** Android Game Developer and Website Developer, credited as **MR.DEV**. Responsibilities represented in the portfolio include the Android learning-game interface, quizzes and levels, dashboard, and companion website. The project card and Recent Work section both display this role.


The ByteQuest project card includes an **Open ByteQuest Website** button that opens https://urmarkiee.github.io/ByteQuest_Web/ in a new browser tab. The welcome/dashboard image gallery remains available.

## October 2026 — Recent work refresh

The updated portfolio now includes a **Recent Work / 2026** section with concise cards, expandable development details, and direct project links. The original **five** featured projects and their horizontal, swipeable carousel remain in place; CHENTER is intentionally **not** included among the portfolio projects.

### 1. ByteQuest — Computer Studies Adventure

- Android educational puzzle/quiz game, presented under the **MR.DEV** developer credit.
- Seven Computer Studies subjects with 50 questions per subject, **350 practice questions** total; **40 core puzzles** are described on the public project website.
- Beginner-oriented lessons, binary and digital-logic challenges, quizzes, XP, progress tracking, and achievements.
- Companion GitHub Pages site: https://urmarkiee.github.io/ByteQuest_Web/
- The public site is live and links to Android release information. A published website does not itself confirm that a particular APK is available at all times.

### 2. Synced N — Church Ministry Management

- **Status: Under Development.** Roles: **Frontend Developer** and **System Analyst**.
- Member/admin-leader workflows, welcome/sign-in screens, announcements, songs, and team coordination.
- Lyrics/chords display with transpose, vocalist/instrumentalist views, metronome, adjustable auto-scroll speed 1–10, Start/Pause, font limits, and pasted-sheet arrangement.
- UI and navigation refinements are ongoing; device/build testing is not claimed complete.

### 3. LogiTrack 1.0 — Logistics Tracking

- Published responsive website: https://urmarkiee.github.io/LogiTrack1.0/
- Shipment lookup, delivery milestones, last-reported location, and customer-facing tracking interface.
- Broader Supabase-backed development covers administrator, customer, and courier roles; authentication, shipment history, courier approvals, dashboards, and location sharing.
- **Important:** Some of the broader platform features are ongoing work. The published site describes *reported* coordinates, not independent GPS tracking of a parcel.

### 4. MEDICARE — Medicine Reminder

- ESP32 controller with six configurable reminders, DS3231 RTC, I²C LCD, servo-controlled tray, IR sensor, buzzer/LED alerts, and RF-linked notification receiver.
- Project schematic and code documents remain included in `assets/documents/`.

### 5. Smart Obstacle-Avoiding Robot

- Arduino Uno, ultrasonic sensing, motor driver, servo, and robotic chassis for obstacle response.

### Other site changes

- Expanded each existing project breakdown with technical specifics, recent contributions, and clear status wording.
- Updated the hero, technical skills, and experience timeline to reflect recent Android, web, cloud, and embedded development.
- Added an **Updates** link to desktop/mobile navigation and a **Recent work** footer link.
- Preserved compact design, theme/music settings, mobile navigation, image gallery, portrait switching, existing contact behavior, and NEW.INQUIRY anchor.

The project descriptions are based on user-supplied project history and the two published project sites. Work-in-progress items are explicitly labeled rather than described as fully deployed.
