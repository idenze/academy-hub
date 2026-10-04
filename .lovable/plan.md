# Ozikoro Academy front-end

## Goal
Build a cohesive Academy experience based on the existing Ozikoro design and the uploaded brief. The first release will present the complete learner journey without adding a database or live accounts.

## Pages
- **Academy home:** scholarly introduction, featured courses and programmes, learning journey, instructors, resources, and Onye Ozi entry.
- **Courses:** searchable, filterable catalogue with subject, level, format, and duration controls.
- **Course detail:** outcomes, prerequisites, syllabus, instructor, assessment, certificate, and enrol action.
- **Programmes:** pathway overview with sequenced courses and completion expectations.
- **Lesson:** focused reading experience with media, references, bookmarks, progress, and completion controls.
- **Assessment:** calm practice and quiz interface with clear feedback.
- **My Learning:** current courses, resume point, progress, results, and certificates.
- **Instructors:** directory and profile presentation.
- **Resources:** links to Ozituma Dictionary, Ńdébé Script, Type Ńdébé, and Ozikoro Archive without duplicating their tools.
- **Onye Ozi:** restrained academic assistant interface grounded in approved course material.
- **Certificates, search, and account screens:** complete supporting states for the learning journey.

## Visual direction
- Preserve Ozikoro’s editorial serif/sans typography, warm gold accents, deep charcoal-green surfaces, archival imagery, sharp rules, and generous whitespace.
- Shift the visual emphasis from archive discovery to structured learning: course progress, syllabi, reading, practice, assessment, and credentials.
- Keep the interface mature and restrained; no XP, streaks, leaderboards, childish badges, marketplace elements, or dashboard clutter.
- Build responsive desktop, tablet, and mobile layouts with accessible navigation and controls.

## Technical details
- Use TanStack routes for every shareable Academy destination and unique page metadata for each.
- Add a shared Academy header/footer and reusable course, progress, syllabus, and resource patterns.
- Use local/generated imagery and semantic design tokens in the global stylesheet.
- Keep interactions front-end only with representative content and UI states; enrolment, accounts, saved progress, certificates, search, and Onye Ozi will be demonstrations until a connected backend is requested.
- Validate the principal discover → enrol → learn → practise → assess → complete → certificate flow in the running preview.
