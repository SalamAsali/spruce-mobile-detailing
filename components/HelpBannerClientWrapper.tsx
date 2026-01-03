'use client';

import HelpBanner from './HelpBanner';

/**
 * Client wrapper for HelpBanner component.
 * Use this wrapper when importing HelpBanner from server components.
 * 
 * @example
 * // In a server component (e.g., app/layout.js):
 * import HelpBannerClientWrapper from '@/components/HelpBannerClientWrapper';
 * 
 * export default function Layout({ children }) {
 *   return (
 *     <>
 *       <HelpBannerClientWrapper />
 *       {children}
 *     </>
 *   );
 * }
 */
export default function HelpBannerClientWrapper() {
  return <HelpBanner />;
}
