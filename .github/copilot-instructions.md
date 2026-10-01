# Gatherly repository instructions

Apply these rules across the repository:

- Keep the app approachable for developers learning Copilot workflows.
- Use TypeScript and React function components.
- Prefer semantic HTML and accessible names over ARIA workarounds.
- Treat names, email addresses, and registration details as personal data.
- Never log personal data or include real personal information in fixtures.
- Keep UI changes responsive and consistent with the existing CSS.
- Write behavior-focused tests with Vitest and Testing Library.
- Make the smallest change that satisfies stated acceptance criteria.
- Run the narrowest relevant test, then lint and build before declaring work
  complete.
- Explain remaining risk explicitly; do not represent an unverified change as
  release-ready.

Files under `demo/` describe intentional teaching scenarios. Do not expand
scope beyond their acceptance criteria unless the user asks.
