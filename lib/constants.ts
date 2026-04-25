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

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'software' | 'soft' | 'language';
}

export const skills: Skill[] = [
  { name: "HTML", level: 9, category: "technical" },
  { name: "CSS", level: 8, category: "technical" },
  { name: "JavaScript", level: 7, category: "technical" },
  { name: "React", level: 7, category: "technical" },
  { name: "Next.js", level: 6, category: "technical" },
  { name: "Python", level: 8, category: "technical" },
  { name: "Django", level: 7, category: "technical" },
  { name: "Git & GitHub", level: 7, category: "software" },
  { name: "VS Code", level: 9, category: "software" },
  { name: "Linux", level: 6, category: "software" },
  { name: "Communication", level: 8, category: "soft" },
  { name: "Problem Solving", level: 9, category: "soft" },
  { name: "Team Work", level: 8, category: "soft" },
  { name: "English", level: 9, category: "language" },
  { name: "Telugu", level: 10, category: "language" },
  { name: "Hindi", level: 7, category: "language" },
];

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
    phone: 'tel:+916304376769',
    email: 'mailto:23ra1a6621@kprtech.ac.in',
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

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  achievements: string[];
}

export const education: Education[] = [
  {
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    institution: "KPR Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    startDate: "2022",
    endDate: "2026",
    gpa: "8.5",
    achievements: [
      "Participated in Smart India Hackathon 2024",
      "Active member of coding club",
      "Completed multiple online certifications",
    ],
  },
];

