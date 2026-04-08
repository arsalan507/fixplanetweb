import { redirect } from 'next/navigation';

// Catch-all for removed/unknown area pages — 301 redirect to locations index
// Static area pages (app/areas/[area-name]/page.tsx) take priority over this route
export default function UnknownAreaPage() {
  redirect('/bangalore-locations');
}
