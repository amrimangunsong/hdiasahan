# Implementation Plan: Fix TypeScript Compiler Errors

This plan outlines the steps to resolve the three TypeScript compiler errors that prevent the production build from succeeding.

## Problem Description
Running `npm run build` fails with `tsc` compile errors due to unused imports and unused variables:
1. `MessageCircle` is imported in `src/App.tsx` but never used.
2. `error` parameter is declared in `src/App.tsx`'s QR Scanner handler callback but never read.
3. `error` parameter is declared in `src/pages/Scanner.tsx`'s QR Scanner handler callback but never read.

## Proposed Changes

### 1. Update `src/App.tsx`
- Remove `MessageCircle` from the imported icons list from `'lucide-react'` on line 2.
- Remove the `error` argument from the scanner error callback on line 120, changing it to `() => {}`.

### 2. Update `src/pages/Scanner.tsx`
- Remove the `error` argument from the scanner error callback on line 27, changing it to `() => {}`.

## Verification Plan
1. Run `npm run build` to verify that TypeScript compilation succeeds and the Vite build finishes.
2. Run `npm run lint` to verify that there are no remaining linter issues.
