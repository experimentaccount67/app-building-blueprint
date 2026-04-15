import ChecklistApp from '@/components/ChecklistApp'

export const metadata = {
  title: 'Checklist',
  description: 'Your production-ready checklist. 101 items across 13 sections — check off every layer before you ship.',
  alternates: {
    canonical: 'https://appbuildingblueprint.com/checklist',
  },
  robots: {
    index: false,
  },
}

export default function ChecklistPage() {
  return <ChecklistApp />
}
