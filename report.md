# UI/UX Evaluation Report: KattoJSX Portfolio

Evaluation date: May 10, 2026  
Updated after implementation changes: May 10, 2026  
Evaluated system: KattoJSX personal portfolio web app  
Reference material: `Lesson-3-Evaluation-Techniques.pdf`

## 1. Executive Summary

The KattoJSX portfolio presents a strong creative identity through bold typography, orange-black branding, motion design, a 3D hero/logo experience, project previews, certification modals, marquee galleries, and a floating navigation bar. It successfully communicates that Catherine Arnado is both a developer and visual designer.

From an HCI perspective, the portfolio is visually memorable but currently prioritizes visual spectacle over usability efficiency. The main issues are discoverability, accessibility, motion control, information hierarchy, and consistency of navigation. These do not make the site unusable, but they may reduce task completion speed for recruiters, instructors, clients, or visitors who want to quickly inspect projects, credentials, and contact options.

Original rating: 7.4 / 10  
Updated rating after changes: 8.2 / 10

High-level judgment:

- Strengths: strong branding, engaging hero, rich media, clear personal style, multiple proof-of-work sections, stronger project evidence, broader navigation, and better certificate action handling.
- Main remaining risks: motion overload, hover-heavy interactions, icon-only actions without explicit accessible labels, and limited reduced-motion support.
- Priority fix: keep the improved content structure while making the animation system more controllable and accessible.

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
- Hero section with branded name artwork, profile image, CV download, booking link, and GitHub link.
- Fixed 3D logo scene and top theme toggle.
- Floating bottom navigation with icons, active-section highlighting, and broader section coverage.
- Personal information section with profile image and bento-style skill/tool/language cards.
- Professional experience timeline with scroll-based progress and animated cards.
- Selected works section with categories, hover-based preview, and click/tap case-study modal.
- Visual portfolio section with animated marquee rows and lightbox preview.
- Certifications section with selectable list, card-swap animation, modal, and conditional verification links.
- Gateway section separating "In Code" and "Beyond Code."
- Educational tour and journal sections.
- PixelSnow/light-mode background decorative system.
- Footer.

The interface is visually rich and suitable for a creative-developer portfolio. The updated version improves information architecture and project evidence, but several elements still depend heavily on hover, motion, and visual memory.

## 4. Cognitive Walkthrough

### Task 1: "I want to know who this person is and what they do."

Expected user goal: quickly understand identity, role, and credibility.

Findings:

- The hero communicates the name clearly with very strong visual emphasis.
- "A CREATIVE FULL STACK DEV" gives role information, but it is broad and could be more specific.
- The welcome screen now delays access by around 2 seconds instead of around 6 seconds.
- The animated intro strengthens brand impact but may slow down first-time visitors who are task-focused.

Assessment:

- Will users see the action available? Partially. The shorter duration reduces friction, but the screen is still only implicitly skippable through clicking.
- Will users understand feedback? Yes, the loading bar implies progress.
- Updated issue severity: Low to Medium.

Recommendation:

- Add a visible "Skip intro" or "Enter portfolio" control.
- Keep the shortened 2-second duration and consider remembering returning visitors.
- Refine the role text into something clearer, such as "Full-stack developer and visual designer."

### Task 2: "I want to view projects and understand the quality of work."

Expected user goal: inspect selected projects and judge skill level.

Findings:

- The selected works section now contains categories, stronger project descriptions, roles, features, live preview links, repository links where available, and a case-study modal.
- The preview interaction still uses hover, but click/tap now opens richer details.
- Project evidence is significantly stronger than the original evaluation because the user can inspect challenge, role, timeline, capabilities, and external links.
- Some case-study text is still broad and would benefit from clearer results or measurable outcomes.

Assessment:

- Will users see that project preview is available? More likely now because there is a "VIEW CASE STUDY" action in the preview panel.
- After action, will feedback be understandable? Yes, the modal is clear and content-rich.
- Updated issue severity: Low to Medium.

Recommendation:

- Add measurable outcomes to the strongest 3 to 5 projects.
- Confirm every live preview and repository URL is active.
- Add keyboard-accessible focus behavior for opening and closing case-study modals.

### Task 3: "I want to download the CV or contact/book a call."

Expected user goal: take action quickly.

Findings:

- Primary calls to action are visible in the hero.
- Download CV and Book a Call are familiar and clear.
- GitHub remains icon-only, which is acceptable for many tech audiences, but should still have an accessible label.
- The SMM portfolio button appears to have been removed from the hero, simplifying the primary CTA set.

Assessment:

- Will users see the action? Yes.
- Will users know it is the one they need? Mostly.
- Issue severity: Low to Medium.

Recommendation:

- Ensure icon-only GitHub has an accessible name.
- Keep the CTAs visible and consider repeating contact options near the footer.

### Task 4: "I want to verify certificates."

Expected user goal: inspect credentials.

Findings:

- Certifications are presented with a list, animated card swap, and modal.
- The modal now conditionally shows "Verify Credential" only when a certificate has a `verificationUrl`.
- This is an improvement because the interface no longer promises verification for every certificate.
- Some verification links are generic verification portals rather than direct credential-specific URLs.

Assessment:

- Will users understand the feedback? Yes, modal opening is clear.
- Is the effect the same as the user's goal? Mostly, when a real verification URL exists.
- Updated issue severity: Low to Medium.

Recommendation:

- Replace generic verification URLs with direct credential URLs where possible.
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

Updated heuristic comparison after implementation changes:

| Heuristic | Original Rating | Updated Rating | Change |
|---|---:|---:|---|
| Visibility of system status | 2 | 2 | Mostly unchanged. Loading/progress and modals are still clear, but heavy visual/media sections still need explicit loading or fallback states. |
| Match between system and real world | 2 | 1 | Improved. Primary CTAs are simpler, and project labels now include clearer role/category/detail context. |
| User control and freedom | 3 | 2 | Improved. Intro duration was reduced and case-study/certificate modals have clear close actions. Motion and sound still need user control. |
| Consistency and standards | 3 | 2 | Improved. Navigation now includes Experience, Works, Visual, Certification, Gateway, Tour, and Journal. Some duplication remains with theme controls. |
| Error prevention | 2 | 1 | Improved. Certificate verification is conditional, reducing misleading actions. External project links should still be checked. |
| Recognition rather than recall | 3 | 2 | Improved. Broader navigation reduces memory burden, but icon-heavy nav still requires recognition of symbols. |
| Flexibility and efficiency | 2 | 1 | Improved. Shorter intro and richer project modals make core tasks faster. |
| Aesthetic and minimalist design | 3 | 3 | Unchanged. The design is more polished but also adds PixelSnow/background treatments and large background text, so visual density remains high. |
| Help users recover from errors | 2 | 2 | Mostly unchanged. Modal close behavior exists, but media/link failures still need fallbacks. |
| Accessibility and inclusive design | 3 | 3 | Mostly unchanged. There are more clickable paths, but reduced-motion, keyboard, aria-label, and icon-only control issues remain. |

Updated most important heuristic issues:

1. Too many interactions and visual effects still rely on motion.
2. Accessibility support needs more explicit handling.
3. Icon-only controls need accessible labels and stronger visible focus states.
4. Case studies need measurable results to become stronger professional evidence.

## 6. Review-Based Expert Evaluation

### Visual hierarchy

The hero has excellent visual dominance. The updated version shifts from text-only name typography to a branded name image and a large profile image, which makes the first viewport feel more personal and portfolio-specific. However, later sections still compete with each other because many components use large headings, strong motion, oversized cards, animated backgrounds, and background display text. The result is expressive but occasionally tiring.

Recommendation:

- Keep the hero as the strongest moment, but ensure the name artwork remains readable on all screen widths.
- Make project and credential sections more information-dense and less decorative.
- Use smaller headings for subsections inside the visual portfolio.

### Layout and spacing

The site uses generous spacing and section separation, which helps the portfolio feel premium. The bottom nav now better matches the actual information architecture by adding Experience, Works, Visual, Gateway, Tour, and Journal. On mobile, it may still risk crowding because there are more destinations and the active item expands with text while other items remain icon-only.

Recommendation:

- Test the bottom nav on 360px to 430px widths.
- Consider a compact mobile menu with labeled destinations.
- Consider a compact mobile menu or scrollable nav state if all section icons cannot fit comfortably.
- Add a Contact/Footer destination if contact actions remain important beyond the hero.

### Color and contrast

The orange/red, black, and off-white palette remains cohesive and brandable. The updated CSS improves light-mode border contrast and glass-card contrast. The new light-mode background image and PixelSnow layer add atmosphere but should be checked carefully because fixed backgrounds can reduce text clarity in some sections.

Recommendation:

- Audit contrast for overlays, badges, and muted text.
- Keep the reduced grid/border contrast behind experience content.
- Avoid placing important text over busy images without stronger contrast treatment.
- Check all text over the new fixed background image in light mode.

### Motion and interaction design

Motion is a major part of the identity, but there is motion in nearly every major section. The updated version improves task flow, but it also adds or keeps PixelSnow, 3D logo movement, animated intro, custom cursor, marquees, modal transitions, card effects, and section reveal animations. This can still create high cognitive load and may affect users who prefer reduced motion. Sound on hover/click can also feel surprising in a professional portfolio context.

Recommendation:

- Respect `prefers-reduced-motion`.
- Disable sound by default or add a sound toggle.
- Slow or pause marquees on focus/hover and provide manual browsing.
- Avoid relying on parallax text movement for core hero readability.

### Content strategy

The portfolio now shows stronger professional value because selected works include case-study modals, roles, longer descriptions, core capabilities, live previews, and code repositories where available. This directly addresses one of the most important findings from the original evaluation. The remaining content gap is evidence of impact: results, constraints, users served, performance, adoption, or before/after improvements.

Recommendation:

- Keep the new case-study modal pattern.
- Add short outcome statements, such as "Supported X voters," "Reduced manual work," "Built voting workflow," or "Improved brand consistency."
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

Updated status after implementation changes:

| Original Recommendation | Status | Evidence / Notes |
|---|---|---|
| Add a clear skip/enter control and reduce intro duration. | Partially completed | Duration was reduced to about 2 seconds. A visible skip/enter control is still not present. |
| Add all major sections to navigation or provide a labeled mobile menu. | Mostly completed | Navigation now includes Home, About, Experience, Works, Visual, Cert, Gateway, Tour, and Journal. Contact/Footer is still not represented. |
| Make project cards clickable/tappable and add case-study details. | Completed | Selected works now open case-study modals with role, timeline, challenge, capabilities, live preview, and code repo links. |
| Add reduced-motion support. | Not completed | The app still has multiple motion systems without an obvious `prefers-reduced-motion` fallback. |
| Add accessible labels for icon-only buttons and stronger keyboard focus states. | Not completed | GitHub and several icon/button controls still need explicit accessibility treatment. |
| Rename unclear SMM button. | Resolved by simplification | The SMM CTA appears to have been removed from the hero, reducing ambiguity. |
| Add real verification URLs or remove unavailable verification. | Partially completed | Verification button now appears only when a URL exists. Some URLs appear generic rather than credential-specific. |
| Provide pause/manual controls for marquee galleries. | Not completed | Marquee/lightbox behavior remains visually strong but auto-motion still lacks user control. |
| Reduce visual competition in the experience timeline. | Partially completed | Border/card contrast is improved, but the full page still has multiple decorative layers. |
| Repeat contact actions in the footer. | Needs review | The hero contains contact actions; footer/contact reinforcement should still be confirmed or added. |

### High priority

1. Add reduced-motion support for parallax, marquees, card swap, cursor, PixelSnow, and background effects.
2. Add accessible labels for icon-only buttons and stronger keyboard focus states.
3. Add a visible skip/enter control to the welcome screen.
4. Validate mobile navigation spacing now that more sections are included.
5. Add measurable outcomes to case studies.

### Medium priority

1. Replace generic certificate verification URLs with direct credential-specific URLs.
2. Provide pause/manual controls for marquee galleries.
3. Reduce visual competition from simultaneous background layers.
4. Repeat contact actions in the footer.
5. Add fallback states for failed external project links or unavailable media.

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

Current progress against success criteria:

- Finding projects within 20 seconds is more realistic now because Works is in the nav and project modals are explicit.
- Finding CV/contact within 15 seconds remains likely because the hero CTAs are prominent.
- Explaining Catherine's primary role is clearer because the hero states BSIT/Full Stack Dev and selected projects show role information.
- Opening a project is now much stronger because case-study modals exist.
- Reduced-motion usability remains the largest unmet criterion.
- Navigation clarity likely improved, but it should still be tested on small mobile widths.

## 10. Before-and-After Comparison

| Area | Before Evaluation | After Changes | UX Impact |
|---|---|---|---|
| Welcome screen | About 6-second intro with implicit click-to-skip behavior. | About 2-second intro, still implicit click-to-skip. | Faster access and lower friction, but still needs visible control. |
| Navigation | Bottom nav omitted several major sections. | Bottom nav now includes more complete portfolio destinations. | Better recognition and faster movement through content. |
| Hero CTAs | CV, Book Call, SMM, and GitHub were present; SMM label was unclear. | CV, Book Call, and GitHub remain; SMM ambiguity removed. | Cleaner action set, though GitHub still needs accessible labeling. |
| Project evidence | Hover preview existed, but case-study detail was weak. | Clickable case-study modal includes challenge, role, capabilities, live preview, and repo links. | Major improvement for recruiter/client evaluation. |
| Certificate verification | Verify button could imply verification even when unavailable. | Verify button appears only for certificates with URLs. | Better error prevention and trust alignment. |
| Visual hierarchy | Strong hero, but many competing animated sections. | Hero is more personal and polished; new backgrounds and decorative text add density. | Stronger brand, but still high cognitive load. |
| Color/contrast | Light-mode borders and glass elements could be weak. | Border and glass contrast improved; light background image added. | Some readability improvements, but background image needs contrast testing. |
| Motion/accessibility | Many animations, hover interactions, custom cursor, sound, and marquees. | Core task flow improved, but motion systems remain. | Accessibility remains the most important unresolved issue. |
| Information architecture | Development, visual, tour, and journal content existed but was less directly represented in nav. | Gateway and broader nav better separate code/creative identity. | Stronger mental model for visitors. |
| Professional credibility | Many artifacts shown, limited explanation. | Selected works now explain role and capabilities. | Stronger credibility; add measurable outcomes next. |

## 11. Updated Conclusion

The updated portfolio is stronger than the original evaluated version. The most meaningful improvements are the shorter intro, expanded navigation, case-study modals, clearer project roles, external project links, and conditional certificate verification. These changes directly address the HCI goals of improving usability, functionality clarity, and user task completion.

The portfolio still needs accessibility and motion-control refinements. The design remains visually distinctive, but the next maturity step is to make the experience more inclusive: reduced motion, clearer labels, keyboard states, pause controls, and direct credential/project validation. The creative identity should remain, but it should now be supported by more predictable, controllable interaction patterns.
