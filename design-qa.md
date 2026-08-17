# Design QA — Product Builder Portfolio

## Target

- Reference direction: light editorial portfolio with strong black typography, electric blue actions and a restrained lime signature.
- Product goal: a personal Product Builder site, not an agency landing page, SaaS page or conventional résumé.
- Content boundary: real interfaces and confirmed project facts only.

## Visual comparison

- Compared the selected reference direction and the implementation at the same 864 × 1821 viewport in `/private/tmp/gizelo-design-comparison.png`.
- Verified the implemented homepage at 1440 × 1000, 768 × 1024 and 375 × 812.
- Verified the Girex case page at desktop and 375 × 812.

## Review history

### Pass 1

- P1: the short Girex ownership label could imply ownership of the complete web implementation.
- P1: the desktop portrait was oversized for its source resolution and included the edge of another person.
- P1: the mobile hero headline was too large at the smallest breakpoint.
- P1: several small metadata styles used insufficiently strong neutral colors.
- P2: work started entirely below the first desktop viewport.
- P2: case gallery crops could hide meaningful interface details.
- P2: contribution numbering created an unnecessary résumé/dashboard signal.

### Fixes applied

- Clarified Girex ownership as product definition and delivery, web frontend and mobile app.
- Reduced the desktop portrait size and adjusted the crop to isolate Robert.
- Lowered the base hero type size while preserving the desktop scale.
- Raised supporting-text contrast on light and dark surfaces.
- Reduced the desktop hero height so the selected-work boundary appears in the first viewport.
- Preserved intrinsic ratios for gallery screenshots.
- Removed decorative numbering and fixed mobile contribution-card heights.
- Strengthened the personal signal with `Robert Gizelo · Product Builder` in the hero.

## Final checks

- Hierarchy: passed.
- Typography and spacing: passed.
- Real product interfaces: passed.
- Portrait crop: passed.
- Responsive layout and horizontal overflow: passed.
- Personal, non-agency positioning: passed.
- Visible controls, semantic landmarks and image alt text: passed.
- Reduced-motion behavior: passed.

final result: passed
