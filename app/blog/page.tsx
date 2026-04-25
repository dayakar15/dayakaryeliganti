// lib/constants.ts

export interface BlogPost {
  title: string;
  description: string;
  excerpt: string;
  link: string;
  slug: string;
  image: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "My First Blog",
    description: "This is my blog post",
    excerpt: "Insights, experiences, and knowledge sharing from my engineering journey.",
    link: "#",
    slug: "my-first-blog",
    image: "/image1.png",
    date: "April 25, 2024",
    author: "Dayakar",
  },
];

export const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js"];

export const certificates = [
  { title: 'Participation Certificate', issuer: 'NxtWave', date: '2024', id: 'CERT-001' },
  { title: 'Effective Speaking Skills', issuer: 'Wadhwani Foundation', date: '2024', id: 'CERT-002' },
  { title: 'Smart India Hackathon Participation', issuer: 'Government of India', date: '2024', id: 'CERT-003' },
];

export const siteConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Certificates', href: '/certificates' },
    { title: 'Contact', href: '/contact' },
  ],
  links: {
    github: 'https://github.com/dayakar15',
    linkedin: 'https://www.linkedin.com/in/dayakar-yeliganti-263631295/',
  },
};

export const projects = [
  {
    title: "Farmers Logistic Truck Sharing",
    description: "Farmers can share trucks with other farmers using this platform.",
    tags: ["Python", "HTML", "CSS", "Django"],
    link: "https://dayakar15.github.io/Farmers-Logistic-Truck-Sharing",
    repo: "https://dayakar15.github.io/Farmers-Logistic-Truck-Sharing",
  },
  {
    title: "Python Trading Bot",
    description: "A trading bot for Binance Futures Testnet.",
    tags: ["Python"],
    repo: "https://github.com/dayakar15/pythondevelopment_intern.git",
  },
  {
    title: "Cyber Crime Security",
    description: "Predictive analytics framework to forecast cybercrime.",
    tags: ["Python", "Data Analytics"],
    repo: "https://github.com/dayakar15/SIH-Hackathon.git",
  },
];

export const education = [
  { degree: "B.Tech", institution: "Your College Name", year: "2022-2026" },
];