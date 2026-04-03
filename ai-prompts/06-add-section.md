# Add a New Section Prompt

Use this to scaffold a new section component + content file that matches this template's existing patterns.

Attach: an existing section component (e.g., features.tsx) and its content file (e.g., features.ts)

---

I'm adding a new section to a Next.js SaaS landing page template. I need both a content file and a component that match the existing code style.

Section I want to add: [DESCRIBE THE SECTION — e.g., "a comparison table vs. competitors", "a 'how it works' step-by-step", "a case study strip with logos and metrics"]

My product: [PRODUCT NAME] — [ONE SENTENCE DESCRIPTION]

Please generate:

1. src/content/[section-name].ts
   - Export typed data (interfaces + const arrays)
   - Use `as const` where appropriate
   - Follow the same naming conventions as the existing content files

2. src/components/sections/[section-name].tsx
   - Import data from the content file
   - Match the existing section structure: section > div.max-w-7xl > header + grid/list
   - Use the same Tailwind utility classes and spacing (py-24 sm:py-32, px-4 sm:px-6 lg:px-8)
   - Use FadeIn / StaggerContainer / StaggerItem from @/components/fade-in for animations
   - Use Card components from @/components/ui/card if showing cards
   - No new dependencies — only use what's already installed

3. Where to add it in src/app/page.tsx
   - Tell me which existing section to place it after

Rules:
- The component must be a server component unless it requires client state
- All copy must come from the content file — no inline strings in the JSX
- Export the component as a named export matching the section name in PascalCase

Output all three items (content file, component file, page.tsx instruction), ready to use.
