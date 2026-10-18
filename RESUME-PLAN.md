# Resume improvement plan

Based on a ChatGPT review of the CV (Oct 2026), with my take on what to act on.

## Review takeaways

**Agree with**
- **Ligatures in PDF text.** The reviewer's extract showed "Technical Sta!" and "high-tra!c". Open Sans combines "ff"/"ffi" into single glyphs, which some PDF parsers can't map back to letters.
- **Headline undersells seniority.** "Full Stack Developer | 10+ Years of Experience" should name the target role, e.g. "Senior Full Stack Engineer | Technical Lead".
- **Bullets describe tasks, not outcomes.** This is the biggest gap. Senior recruiters look for scope, scale, ownership and measurable impact.
- **Keep Toastmasters short.** Professional experience should carry the leadership evidence.

**Skip or change**
- **The reviewer's "stronger" bullet rewrites** are mostly synonym swaps. The real gain comes from adding scale and numbers, which only you can supply.
- **Adding PHP, Scala, Angular.js and Backbone.js to Skills** would dilute a senior profile. They already appear in Experience, so ATS keyword matching still finds them.
- **Agentic AI was ignored by the review.** It sets you apart in 2026. If it's used at work, it belongs in an athenahealth bullet, not only in Skills.
- **One-page limit:** new content has to replace old content, not add to it.

## Part 1 – Done

- [x] Turned off font ligatures (`font-variant-ligatures: none` in `src/scss/_resume.scss`). Verified the PDF text extracts "Staff" and "traffic" correctly.
- [x] Merged the two MineWhat entries into one: "Senior Software Engineer / Software Engineer | Jun 2014 – Nov 2016", with three bullets. This frees space for the athenahealth rewrite. (The promotion was in Nov 2015.)
- [x] Regrouped Skills: core stack first; added REST APIs and an "Engineering Practices" line; moved Webpack/WordPress/Ghost/Jekyll to the bottom as "Build & CMS Tools".
- [x] Checked that both layouts print to one page. The single-column layout has about 1.8cm spare, enough for roughly two more lines.

## Part 2 – Done

- [x] **Headline:** "Senior Full Stack Engineer | Team Lead | 10+ Years of Experience". It targets both senior and lead roles. "Team Lead" describes what you do (you lead the Scrum team) without claiming a "Tech Lead" job title. The Experience entry keeps your real title.
- [x] **Summary** rewritten around industries, core stack, team leadership and agentic AI adoption.
- [x] **athenahealth bullets** rewritten in order of impact: team leadership, agentic AI, QR code login flow, JSP to React migration, delivery and data pipelines, CI/CD.
- [x] **Toastmasters club name** added.
- [x] Both layouts still print to one page, but the single-column layout has only about 0.7cm left, so any new line needs a trim elsewhere.

**Using the headline:** for pure lead roles, you can swap it to "Senior Full Stack Engineer | Engineering Team Lead". For pure senior IC roles, drop "Team Lead". Edit the `subtitle` line in `src/index.html`.

**Still worth adding if you can estimate it:**
- **Agentic AI time saved:** e.g. "cut code review turnaround by ~X%" or "saved ~X hours per sprint". A number would make this the strongest bullet on the page.
- **What the QR login flow improved:** fewer login steps, adoption rate or support tickets.
- **The data pipeline issues:** what broke and what the fix achieved, such as data delay or accuracy.

### Original Part 2 questions (answered)

Answer these, then the headline, summary and athenahealth bullets get rewritten. Rough numbers are fine if you can defend them in an interview. Nothing gets invented.

1. **Target role:** Senior Full Stack Engineer, Tech Lead / Lead Engineer, Staff Engineer, or a mix? This decides the headline and how the summary is framed.
2. **JSP to React migration:** how many apps, screens or modules? Any measured gain, such as page load time, bundle size or fewer defects?
3. **Team of 5:** beyond leading the scrum team, did you do code reviews, mentoring, design reviews, sprint planning or hiring? Which ones?
4. **Jenkins / Harness:** did you create or change pipelines (stages, templates, automation), or mostly trigger and monitor them? This decides between "built" and "worked with".
5. **Agentic AI:** is it used at athenahealth? Anything concrete, such as a workflow automated, the team adopting it, or time saved?
6. **Anything else at athenahealth:** user or traffic scale (Epocrates user base?), an incident you resolved, a system you designed, any awards or recognition?
7. **Toastmasters club name**, if you want it shown instead of "club".

## Comparison with Teal's Senior Full Stack Developer example

Source: tealhq.com/resume-example/senior-full-stack-developer (Wayback copy, 2 Oct 2026).

**Already on par**
- Headline and summary lead with seniority, years of experience and core stack.
- Mentoring a team of 5 matches the example's "Mentored a team of 5 junior developers".
- Agentic AI: Teal lists "AI-Driven Code Generation" as a skill. Your experience bullet already goes further.
- The structure matches what Teal recommends: summary, skills, experience, education.

**Gaps, most important first**
1. **Metrics.** Every bullet in Teal's example has a number (40% less downtime, 50% faster APIs, 99.9% uptime). Ours has two: the 25% Webpack gain and "a few hundred thousand users". Priority: agentic AI time saved, then QR login and data pipeline outcomes.
2. **No testing anywhere.** Teal lists "Testing and debugging" as a core hard skill, and its example has a test-automation bullet. Add your real tools (e.g. Jest, JUnit, Cypress) to Skills, and a bullet if testing was a notable part of the work.
3. **Missing common keywords:** TypeScript (if you use it, it's a major gap), Git, API design/integration, performance optimization. Add only what's true.
4. **Architecture and ownership language.** Teal's strong bullets use "Architected", "Led the migration", "Spearheaded". The QR login flow is the only design claim we have. If you designed any services, APIs or data models, say so.
5. **Cross-functional work.** Teal mentions collaboration with product and design. Ours has none. A short phrase is enough if it's true.
6. **Certifications (optional).** Teal's example lists AWS, GCP and Azure certifications. Not required, but an AWS Solutions Architect – Associate certification would back up the AWS keyword.

**Status (addressed):**
- [x] Metrics: 20%+ time saved per sprint (agentic AI), in summary and bullet.
- [x] Testing: "Testing & Tools: Jest, Cypress, Playwright, Git, Webpack, Vite".
- [x] TypeScript and Lit added to Frontend.
- [x] Design ownership: "Designed services, REST APIs and data models, incl. a QR code login flow".
- [x] Product collaboration added to the team-lead bullet.
- [ ] Certifications: not pursued.

## Open source – Done

Added an "Open Source" section below Experience with the npm package (author) and sargam-spec (4 merged PRs: Deepchandi taal, tali numbering fix, 2 release bumps). Dropped the OMR research paper line to make room. Added github.com/ishumadan91 to the contact line.

**To do on GitHub before applying:**
- [~] Add a few Vitest tests to chordialguy-keyboard. (28 tests written and passing locally; not yet committed or pushed.)
- [x] Set the repo's homepage URL to the live examples page and add topics.
- [x] Pin both repos on your GitHub profile.

**Not worth copying**
- Inflated, uncheckable numbers ("200% revenue growth", "$1.5 million annually") and filler skills (blockchain, financial data modeling).

**Note:** Teal says one to two pages is fine for senior roles. If the gaps above need room, a second page is acceptable. Keep the strongest content on page one.

## Tech Lead positioning (Claude review) – Done

Target: **Tech Lead / Lead Engineer**, not Engineering Manager (no direct reports).

- [x] Headline: "Senior Full Stack Engineer | Tech Lead". The Experience entry keeps the real title. Interview framing: "I've been doing the lead role (sprint planning, reviews, hiring, mentoring) without the title."
- [x] Hiring: folded into the team-lead bullet as one word ("hiring"). A separate interview-count bullet read oddly, so it was removed.
- [x] JSP to React migration: 30% performance gain.
- [x] Epocrates explained: "(clinical reference app)".
- [x] Toastmasters scope: 5 clubs, 100+ members.
- [x] Cricbuzz cut to one bullet and MineWhat to two, to make room for leadership.
- [x] Kept "Kubernetes (EKS, working knowledge)". The qualifier is honest, so interviewers won't probe it as a full skill.
- [x] Summary kept free of an objective statement. The target goes in the headline.

**Still open (needs specifics):**
- [ ] **People growth:** who grew and how, e.g. "mentored 2 engineers to promotion" or "a junior now owns the X module".
- [ ] **Delivery outcomes:** what improved and by how much, e.g. release cadence, sprint predictability, fewer production incidents.
- [x] **User figure:** ~1M clinician users (matches Epocrates' public figure).
- [ ] The page has only ~0.3cm spare. New bullets need a trim elsewhere, or a second page.

## Second Claude review – Done

- [x] "Tech Lead" removed from headline and summary (read as a claimed title). Headline: "Senior Full Stack Engineer | 10+ Years of Experience". Leadership is shown through the experience bullets instead.
- [x] Lead bullet: "Leading a 5-engineer team: …" (year removed).
- [x] Migration metric made specific: "cutting page load time by 30%".
- [x] Removed "resolved data pipeline issues" (no number to back it).
- [x] Kubernetes shown as "Kubernetes (EKS)". Be ready for basic EKS questions.
- [ ] Leadership outcome bullet: none yet (no number). Add one if a concrete result comes up, e.g. a mentee's promotion or fewer incidents.

## Two-page version with full work history – Done

Built from `work-experience-details.md`. Each bullet follows **what you did — impact**, with impact numbers in bold.

- [x] Two-page layout: 1cm top/bottom page margins; bullets and headings don't split across the page break.
- [x] 12+ years (Jun 2014 – present), Bengaluru in the contact line, "sports media" for Cricbuzz, Education moved last.
- [x] athenahealth: added the rebrand, gateway split (micro-frontends), and the Kafka-to-DocumentDB pipeline.
- [x] Cricbuzz: search frontend (end to end), Scala API migration.
- [x] MineWhat: React migration (20%+ load time), Webpack (~10% smaller shipped JS), Choice AI snippet and customization panel. The old "Webpack cut load time by 25%" claim was replaced; it conflicted with the notes.
- [x] No invented numbers. The rebrand, search and Scala bullets stay qualitative. The Scala work wasn't live during your time there, so that bullet states only what you did.
- [x] DocumentDB confirmed as Amazon DocumentDB (bullet and Skills).

## Leadership rebalance (third Claude review) – Done

- [x] "Led" on the three things you led: JSP-to-React migration and redesign, monolith split behind the gateway, design of services/APIs/data models incl. QR login. Leadership bullets now come first at athenahealth.
- [x] Cut claims with no numbers (rebrand engagement, search traction, Scala "streamlined data"), and the Module Federation note.
- [x] Cricbuzz cut to 2 bullets, MineWhat to 3. Choice AI explained as "an embeddable analytics script".
- [x] Only the agentic AI bullet still uses the "X — outcome" dash structure.
- [x] Page 1 holds everything through Open Source. Page 2 has only Leadership & Achievements and Education (~5 lines). Fitting on one page would need about 9 more lines cut.

## More achievements (from more-achievements.md) – Done

- [x] athenahealth: "Ran workshops on React.js and design systems for the team."
- [x] "design systems" added to Engineering Practices. "(custom skills and agents)" dropped so the line fits on one row.
- [x] New Certifications section: Design Thinking (Interaction Design Foundation); Atomic Design Certification, Brad Frost (in progress).
- [x] Leadership: Area Contest organized (Oct 2026), Area Humorous Speech Contest (2025), office events incl. open mics.
- [x] Research paper moved to Leadership & Achievements, with your role leading the B.Tech final-year project team.
- [ ] When the Atomic Design course is done, remove "(in progress)". Until then, don't list it as completed.

## Fourth Claude review – Done

- [x] Summary opens with leadership without claiming a title: "Senior Full Stack Engineer leading a 5-engineer team, with 12+ years…". The headline is unchanged.
- [x] Agentic AI bullet moved to second place at athenahealth.
- [x] Kept Certifications, the B.Tech project and the office events. Cutting them was mainly about fitting one page, which isn't a goal.

## Part 3 – Optional

- [ ] **DOCX version** for portals that ask for Word. Do this after Part 2, once the content is final.
- [ ] **Rebuild `docs/`** (the GitHub Pages output) and commit, so the hosted page matches.
- [ ] **Paste test** before each submission: print to PDF, select all, paste into a plain-text editor, and check the order and characters.

## Notes

- Use the **single-column** layout for job portals (ATS) and either layout for people. Two-column has skill-rating stars, which carry no meaning for an ATS.
- If more content is needed later, a two-page resume is acceptable at 10+ years. Keep the most important content on page one.
