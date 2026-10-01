---
name: orchestrate-release-review
description: Run a parallel, multi-perspective release review and synthesize one decision.
agent: Release Coordinator
tools: ['agent', 'read', 'search']
---

Review the Gatherly registration release candidate in
[demo/release-candidate.md](../../demo/release-candidate.md).

Delegate independent accessibility, privacy, and test reviews to the configured
specialist agents. Do not edit files. Synthesize one prioritized release
decision using evidence from the repository.
