export interface ContactLink {
  icon: string;
  label: string;
  href: string;
  color: string;
}

export const contactLinks: ContactLink[] = [
  { icon: 'Mail', label: 'Email', href: 'mailto:mahmuduzzaman@example.com', color: 'text-red-400' },
  { icon: 'Linkedin', label: 'LinkedIn', href: 'https://linkedin.com', color: 'text-blue-400' },
  { icon: 'Github', label: 'GitHub', href: 'https://github.com', color: 'text-gray-400' },
  { icon: 'GraduationCap', label: 'Google Scholar', href: 'https://scholar.google.com', color: 'text-blue-500' },
  { icon: 'FileText', label: 'ResearchGate', href: 'https://researchgate.net', color: 'text-cyan-400' },
];
