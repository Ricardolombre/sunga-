# AI Development Rules - Sunga+

## Tech Stack
- **Framework**: Next.js 16+ with App Router for optimized routing and server-side rendering.
- **Language**: TypeScript for type safety and better developer experience.
- **Styling**: Tailwind CSS 4.0+ utilizing the new `@theme` API and CSS variables.
- **UI Components**: shadcn/ui built on top of Radix UI primitives for accessible and customizable components.
- **Icons**: Lucide React for a consistent and lightweight icon set.
- **Charts**: Recharts for responsive and interactive data visualizations.
- **Forms**: React Hook Form combined with Zod for robust schema-based form validation.
- **Animations**: Tailwind CSS Animate and `tw-animate-css` for smooth UI transitions.

## Library Usage Rules

### 1. UI & Styling
- **shadcn/ui**: Always check `components/ui/` before creating a new UI component. Use these as the foundation for all interface elements.
- **Tailwind CSS**: Use utility classes for all styling. Avoid inline styles or CSS modules unless absolutely necessary.
- **Icons**: Exclusively use `lucide-react`. Do not install other icon libraries.

### 2. Components & Layouts
- **Small Components**: Keep components focused and under 100 lines of code. Extract sub-components into `components/` if they grow too large.
- **Layouts**: Use `DashboardLayout` for admin pages and `ProprietaireLayout` for employer-specific pages to maintain sidebar and header consistency.
- **Responsive Design**: All components must be mobile-first and fully responsive using Tailwind's breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`).

### 3. Data & State
- **Forms**: Always use `react-hook-form` with a `zod` resolver for any user input.
- **Charts**: Use the pre-configured `ChartContainer` from `components/ui/chart.tsx` when implementing Recharts.
- **Notifications**: Use the `toast` hook from `hooks/use-toast.ts` or the `sonner` library for user feedback.

### 4. Code Quality
- **Utility Functions**: Use the `cn` helper from `lib/utils.ts` for conditional class merging.
- **Type Safety**: Define interfaces for all component props and data structures. Avoid using `any`.
- **File Naming**: Use kebab-case for directories and PascalCase for React components (e.g., `StatCard.tsx`).