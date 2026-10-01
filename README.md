# Multi-agent orchestration foundations

This hands-on demo uses **Gatherly**, a small community event registration app,
to make Copilot customization and orchestration patterns concrete.

The app is intentionally familiar: browse local events, reserve seats, and get
a confirmation. One registration flow is also a realistic release candidate
with decisions spanning accessibility, privacy, testing, and maintainability.
That makes it useful for showing why focused agents can outperform one large,
unstructured prompt.

## What you will learn

- **Instructions** define durable repository rules.
- **Prompts** package repeatable tasks and output contracts.
- **Skills** provide discoverable, step-by-step domain playbooks.
- **Custom agents** combine a role, tools, and a focused perspective.
- **Orchestration** coordinates agents through bounded tasks and explicit
  handoffs.

> Instructions define the rules. Prompts define the task. Skills define the
> process. Custom agents define the perspective. Orchestration defines the
> teamwork.

## Run Gatherly

Requirements: Node.js 22 or later and VS Code with GitHub Copilot.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To verify the repository:

```bash
npm test
npm run lint
npm run build
```

## Try it yourself

After the presentation, use the
[participant guide](demo/participant-guide.md) to run each workflow yourself.

| Stage | What changes | Pattern |
|---|---|---|
| 1. Baseline | A simple review with only repository context | Single agent |
| 2. Layered customization | Add a prompt, instructions, and a skill | Context layering |
| 3. Specialist review | Delegate accessibility, privacy, and test reviews | Parallel fan-out / fan-in |
| 4. Feature delivery | Research, implement, and verify a small UI change | Sequential coordinator / worker |

## Repository map

```text
.github/
  agents/         Focused workers and coordinators
  prompts/        Reusable slash-command workflows
  skills/         Discoverable review playbook
  copilot-instructions.md
demo/
  participant-guide.md Self-guided exercises for participants
  registration-ticket.md Acceptance criteria for the registration flow
src/
  components/     Event cards and the registration feature
  data/           Synthetic event data
slides/
  multi-agent-orchestration-part1.pptx
```

## Safe demo practices

- All people, events, and email addresses in this repository are synthetic.
- Review agent output before applying changes.
- Give workers narrow goals, allowed actions, and expected return formats.
- Keep implementation and verification separate when independent review matters.
- Use tests and builds as objective stop conditions.

## Current product setup

The orchestration demos use the VS Code **Local** agent harness and its
`runSubagent` tool. In Chat, select **Local**, choose **Agent**, and ensure
**Run Subagent** is enabled under **Configure Tools**. Agent names are
case-sensitive.

References:

- [Custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [Subagents in VS Code](https://code.visualstudio.com/docs/agents/run/subagents)
- [Prompt files in VS Code](https://code.visualstudio.com/docs/agent-customization/prompt-files)
- [Agent Skills in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-skills)
