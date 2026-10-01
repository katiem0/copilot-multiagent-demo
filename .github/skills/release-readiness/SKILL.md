---
name: release-readiness
description: Review a small web release candidate for acceptance criteria, user impact, accessibility, privacy, tests, and operational risk. Use before deciding whether a Gatherly change is ready to release.
---

# Release readiness

Use this playbook for a change set or release candidate.

## Procedure

1. Read the stated acceptance criteria and scope.
2. Trace each criterion to implementation and tests.
3. Identify concrete failure modes for users.
4. Check accessibility, privacy, correctness, and maintainability.
5. Separate verified facts from assumptions.
6. Prioritize findings:
   - **Blocker:** likely user harm, data exposure, or a core criterion not met.
   - **Important:** meaningful regression risk that should be fixed soon.
   - **Follow-up:** worthwhile improvement that need not block this release.
7. State what was validated and what remains unverified.
8. Give one release decision with the smallest safe next action.

## Output quality

- Cite files and observable behavior.
- Consolidate duplicate symptoms under one root cause.
- Preserve good implementation choices.
- Do not add requirements outside the release scope.
- Never call a change ready based only on code inspection when required tests
  have not run.
