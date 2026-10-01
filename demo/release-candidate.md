# Registration release candidate

The Gatherly team wants to release the event registration modal this week.

## Acceptance criteria

- A visitor can enter a name and email address and reserve one to four spots.
- Invalid or incomplete submissions do not reach the submission callback.
- Form controls and validation feedback work with assistive technology.
- Marketing consent is explicit and optional.
- Personal information is not exposed through application logs.
- Tests cover the highest-risk behaviors without coupling to implementation
  details.
- The change remains small enough to review and explain during a release
  meeting.

## Scope

Review these files:

- `src/components/RegistrationForm.tsx`
- `src/components/RegistrationForm.test.tsx`
- `src/App.tsx` only when modal behavior is relevant

Do not introduce a backend, authentication, or a design-system dependency.
