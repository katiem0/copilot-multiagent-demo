# Follow-along demo

Start each comparison in a new chat so old conversation history does not change
the result. Run the app before the first demo.

## 1. Baseline review

**Time:** 5 minutes  
**Pattern:** Single agent

Open `src/components/RegistrationForm.tsx`, start a new chat, and send:

```text
Review the registration form before release.
```

Notice which issues Copilot finds, how it structures the result, and whether it
gives a release recommendation.

## 2. Layered customization

**Time:** 8 minutes  
**Pattern:** Context layering

Start a new chat and run:

```text
/release-review
```

Compare the result with the baseline:

- Repository instructions provide durable standards.
- The prompt supplies the task, scope, and output contract.
- The `release-readiness` skill supplies the review process.
- The same workflow can be reused for another release candidate.

## 3. Parallel specialist review

**Time:** 12 minutes  
**Pattern:** Fan-out / fan-in

Select the **Release Coordinator** custom agent, ensure **Run Subagent** is
enabled, and send:

```text
Review the Gatherly registration release candidate.
Use the acceptance criteria in demo/release-candidate.md.
Do not edit files.
```

The coordinator delegates three independent reviews:

1. **Accessibility Reviewer** checks labels, focus, dialog behavior, and
   validation announcements.
2. **Privacy Reviewer** checks personal data collection, consent, and logging.
3. **Test Reviewer** checks behavior coverage and regression risk.

The coordinator then removes duplicates, resolves conflicting priorities, and
returns one release recommendation.

Look for:

- Each worker has a bounded perspective and read-only tools.
- Workers receive self-contained tasks rather than the full chat history.
- The coordinator owns synthesis; workers do not negotiate with each other.
- Parallelism is useful because these reviews are independent.

## 4. Sequential feature delivery

**Time:** 12 minutes  
**Pattern:** Coordinator / worker with verification

Select the **Feature Coordinator** custom agent and send:

```text
Add an urgency badge to an event card only when five or fewer spots remain.
Use existing visual patterns, include focused tests, and keep the change small.
```

The coordinator should:

1. Ask **Codebase Researcher** to find relevant files and patterns.
2. Implement the change using the research handoff.
3. Run the focused tests.
4. Ask **Test Reviewer** to independently review the changed files.
5. Address high-confidence findings and rerun validation.

Look for:

- Research returns a context packet, not code.
- The handoff artifact keeps the implementation phase focused.
- The independent reviewer sees requirements and changed files.
- Tests and build output are the stop condition.

## 5. Debrief

**Time:** 8 minutes

Use this decision rule:

| Situation | Start with |
|---|---|
| One clear task, one domain | One agent |
| A repeated task needs consistent output | Prompt + instructions + skill |
| Independent perspectives can run separately | Parallel specialists |
| Later work depends on earlier findings | Sequential handoffs |
| Work needs delegation plus one accountable owner | Coordinator / worker |

Ask before adding an agent:

1. Does it have a distinct job?
2. Can its input and output be stated clearly?
3. Can it work with fewer tools or read-only access?
4. Is there an objective stop condition?

If not, keep the workflow simpler.
