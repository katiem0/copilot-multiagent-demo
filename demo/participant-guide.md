# Participant guide

Use this guide after the presentation to explore each workflow in your own
GitHub Copilot chats. Start each comparison in a new chat so earlier responses
do not influence the result.

## Set up

Requirements: Node.js 22 or later and VS Code with GitHub Copilot.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. In VS Code Chat, select **Local**, choose
**Agent**, and enable **Run Subagent** under **Configure Tools**.

## 1. Start with one agent

Open `src/components/RegistrationForm.tsx`, start a new chat, and send:

```text
Review the registration form before release.
```

Notice which concerns the response finds without explicit acceptance criteria,
how it prioritizes them, and whether it gives a clear release decision.

## 2. Add reusable context

Start a new chat and run:

```text
/release-review
```

Compare this result with the first review. Look for the influence of:

- `.github/copilot-instructions.md`, which supplies repository-wide rules.
- `.github/prompts/release-review.prompt.md`, which defines the task and output.
- `.github/skills/release-readiness/SKILL.md`, which defines the review process.
- `demo/registration-ticket.md`, which supplies feature-specific requirements.

## 3. Delegate independent reviews

Start a new chat and run:

```text
/orchestrate-release-review
```

Confirm that the **Release Coordinator** delegates accessibility, privacy, and
test reviews before synthesizing one prioritized decision. Compare its evidence
and recommendations with the single-agent reviews.

## 4. Try a sequential handoff

Start a new chat, select **Feature Coordinator**, and send:

```text
Add an urgency badge to an event card only when five or fewer spots remain.
Use existing visual patterns, include focused tests, and keep the change small.
```

Look for a sequence of research, implementation, focused testing, independent
review, and final validation. Review the resulting changes before accepting
them.

## Verify your result

```bash
npm test
npm run lint
npm run build
```

Use source control to inspect or discard the changes from the feature exercise.
Do not enter real names, email addresses, or other personal information while
testing.

## Reflect

For each workflow, ask:

1. What context changed the quality or consistency of the result?
2. Which tasks benefited from independent specialists?
3. Did each agent have a bounded job and a clear stop condition?
4. Was the extra orchestration worth its time and complexity?