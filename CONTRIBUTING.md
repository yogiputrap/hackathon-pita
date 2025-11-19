# Contributing to Logi+

Thank you for your interest in contributing to Logi+! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

1. **Check existing issues** to avoid duplicates
2. **Use the bug report template**
3. **Include**:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (browser, OS, etc.)

### Suggesting Features

1. **Open a feature request issue**
2. **Include**:
   - Clear use case
   - Expected benefits
   - Mockups or examples (optional)
   - Technical considerations

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add new pricing tier calculation"
   ```
6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

---

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define interfaces for all props
- Avoid `any` type
- Use meaningful variable names

```typescript
// ✅ Good
interface PackageProps {
  id: number;
  weight: number;
  dimensions: Dimensions;
}

// ❌ Bad
interface Props {
  data: any;
}
```

### React Components

- Use functional components
- Prefer named exports for components
- Use `"use client"` directive when needed
- Keep components small and focused

```typescript
// ✅ Good
"use client";

import { useState } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use consistent spacing (8px grid)
- Prefer dark theme colors

```typescript
// ✅ Good
<div className="p-6 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors">

// ❌ Bad
<div style={{ padding: "24px", borderRadius: "12px" }}>
```

---

## 🏗️ Project Structure

```
logi-plus/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── 3d-load-plan/     # 3D visualization
│   ├── pricing-heatmap/  # Pricing features
│   ├── layout/           # Layout components
│   └── ui/               # Reusable UI
├── lib/                  # Utilities
├── types/                # TypeScript types
└── public/               # Static assets
```

### Component Organization

Each feature should have its own directory:

```
components/feature-name/
├── FeatureName.tsx       # Main component
├── SubComponent.tsx      # Sub-components
└── index.ts             # Exports
```

---

## 🧪 Testing

### Before Submitting PR

1. **Run build**
   ```bash
   npm run build
   ```

2. **Check linting**
   ```bash
   npm run lint
   ```

3. **Test in browser**
   - Chrome
   - Firefox
   - Safari (if available)

4. **Check responsiveness**
   - Mobile (320px)
   - Tablet (768px)
   - Desktop (1024px+)

---

## 📦 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```bash
feat: add real-time price updates
fix: correct 3D package positioning
docs: update deployment guide
style: improve button hover effects
refactor: optimize network data generation
perf: reduce bundle size
```

---

## 🎨 Design Guidelines

### Colors

**Primary**: Blue-Cyan gradient
```css
bg-gradient-to-r from-blue-600 to-cyan-600
```

**Secondary**: Purple-Pink gradient
```css
bg-gradient-to-r from-purple-600 to-pink-600
```

**Success**: Green
```css
bg-green-500
```

**Warning**: Orange
```css
bg-orange-500
```

**Error**: Red
```css
bg-red-500
```

### Typography

- **Headings**: Bold, gradient text
- **Body**: Regular weight, gray-300/400
- **Buttons**: Semibold

### Spacing

Use Tailwind's spacing scale:
- Small: `p-2`, `gap-2` (8px)
- Medium: `p-4`, `gap-4` (16px)
- Large: `p-6`, `gap-6` (24px)

---

## 🔄 Development Workflow

1. **Pick an issue** (or create one)
2. **Assign yourself** to avoid duplicates
3. **Create branch** from `main`
4. **Develop** following guidelines
5. **Test** thoroughly
6. **Create PR** with clear description
7. **Address review** comments
8. **Merge** when approved

---

## 🚀 Feature Development

### Adding New Feature

1. **Plan the feature**
   - Define requirements
   - Design UI/UX
   - Identify components needed

2. **Create components**
   - Start with types/interfaces
   - Build UI components
   - Add interactions

3. **Integration**
   - Connect to main app
   - Add to navigation
   - Update documentation

4. **Testing**
   - Manual testing
   - Cross-browser testing
   - Performance check

---

## 📚 Documentation

When adding features:
- Update README.md
- Add to FEATURES.md
- Include JSDoc comments
- Update type definitions

Example:
```typescript
/**
 * Calculates optimal discount based on capacity utilization
 * @param capacity - Maximum capacity percentage
 * @param demand - Current demand percentage
 * @returns Discount percentage (0-35)
 */
export function calculateDiscount(capacity: number, demand: number): number {
  // Implementation
}
```

---

## 🐛 Bug Fixes

### Process

1. **Reproduce** the bug
2. **Identify** root cause
3. **Fix** the issue
4. **Test** the fix
5. **Verify** no regressions
6. **Document** the fix

### Checklist

- [ ] Bug reproduced
- [ ] Root cause identified
- [ ] Fix implemented
- [ ] Tests pass
- [ ] No new warnings
- [ ] Documentation updated

---

## 🎯 Performance Guidelines

### Optimization Tips

1. **Images**: Use Next.js Image component
2. **Components**: Use dynamic imports for heavy components
3. **Animations**: Use CSS transforms (GPU accelerated)
4. **Data**: Memoize expensive calculations
5. **Bundles**: Check bundle size regularly

### Performance Budget

- Initial load: < 3 seconds
- Time to Interactive: < 5 seconds
- Bundle size: < 300KB (gzipped)

---

## 🔐 Security

### Guidelines

- Never commit secrets/API keys
- Validate user inputs
- Sanitize data before display
- Use environment variables
- Follow OWASP guidelines

---

## 💬 Communication

### Channels

- **GitHub Issues**: Bug reports, features
- **Pull Requests**: Code discussions
- **Email**: support@optima-pos.com

### Code Review

Be constructive and respectful:
- ✅ "Consider using useMemo here for better performance"
- ❌ "This code is bad"

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

## 🙏 Thank You!

Your contributions make Logi+ better for everyone. Thank you for taking the time to contribute!

---

**Questions?** Feel free to ask in issues or reach out via email.
