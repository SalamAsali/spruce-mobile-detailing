# Intent Modal Feature Documentation

## Archive Information
- **Feature Name**: Floating Menu Intent Modal
- **Branch**: archive/intent-modal-v1
- **Tag**: intent-modal-v1
- **Status**: Archived (Removed from production)
- **Date Archived**: January 5, 2026

## Feature Description

The Intent Modal feature was an interactive floating widget system designed to capture user intent and guide them through various service offerings. The feature consisted of:

1. **FloatingWidgets Component**: A client-side React component that displayed a floating action button with an expandable menu
2. **Intent Modal System**: A modal dialog that appeared when users clicked on menu options to understand their service needs
3. **Dedicated Route Pages**: Five specialized pages for different service intents

### User Flow
1. User sees a floating widget button (typically bottom-right of screen)
2. User clicks the button to expand a menu with service options
3. User selects a service type from the menu
4. System navigates to a dedicated page for that service intent
5. Page captures user information and service requirements

## Affected Routes

The following routes were part of this feature:

### 1. `/login`
- **Purpose**: User authentication page
- **File**: `app/login/page.js`
- **Description**: Login page for existing customers to access their account

### 2. `/book-detail`
- **Purpose**: Detailed service booking page
- **File**: `app/book-detail/page.js`
- **Description**: Page for customers to book specific detailing services with customization options

### 3. `/schedule-service`
- **Purpose**: Service scheduling interface
- **File**: `app/schedule-service/page.js`
- **Description**: Calendar-based interface for selecting service date and time

### 4. `/fleet-services`
- **Purpose**: Fleet/commercial services page
- **File**: `app/fleet-services/page.js`
- **Description**: Specialized page for businesses needing multiple vehicle services

### 5. `/emergency-detail`
- **Purpose**: Emergency/rush service booking
- **File**: `app/emergency-detail/page.js`
- **Description**: Fast-track booking for urgent detailing needs

## Implementation Details

### Core Component
- **File**: `components/FloatingWidgets.js`
- **Type**: Client-side React component (`'use client'` directive)
- **Dependencies**: 
  - Next.js navigation (`next/navigation`)
    - React hooks (useState, useEffect)
      - Tailwind CSS for styling

      ### Integration Point
      - **File**: `app/layout.js` or `app/layout.tsx`
      - **Integration**: Component was imported and rendered in the root layout to appear on all pages

      ### Key Features
      - Responsive design
      - Smooth animations
      - Mobile-friendly interface
      - Accessibility considerations
      - Click-outside-to-close functionality

      ## Known Issues

      ### Issues at Time of Archival
      1. **Navigation Complexity**: Users found the multi-step navigation confusing
      2. **Conversion Rate**: Lower than expected conversion through the intent modal flow
      3. **Mobile UX**: Widget could obstruct important page content on smaller screens
      4. **Load Time**: Added JavaScript bundle size impacted initial page load
      5. **Maintenance**: Required updates whenever new services were added

      ### Technical Debt
      - Multiple route pages with similar structure could have been consolidated
      - Component could have been more modular
      - State management could be improved with Context API or similar

      ## Why It Was Removed

      The feature was removed from production for the following reasons:

      1. **User Feedback**: Analytics showed users preferred direct contact via phone
      2. **Simplification**: Moving to a simpler floating call button reduced complexity
      3. **Performance**: Removing the feature improved page load times
      4. **Maintenance**: Reduced code maintenance burden
      5. **Focus**: Allowed team to focus on core booking flow improvements

      ## How to Re-enable This Feature

      If you need to restore this feature in the future, follow these steps:

      ### Step 1: Restore the Archive Branch
      ```bash
      git checkout archive/intent-modal-v1
      ```

      ### Step 2: Create a New Feature Branch
      ```bash
      git checkout -b feature/restore-intent-modal
      ```

      ### Step 3: Cherry-pick or Merge Changes
      Option A - Merge the archive branch:
      ```bash
      git checkout main
      git merge feature/restore-intent-modal
      ```

      Option B - Cherry-pick specific commits:
      ```bash
      git cherry-pick <commit-hash>
      ```

      ### Step 4: Restore Files to Main Branch
      Copy the following files from the archive branch:

      1. `components/FloatingWidgets.js`
      2. `app/login/page.js`
      3. `app/book-detail/page.js`
      4. `app/schedule-service/page.js`
      5. `app/fleet-services/page.js`
      6. `app/emergency-detail/page.js`

      ### Step 5: Update Layout File
      Edit `app/layout.js` to import and use FloatingWidgets:

      ```javascript
      import FloatingWidgets from '@/components/FloatingWidgets'

      // In the return statement, add:
      <FloatingWidgets />
      ```

      ### Step 6: Remove FloatingCallButton
      If FloatingCallButton was added as a replacement, remove it:
      - Delete `components/FloatingCallButton.jsx`
      - Remove import from `app/layout.js`

      ### Step 7: Test Thoroughly
      ```bash
      npm run dev
      # Test all routes
      # Test responsive behavior
      # Test accessibility
      npm run build
      # Verify production build succeeds
      ```

      ### Step 8: Deploy
      ```bash
      git push origin feature/restore-intent-modal
      # Create pull request
      # Review and merge
      ```

      ## Acceptance Tests

      Before considering this feature complete (if re-enabled), ensure these tests pass:

      ### Functional Tests
      - [ ] FloatingWidgets button appears on all pages
      - [ ] Button is positioned correctly (bottom-right, not obstructing content)
      - [ ] Menu expands when button is clicked
      - [ ] Menu closes when clicking outside
      - [ ] Menu closes when pressing Escape key
      - [ ] All navigation links in menu work correctly

      ### Route Tests
      - [ ] `/login` page loads without errors
      - [ ] `/book-detail` page loads without errors
      - [ ] `/schedule-service` page loads without errors
      - [ ] `/fleet-services` page loads without errors
      - [ ] `/emergency-detail` page loads without errors
      - [ ] All pages have proper meta tags and SEO
      - [ ] All pages are responsive on mobile/tablet/desktop

      ### Integration Tests
      - [ ] Component doesn't interfere with existing navigation
      - [ ] Component doesn't break existing pages
      - [ ] No console errors in browser
      - [ ] No React warnings in development mode
      - [ ] Build completes successfully without warnings

      ### Performance Tests
      - [ ] Page load time increase is < 200ms
      - [ ] First Contentful Paint (FCP) is not significantly impacted
      - [ ] Lighthouse score remains above 90
      - [ ] Bundle size increase is reasonable (< 50KB)

      ### Accessibility Tests
      - [ ] Component is keyboard accessible
      - [ ] Component works with screen readers
      - [ ] Color contrast meets WCAG AA standards
      - [ ] Focus indicators are visible
      - [ ] ARIA labels are appropriate

      ### Browser Compatibility
      - [ ] Works in Chrome (latest)
      - [ ] Works in Firefox (latest)
      - [ ] Works in Safari (latest)
      - [ ] Works in Edge (latest)
      - [ ] Works on iOS Safari
      - [ ] Works on Android Chrome

      ### Analytics Tests
      - [ ] Click events are tracked
      - [ ] Navigation events are tracked
      - [ ] Conversion funnel is properly instrumented
      - [ ] User journey can be analyzed

      ## Alternative Approaches Considered

      If re-implementing, consider these alternative approaches:

      1. **Single Modal Instead of Multiple Routes**: Use one modal with conditional rendering instead of separate pages
      2. **Progressive Disclosure**: Start with simple options and progressively show more details
      3. **Inline Forms**: Instead of navigation, show forms inline on the current page
      4. **Chatbot Integration**: Use a conversational interface instead of traditional forms
      5. **WhatsApp/SMS Integration**: Direct users to messaging platforms for booking

      ## Additional Resources

      - Original feature specification: (link if available)
      - Design mockups: (link if available)
      - User research findings: (link if available)
      - Analytics reports: (link if available)

      ## Contact

      For questions about this archived feature:
      - Repository: https://github.com/SalamAsali/spruce-mobile-detailing
      - Branch: archive/intent-modal-v1
      - Tag: intent-modal-v1

      ---

      **Last Updated**: January 5, 2026  
      **Archived By**: Automated archival process  
      **Review Date**: N/A (archived indefinitely)
