# UI/UX Evaluation Report: KattoJSX Portfolio

Evaluation date: May 10, 2026  
Evaluated system: KattoJSX personal portfolio web app  
Reference material: `Lesson-3-Evaluation-Techniques.pdf`

## 1. Executive Summary

The KattoJSX portfolio presents a strong creative identity through bold typography, orange-black branding, motion design, a 3D hero/logo experience, project previews, certification modals, marquee galleries, and a floating navigation bar. It successfully communicates that Catherine Arnado is both a developer and visual designer.

From an HCI perspective, the portfolio is visually memorable but currently prioritizes visual spectacle over usability efficiency. The main issues are discoverability, accessibility, motion control, information hierarchy, and consistency of navigation. These do not make the site unusable, but they may reduce task completion speed for recruiters, instructors, clients, or visitors who want to quickly inspect projects, credentials, and contact options.

Overall rating: 7.4 / 10

High-level judgment:

- Strengths: strong branding, engaging hero, rich media, clear personal style, multiple proof-of-work sections, responsive intent, strong use of visual assets.
- Main risks: long animated welcome screen, hidden or delayed content, motion overload, bottom navigation missing some major sections, hover-dependent interactions, unclear external links, weak accessibility affordances.
- Priority fix: make the portfolio easier to scan and navigate without reducing its creative personality.

## 2. Evaluation Basis from the PDF

The PDF describes evaluation as a way to assess system functionality, usability, interface effect on users, and problems related to functionality and usability. This report applies the following techniques:

1. Cognitive walkthrough: evaluating whether users can complete realistic tasks step by step.
2. Heuristic evaluation: checking the interface against general usability principles.
3. Review-based expert evaluation: applying HCI and UI/UX design judgment to identify issues that may not be obvious to the designer.
4. User participation recommendations: proposing empirical, observational, query-based, and monitoring methods for future validation.

This is primarily an expert evaluation, not a full empirical user study.

## 3. Interface and Element Inventory

Observed portfolio elements:

- Welcome screen with animated laser/grid effects, logo card, sound effect, and loading bar.
- Hero section with abstract background, large name typography, CV download, booking link, SMM portfolio link, and GitHub link.
- Fixed 3D logo scene and top theme toggle.
- Floating bottom navigation with icons and active-section highlighting.
- Personal information section with profile image and bento-style skill/tool/language cards.
- Professional experience timeline with scroll-based progress and animated cards.
- Selected works section with hover-based image preview.
- Visual portfolio section with animated marquee rows and lightbox preview.
- Certifications section with selectable list, card-swap animation, and modal.
- Educational tour and journal sections.
- Footer.

The interface is visually rich and suitable for a creative-developer portfolio, but several elements depend heavily on hover, motion, and visual memory.

## 4. Cognitive Walkthrough

### Task 1: "I want to know who this person is and what they do."

Expected user goal: quickly understand identity, role, and credibility.

Findings:

- The hero communicates the name clearly with very strong visual emphasis.
- "A CREATIVE FULL STACK DEV" gives role information, but it is broad and could be more specific.
- The welcome screen delays access to the actual portfolio by around 6 seconds unless clicked.
- The animated intro strengthens brand impact but may slow down first-time visitors who are task-focused.

Assessment:

- Will users see the action available? Partially. The welcome screen is clickable, but there is no explicit "skip" label.
- Will users understand feedback? Yes, the loading bar implies progress.
- Issue severity: Medium.

Recommendation:

- Add a visible "Skip intro" or "Enter portfolio" control.
- Reduce default intro duration to 2 to 3 seconds or remember returning visitors.
- Refine the role text into something clearer, such as "Full-stack developer and visual designer."

### Task 2: "I want to view projects and understand the quality of work."

Expected user goal: inspect selected projects and judge skill level.

Findings:

- The selected works section contains strong project titles, years, tags, and preview images.
- The preview interaction depends heavily on hover, which is weaker on touch devices.
- Some project labels combine multiple categories, such as web design, full stack, branding, and algorithm visualization. This shows range but can make evaluation less direct.
- The section does not clearly expose case study details, project links, problem statements, process, or outcomes.

Assessment:

- Will users see that project preview is available? On desktop, likely yes through hover behavior. On mobile, less clear.
- After action, will feedback be understandable? Yes, image preview changes are clear.
- Issue severity: High for portfolio conversion, because project evidence is the core goal.

Recommendation:

- Add click/tap behavior that opens a project detail modal or case-study page.
- Include problem, role, tools, contribution, screenshots, and outcome for each major project.
- Add direct links for live demo, repository, or prototype where available.

### Task 3: "I want to download the CV or contact/book a call."

Expected user goal: take action quickly.

Findings:

- Primary calls to action are visible in the hero.
- Download CV and Book a Call are familiar and clear.
- GitHub is icon-only, which is acceptable for many tech audiences, but should still have an accessible label.
- The SMM button label is short and may be unclear to users who do not know the abbreviation.

Assessment:

- Will users see the action? Yes.
- Will users know it is the one they need? Mostly.
- Issue severity: Low to Medium.

Recommendation:

- Use "SMM Portfolio" instead of only "(SMM)".
- Ensure icon-only GitHub has an accessible name.
- Keep the CTAs visible and consider repeating contact options near the footer.

### Task 4: "I want to verify certificates."

Expected user goal: inspect credentials.

Findings:

- Certifications are presented with a list, animated card swap, and modal.
- The modal includes a "Verify Credential" button, but the current implementation does not appear to connect each certificate to an actual verification URL.
- The visual design makes certificates feel important, but the interaction promise is stronger than the functionality.

Assessment:

- Will users understand the feedback? Yes, modal opening is clear.
- Is the effect the same as the user's goal? Partially. Viewing works, verifying may not.
- Issue severity: Medium.

Recommendation:

- Add real verification links per certificate or remove/disable the button when unavailable.
- Add issuer/context metadata for each certificate.

## 5. Heuristic Evaluation

Severity scale:

- 0: Not an issue
- 1: Cosmetic
- 2: Minor usability issue
- 3: Major usability issue
- 4: Critical issue

| Heuristic | Rating | Findings | Recommendation |
|---|---:|---|---|
| Visibility of system status | 2 | Welcome screen has a loading bar, active nav state exists, and modals provide visual feedback. However, external links and media loading states are not consistently communicated. | Add loading states for heavy galleries/videos and visible labels for external-link actions. |
| Match between system and real world | 2 | Terms like Download CV and Book a Call are clear. "SMM" and some project categories may be unclear to general audiences. | Replace abbreviations or explain them through labels. |
| User control and freedom | 3 | Welcome screen can be clicked away, but no explicit skip control. Modals can close. Motion, sound, and auto-moving marquees do not expose user controls. | Add skip intro, reduce motion support, pause controls, and clear close buttons. |
| Consistency and standards | 3 | Visual style is consistent, but navigation only includes some sections while others like Experience, Works, and Visual Portfolio are not in the bottom nav. Theme toggle appears in both top header and bottom nav. | Align nav with the full information architecture and avoid duplicate controls unless intentionally differentiated. |
| Error prevention | 2 | Basic links exist, but external actions and verification affordances may create expectation mismatch. Audio playback errors are silently ignored, which is fine technically but not meaningful to the user. | Add accurate labels and disable unavailable actions. |
| Recognition rather than recall | 3 | The bottom nav uses icons, but inactive item labels are hidden on mobile and only appear on hover on desktop. Visitors must remember what each icon means. | Show short labels or provide a compact menu that lists all sections. |
| Flexibility and efficiency | 2 | Smooth scrolling and section nav help movement, but the long intro and animation-heavy sections slow fast scanning. | Provide quick navigation to Projects, CV, Contact, and Certifications. |
| Aesthetic and minimalist design | 3 | The site has strong personality, but there are many competing effects: 3D logo, cursor, intro, animated backgrounds, grids, marquees, card swaps, hover previews, and sound. | Keep signature motion but reduce simultaneous effects per viewport. |
| Help users recover from errors | 2 | Not many error-prone tasks exist, but broken/missing verification URLs or media failures would lack clear fallback. | Add fallbacks for missing images, unavailable videos, and inactive verification. |
| Accessibility and inclusive design | 3 | Motion, custom cursor, hover-dependent previews, sound, low-contrast overlays, and icon-only controls can affect users with motor, visual, or vestibular needs. | Add keyboard focus states, aria labels, reduced-motion handling, text alternatives, and non-hover alternatives. |

Most important heuristic issues:

1. Navigation does not represent all major sections.
2. Too many interactions rely on hover and motion.
3. The welcome screen delays task completion.
4. Accessibility support needs more explicit handling.

## 6. Review-Based Expert Evaluation

### Visual hierarchy

The hero has excellent visual dominance. The name is memorable, and the orange accent creates a clear identity. However, later sections sometimes compete with each other because many components use large headings, strong motion, oversized cards, and animated backgrounds. The result is expressive but occasionally tiring.

Recommendation:

- Keep the hero as the strongest moment.
- Make project and credential sections more information-dense and less decorative.
- Use smaller headings for subsections inside the visual portfolio.

### Layout and spacing

The site uses generous spacing and section separation, which helps the portfolio feel premium. The bottom nav is distinctive and ergonomic on desktop. On mobile, it risks crowding because the active item expands with text while other items remain icon-only.

Recommendation:

- Test the bottom nav on 360px to 430px widths.
- Consider a compact mobile menu with labeled destinations.
- Include all key sections: Home, About, Experience, Works, Visuals, Certifications, Tour, Journal, Contact.

### Color and contrast

The orange, black, and off-white palette is cohesive and brandable. Some overlays and glass elements may reduce readability, especially on image-heavy sections. The experience timeline has bright orange grid backgrounds that may compete with text cards.

Recommendation:

- Audit contrast for overlays, badges, and muted text.
- Reduce grid opacity behind experience content.
- Avoid placing important text over busy images without stronger contrast treatment.

### Motion and interaction design

Motion is a major part of the identity, but there is motion in nearly every major section. This can create high cognitive load and may affect users who prefer reduced motion. Sound on hover/click can also feel surprising in a professional portfolio context.

Recommendation:

- Respect `prefers-reduced-motion`.
- Disable sound by default or add a sound toggle.
- Slow or pause marquees on focus/hover and provide manual browsing.
- Avoid relying on parallax text movement for core hero readability.

### Content strategy

The portfolio shows many artifacts, but the strongest professional value would come from clearer case-study storytelling. Recruiters and clients usually need to know the problem, role, process, tools, result, and links.

Recommendation:

- Convert top 3 to 5 selected works into case studies.
- Add short outcome statements, such as "Built voting workflow," "Designed mobile prototype," or "Improved brand consistency."
- Separate development projects from graphic design work so visitors can evaluate the intended skill area faster.

## 7. User Participation Evaluation Plan

The PDF emphasizes that user participation can reveal problems that expert evaluation may miss. The following tests are recommended.

### Empirical method

Hypothesis:

Users can find a project, inspect a certificate, and contact Catherine within 2 minutes without guidance.

Participants:

- 3 classmates
- 2 instructors
- 2 target users such as recruiters, clients, or organization officers

Independent variables:

- Current version vs revised version with shorter intro and clearer navigation.

Dependent variables:

- Time to find projects
- Time to download CV
- Number of wrong clicks
- Completion rate
- Satisfaction rating from 1 to 5

### Observational technique: think aloud

Tasks:

1. Find Catherine's main development projects.
2. Open a certificate and verify whether it is credible.
3. Find a way to contact or book Catherine.
4. Find visual design work such as logos or pubmats.

Observe:

- Confusion caused by intro screen
- Whether users understand icons
- Whether users discover hover previews
- Whether users understand SMM
- Whether users can navigate back after opening modals or external links

### Query technique: questionnaire

Suggested questions:

- What do you think Catherine specializes in after viewing the homepage?
- Which section helped you trust her skills the most?
- Was anything distracting or hard to control?
- Rate ease of navigation from 1 to 5.
- Rate visual appeal from 1 to 5.
- Rate clarity of project information from 1 to 5.
- What information did you expect but could not find?

### Physiological monitoring

This is optional and not necessary for a class portfolio evaluation unless equipment is available. If used, eye tracking could help identify whether users focus on the hero CTA, bottom nav, project images, or animated background instead of important content.

## 8. Priority Recommendations

### High priority

1. Add a clear skip/enter control to the welcome screen and reduce the intro duration.
2. Add all major sections to navigation or provide a labeled mobile menu.
3. Make project cards clickable/tappable and add case-study details.
4. Add reduced-motion support for parallax, marquees, card swap, cursor, and background effects.
5. Add accessible labels for icon-only buttons and stronger keyboard focus states.

### Medium priority

1. Rename "(SMM)" to "SMM Portfolio" or "Social Media Portfolio."
2. Add real verification URLs for certificates or remove the verify button.
3. Provide pause/manual controls for marquee galleries.
4. Reduce visual competition in the experience timeline background.
5. Repeat contact actions in the footer.

### Low priority

1. Add fallback text for missing images/videos.
2. Standardize card radius and overlay treatment across sections.
3. Clarify project categories and tags.
4. Add captions to visual portfolio items.

## 9. Suggested Success Criteria

After revisions, the portfolio should meet these measurable goals:

- 90% of test users can find projects within 20 seconds after entering the site.
- 90% can find CV download and contact options within 15 seconds.
- 80% can explain Catherine's primary role after viewing the hero.
- 80% can open a project or certificate without instruction.
- Average navigation clarity rating is at least 4 out of 5.
- No core content depends on hover only.
- Site remains usable when reduced-motion mode is enabled.

## 10. Conclusion

The portfolio is visually distinctive and communicates creative confidence. It is strongest as a personal brand experience and visual showcase. Its main design challenge is converting that strong visual identity into faster, clearer, more accessible task completion.

Using the evaluation techniques from the HCI lesson, the recommended direction is not to remove the creative effects, but to make them serve the user's goals more deliberately. The portfolio should preserve its expressive character while improving navigation, accessibility, motion control, project evidence, and clarity of action.
