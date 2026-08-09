# Deep Work — Focus Timer (single page)

Since the direction was left open, I'll build something immediately useful and self-contained: a polished focus/Pomodoro timer at `/`. No accounts, no backend — everything runs locally in the browser.

## What you get

- **Big timer** with Focus (25m), Short break (5m), Long break (15m) modes, start/pause/reset.
- **Session tracking**: completed focus sessions counted, auto-suggests a long break after 4.
- **Task label**: type what you're focusing on; it shows under the timer.
- **Gentle completion cue**: a soft chime plus an on-screen toast when a session ends.
- **Persistence**: mode, task, and today's session count survive a refresh.
- **Distinct look**: warm dark "night desk" theme, a large monospace countdown, a thin progress ring, no purple gradients.

## Technical notes

- Rewrite `src/routes/index.tsx` as the timer page with its own `head()` metadata (title, description, og/twitter tags).
- Add design tokens (warm dark palette, ring color) to `src/styles.css`; components use semantic tokens only.
- Small components under `src/components/timer/`: `TimerRing`, `ModeTabs`, `TaskInput`, `SessionDots`.
- Timer logic in a `useFocusTimer` hook using timestamp-based math (accurate when the tab is backgrounded) and `localStorage` read inside `useEffect` to avoid hydration mismatch.
- Chime generated with the Web Audio API — no audio asset needed.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`.

If you had a different app in mind, tell me and I'll swap the plan.
