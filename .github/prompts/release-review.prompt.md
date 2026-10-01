---
name: release-review
description: Review the Gatherly registration release candidate with a consistent release decision.
agent: ask
---

Review the Gatherly registration release candidate without editing files.

Read:

- [acceptance criteria](../../demo/release-candidate.md)
- [registration form](../../src/components/RegistrationForm.tsx)
- [registration tests](../../src/components/RegistrationForm.test.tsx)

Apply repository instructions and the `release-readiness` skill.

Return:

1. **Release decision:** ready, ready after minor changes, or not ready.
2. **Top findings:** prioritized by user impact, with file references.
3. **Testing gaps:** missing behaviors that would reduce release risk.
4. **What looks good:** choices worth preserving.
5. **Next action:** the smallest safe set of changes.

Separate blockers from follow-ups. Do not invent backend requirements outside
the stated scope.
