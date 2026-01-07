import { Linkedin, Mail, Instagram, Dribbble, Globe } from "lucide-vue-next";

export const personalInfo = {
  name: "Onisuru Boluwatife",
  role: "Full-Stack Product Designer",
  location: "Lagos, Nigeria",
  email: "onisuruboluwatife1@gmail.com",
  phone: "+234 706 167 1646",
  summary:
    "I’m a Full-Stack Product Designer with over 2 years of experience building digital products from discovery to delivery. I translate user needs and business goals into clear & scalable design solutions across web and mobile. My core attributes are Detail-oriented | Strategic | Collaboration.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/onisuru-boluwatife",
      icon: Linkedin,
    },
    {
      name: "Behance",
      url: "https://www.behance.net/boluwatonisuru",
      icon: Globe, // Behance icon not standard in Lucide, using Globe as fallback
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/xx_teefe",
      icon: Dribbble,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/design_with_teefe/",
      icon: Instagram,
    },
    {
      name: "Email",
      url: "mailto:onisuruboluwatife1@gmail.com",
      icon: Mail,
    },
  ],
};

export const hero = {
  greeting: "Hi 👋",
  intro: "I'm Boluwatife",
  headline:
    "I translate user needs and business goals into clear & scalable design solutions.",
  subheadline: "Full-Stack Product Designer. Strategic. Detail-oriented.",
};

export interface Project {
  id: string;
  year: string;
  category: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  link: string;
  details?: {
    problem: string;
    solution: string;
    impact: string;
    images?: string[]; // Placeholders for now
  };
}

export const projects: Project[] = [
  {
    id: "transactx",
    year: "2023 - Present",
    category: "Fintech ・ Product Design",
    title: "TransactX: Real-time transaction monitoring & wallet management",
    description:
      "Led end-to-end product design for a financial platform supporting 180+ beta testers. Designed 40+ high-fidelity interfaces and directed brand aesthetics.",
    stats: [
      { value: "180+", label: "Active Beta Testers" },
      { value: "40+", label: "Hi-Fi Screens" },
    ],
    link: "#",
    details: {
      problem:
        "Users struggled to track real-time transactions across multiple accounts, leading to financial oversight and lack of trust in digital wallet systems.",
      solution:
        "Designed a unified dashboard with real-time websocket updates, clear visual categorizations for transactions, and an intuitive wallet management system.",
      impact:
        "Grew social engagement to 150+ followers and supported an active beta testing group of over 180 users with positive feedback on usability.",
    },
  },
  {
    id: "fitflex",
    year: "2025",
    category: "Agency ・ Web Design",
    title: "FitFlex: Rapid delivery for fitness brand",
    description:
      "Delivered website design in 1 week against a 3-week timeline with zero revisions, accelerating delivery by ~65%.",
    stats: [
      { value: "65%", label: "Faster Delivery" },
      { value: "0", label: "Revision Requests" },
    ],
    link: "#",
    details: {
      problem:
        "The client needed a high-impact launch site for a new fitness brand but had a tight deadline and undefined visual direction.",
      solution:
        "Developed a bold, energetic visual identity and design system rapidly, utilizing component-based workflows to ensure consistency and speed.",
      impact:
        "delivered the complete design in 1 week (vs 3-week deadline) with zero client revisions, allowing the development team to start early.",
    },
  },
  {
    id: "alayo",
    year: "2025",
    category: "E-commerce ・ Web Design",
    title: "Alayo: Boosting e-commerce conversion",
    description:
      "Contributed to e-commerce website design, generating 15 new customers and 22+ orders within 6 weeks of launch.",
    stats: [
      { value: "22+", label: "New Orders" },
      { value: "6w", label: "Post-launch Growth" },
    ],
    link: "#",
    details: {
      problem:
        "Alayo's previous online presence was fragmented, leading to high bounce rates and low conversion for their unique product line.",
      solution:
        "Redesigned the user journey to focus on storytelling and product value, simplifying the checkout process to fewer steps.",
      impact:
        "Generated 15 new customers and 22+ orders within just 6 weeks of launch, validating the new design strategy.",
    },
  },
  {
    id: "buckstrybe",
    year: "2023",
    category: "Fintech ・ Community Savings",
    title: "BucksTrybe: Digitizing traditional thrift savings",
    description:
      "Designed core experiences for a fintech app digitizing Ajo savings. Launched 18 active savings plans in first 7 months.",
    stats: [
      { value: "200+", label: "Screens Designed" },
      { value: "18", label: "Plans Launched" },
    ],
    link: "#",
    details: {
      problem:
        "Traditional thrift savings (Ajo) are manual, prone to fraud, and lack transparency for participants.",
      solution:
        "Digitized the entire lifecycle of communal savings, adding features for voting, transparency, and automated reminders.",
      impact:
        "Launched 18 active savings plans in the first 7 months and helped build credibility to secure initial investment.",
    },
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  details?: {
    responsibilities: string[];
    achievements: string[];
  };
}

export const experience: Experience[] = [
  {
    company: "Oxgital",
    role: "Product Designer",
    period: "Jan 2025 - Dec 2025",
    location: "Lagos, NG",
    description:
      "Designed and shipped 10+ digital products across fintech, lifestyle, and consumer brands. Sourced new business resulting in 4 new clients.",
    details: {
      responsibilities: [
        "Led end-to-end design on multiple client projects, collaborating with PMs and engineers.",
        "Proactively sourced new business by redesigning underperforming websites and presenting improved variants.",
        "Designed 6+ production-ready interfaces supporting live products.",
      ],
      achievements: [
        "Acquired 4 new clients within 5 months through proactive redesign pitches.",
        "Contributed consistently to year-to-date company revenue by at least 21%.",
        "Shipped 10+ digital products across various sectors.",
      ],
    },
  },
  {
    company: "HighTable",
    role: "Product Designer (Volunteering)",
    period: "April 2024 - Sept 2024",
    location: "Remote",
    description:
      "Collaborated to design a mobile web app for dining experiences. Designed 30+ key screens and supported design system development.",
    details: {
      responsibilities: [
        "Collaborated with a cross-functional design team of 3+ designers.",
        "Designed over 30 key product screens including onboarding, discovery, and booking flows.",
        "Supported the development of a consistent design system (colors, typography, components).",
      ],
      achievements: [
        "Improved overall usability and navigation clarity for the mobile web app.",
        "Reduced design inconsistencies and sped up iteration cycles.",
      ],
    },
  },
  {
    company: "TransactX",
    role: "Product Designer & Social Media Manager",
    period: "Jul 2023 - Present",
    location: "Lagos, NG",
    description:
      "Leading product design and brand presence. Conducted market research and designed core platform functionality.",
    details: {
      responsibilities: [
        "Led end-to-end product design for real-time transaction monitoring and wallet management.",
        "Conducted market and competitive research to inform product positioning.",
        "Directed brand aesthetic and online presence across social channels.",
      ],
      achievements: [
        "Supported an active beta of 180+ testers with 40+ high-fidelity interfaces.",
        "Grew social engagement to 150+ followers in the first 3 months.",
      ],
    },
  },
  {
    company: "BucksTrybe",
    role: "Product Designer",
    period: "May 2023 - Dec 2023",
    location: "Lagos, NG",
    description:
      "Designed end-to-end user flows for communal savings features. Maintained 200+ product screens.",
    details: {
      responsibilities: [
        "Designed core user experiences for digitizing traditional thrift (Ajo) savings.",
        "Collaborated within a 2-person product team on end-to-end flows.",
        "Designed complex communal savings features like voting mechanisms and approval workflows.",
      ],
      achievements: [
        "Designed and maintained 200+ product screens.",
        "Launched 18 active savings plans in the first 7 months, leading to initial investment.",
      ],
    },
  },
];

export const skills = {
  core: [
    "Product Design (End-to-End UX/UI)",
    "User & Market Research",
    "Wireframing & Prototyping",
    "Design Systems",
    "Interaction Design",
    "Usability Testing",
  ],
  tools: ["Figma", "FigJam", "WordPress"],
};

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Senior Product Manager",
    company: "Oxgital",
    text: "Boluwatife has an exceptional ability to translate complex requirements into intuitive designs. His attention to detail and strategic approach significantly improved our product's user experience.",
  },
  {
    name: "Dada Akinlawon",
    role: "Founder",
    company: "TransactX",
    text: "Boluwatife makes a real impact at TransactX by consistently turning complex ideas into designs that are easy to understand and use. She brings creativity, strong attention to detail, and a collaborative spirit to the team, and continues to help us build a more intuitive and user-friendly product.",
  },
  {
    name: "Tope Akande",
    role: "CEO & Co-founder",
    company: "BucksTrybe",
    text: "Boluwatife joined Buckstrybe during an integral part of our product development at Buckstrybe and made valuable contributions from product design to design solution architecture and user research. She was active in team meetings and supported social media and content developments. She remains a great part of the Buckstrybe story as her impact is still felt in the company.",
  },
];
