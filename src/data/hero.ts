export interface HeroData {
  name: string;
  title: string;
  status: string;
  description: string;
  profileImage: string;
  socialLinks: {
    type: 'email' | 'linkedin' | 'github' | 'scholar';
    href: string;
    label: string;
  }[];
}

export const heroData: HeroData = {
  name: 'Md. Mahmuduzzaman Ikbal',
  title: 'Computer Science Student & AI Researcher',
  status: 'Available for Research Collaboration',
  description: 'Passionate about collaborative research in Data Science, Artificial Intelligence, Deep Learning, and Software Engineering. Dedicated to advancing knowledge through innovative computational approaches and interdisciplinary research.',
  profileImage: '/src/assets/profile.png',
  socialLinks: [
    { type: 'email', href: 'mailto:mahmuduzzaman@example.com', label: 'Email' },
    { type: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
    { type: 'github', href: 'https://github.com', label: 'GitHub' },
    { type: 'scholar', href: 'https://scholar.google.com', label: 'Google Scholar' },
  ],
};
