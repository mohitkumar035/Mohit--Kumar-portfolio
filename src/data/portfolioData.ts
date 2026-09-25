import { PersonalInfo, SkillItem, ProjectItem, JourneyMilestone, CodingProfile } from '../types/portfolio';

export const initialPersonalInfo: PersonalInfo = {
  name: 'Mohit Kumar',
  role: 'Web Developer & B.Tech Student',
  headline: 'Web Developer | B.Tech 3rd Year Student | DSA & Programming Enthusiast',
  status: 'B.Tech 3rd Year Student',
  bio: "I'm a passionate developer who loves building modern websites and applications while continuously improving my skills in Data Structures, Algorithms, Java, and C++.",
  degree: 'B.Tech in Computer Science & Engineering',
  currentYear: '3rd Year (6th Semester)',
  collegeName: 'YOUR_COLLEGE_NAME', // Placeholder easily customizable
  university: 'YOUR_UNIVERSITY_NAME', // Placeholder easily customizable
  graduationYear: '2027', // Placeholder
  cgpa: 'YOUR_CGPA (e.g. 8.2 / 10)', // Placeholder
  email: 'mohitkumar70350@gmail.com', // Pre-populated or customizable
  phone: '+91 YOUR_PHONE_NUMBER', // Placeholder
  location: 'India (Open to Remote & On-Site)',
  githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',
  linkedinUrl: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
  leetcodeUrl: 'https://leetcode.com/u/YOUR_LEETCODE_USERNAME',
  hackerrankUrl: 'https://hackerrank.com/YOUR_HACKERRANK_USERNAME',
  geeksforgeeksUrl: 'https://geeksforgeeks.org/user/YOUR_GFG_USERNAME',
  availableFor: 'Internships & Freelance Web Projects',
};

export const skillsData: SkillItem[] = [
  // Web Development
  {
    name: 'HTML5',
    category: 'web',
    status: 'Working Knowledge',
    iconName: 'FileCode',
    description: 'Semantic markup, accessibility standards, SEO structure, modern document outline.',
  },
  {
    name: 'CSS3',
    category: 'web',
    status: 'Working Knowledge',
    iconName: 'Palette',
    description: 'Flexbox, Grid systems, modern styling, CSS variables, transitions & keyframe animations.',
  },
  {
    name: 'JavaScript',
    category: 'web',
    status: 'Working Knowledge',
    iconName: 'Braces',
    description: 'DOM manipulation, ES6+ syntax, asynchronous programming, fetch API, event handling.',
  },
  {
    name: 'Responsive Web Design',
    category: 'web',
    status: 'Working Knowledge',
    iconName: 'Layout',
    description: 'Mobile-first workflows, media queries, adaptive typography, cross-device compatibility.',
  },
  {
    name: 'Git',
    category: 'web',
    status: 'Working Knowledge',
    iconName: 'GitBranch',
    description: 'Version control workflow, commit discipline, branch management, merge conflict resolution.',
  },
  {
    name: 'GitHub',
    category: 'web',
    status: 'Familiar',
    iconName: 'FolderGit2',
    description: 'Remote repository hosting, pull requests, project tracking, GitHub Pages deployment.',
  },

  // Programming
  {
    name: 'Java',
    category: 'programming',
    status: 'Practicing',
    iconName: 'Coffee',
    description: 'Core Java syntax, classes, inheritance, polymorphism, encapsulation, exception handling.',
  },
  {
    name: 'C++',
    category: 'programming',
    status: 'Practicing',
    iconName: 'Terminal',
    description: 'Standard Template Library (STL), pointers & references, memory model, fast I/O.',
  },
  {
    name: 'Problem Solving',
    category: 'programming',
    status: 'Practicing',
    iconName: 'Lightbulb',
    description: 'Algorithmic analysis, decomposing complex challenges into clean structured code.',
  },

  // Computer Science
  {
    name: 'Data Structures & Algorithms',
    category: 'cs',
    status: 'Currently Learning',
    iconName: 'Binary',
    description: 'Arrays, Strings, Linked Lists, Stacks, Queues, Sorting & Searching, time complexity.',
  },
  {
    name: 'Object-Oriented Programming',
    category: 'cs',
    status: 'Familiar',
    iconName: 'Boxes',
    description: 'OOP pillars: Abstraction, Encapsulation, Inheritance, Polymorphism, modular architecture.',
  },
  {
    name: 'Basic Database Concepts',
    category: 'cs',
    status: 'Familiar',
    iconName: 'Database',
    description: 'Relational data modeling, SQL queries (SELECT, INSERT, UPDATE), tables, primary & foreign keys.',
  },
  {
    name: 'Basic Computer Networks',
    category: 'cs',
    status: 'Familiar',
    iconName: 'Network',
    description: 'OSI & TCP/IP models, HTTP/HTTPS protocols, IP addressing, DNS resolution basics.',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'business-website',
    title: 'Modern Business Website',
    subtitle: 'Responsive Corporate & Services Showcase',
    description:
      'A sleek, responsive multi-section business website created for a real-world company. Features modern hero layout, structured service breakdown, interactive quote estimator, and optimized responsive mobile view.',
    image: '/src/assets/images/project_business_web_1790349825171.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/business-website',
    demoUrl: '#',
    isPlaceholder: true,
    category: 'web',
    features: [
      'Fully responsive mobile-first grid layout',
      'Interactive pricing & service quote calculator',
      'Accessible navigation bar with mobile slide drawer',
      'Optimized performance with zero heavy external runtime dependencies',
      'Clean modular CSS architecture with reusable variables'
    ],
  },
  {
    id: 'gym-website',
    title: 'Elite Fitness & Gym Website',
    subtitle: 'Health Club Portal with Interactive Features',
    description:
      'A premium responsive gym website featuring training programs, class schedules, interactive trainer profile gallery, member testimonials, contact inquiry form, and embedded Google Maps integration.',
    image: '/src/assets/images/project_gym_fitness_1790349843176.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API'],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/gym-fitness-website',
    demoUrl: '#',
    isPlaceholder: true,
    category: 'web',
    features: [
      'Interactive weekly class timetable with category filter',
      'Trainer showcase with hover effect cards and specialty tags',
      'Working lead capture membership inquiry form',
      'Embedded responsive interactive Google Maps view',
      'Dynamic testimonial carousel'
    ],
  },
  {
    id: 'developer-project',
    title: 'Data Structures & Algorithm Visualizer',
    subtitle: 'Interactive Sorting & Search Simulation',
    description:
      'A core developer project exploring Data Structures and Algorithms with visual animations. Demonstrates sorting algorithms (Bubble, Selection, Insertion, Merge Sort) and step-by-step element comparisons.',
    image: '/src/assets/images/project_algorithm_viz_1790349859501.jpg',
    technologies: ['Java / C++', 'JavaScript', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/dsa-algorithm-visualizer',
    demoUrl: '#',
    isPlaceholder: true,
    category: 'dsa',
    features: [
      'Real-time visualization of sorting algorithms with color-coded states',
      'Configurable array size and animation speed controls',
      'Step-by-step comparison counter and time complexity displays',
      'Grounded in OOP and data structure implementation fundamentals',
      'Extensible architecture ready for Tree & Graph traversal visualizations'
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    title: 'Started Programming Fundamentals',
    phase: 'Foundation',
    description:
      'Began coding journey with foundational computer science concepts, control flow, loops, functions, and logic-building problem sets.',
    status: 'Completed',
    highlights: ['Logic building', 'Basic algorithms', 'Syntax mastery'],
  },
  {
    title: 'Stepped into Web Development',
    phase: 'Frontend',
    description:
      'Learned HTML5 semantic architecture and modern CSS3 (Flexbox, CSS Grid). Focused on understanding layout math and building responsive pages that look sharp on any screen size.',
    status: 'Completed',
    highlights: ['Semantic HTML', 'CSS Flexbox & Grid', 'Mobile-first design'],
  },
  {
    title: 'Built Real-World Websites & Projects',
    phase: 'Practice & Projects',
    description:
      'Turned concepts into real, working websites including business showcase pages, gym club platforms, and personal developer tools with vanilla JavaScript.',
    status: 'Completed',
    highlights: ['DOM manipulation', 'Event-driven apps', 'Git version control'],
  },
  {
    title: 'Started Learning Java & OOP',
    phase: 'Core Programming',
    description:
      'Deepened programming knowledge through Java. Mastered Object-Oriented Programming (Encapsulation, Inheritance, Polymorphism, Abstraction) and clean class design.',
    status: 'Practicing',
    highlights: ['OOP paradigms', 'Java collections', 'Class architecture'],
  },
  {
    title: 'Practicing C++ & Standard Template Library',
    phase: 'Competitive Coding',
    description:
      'Adopted C++ for high-performance computing and problem solving. Exploring STL vectors, pairs, maps, sets, pointers, and memory mechanics.',
    status: 'Practicing',
    highlights: ['C++ STL', 'Pointers & memory', 'Fast I/O'],
  },
  {
    title: 'Currently Studying Data Structures & Algorithms',
    phase: 'Active Focus',
    description:
      'Actively practicing DSA fundamentals: Arrays, Strings, Two Pointers, Linked Lists, Stacks, Queues, Sorting & Searching techniques, and Big-O complexity analysis.',
    status: 'In Progress',
    highlights: ['Time & Space Complexity', 'Array & String manipulation', 'Recursive thinking'],
  },
  {
    title: 'Continuously Building & Preparing for Opportunities',
    phase: 'Future & Industry Ready',
    description:
      'Building real-world web projects, refining problem-solving skills, and preparing for tech internships and client freelance opportunities.',
    status: 'Continuous',
    highlights: ['Internship readiness', 'Freelance client work', 'Clean code discipline'],
  },
];

export const learningTopics = [
  {
    name: 'Arrays & Two-Pointers',
    status: 'Practicing',
    description: 'Prefix sums, sliding window, element reordering, target sums.',
  },
  {
    name: 'Strings & Pattern Searching',
    status: 'Practicing',
    description: 'Anagram checks, palindrome verification, substring parsing.',
  },
  {
    name: 'Linked Lists',
    status: 'Currently Learning',
    description: 'Singly & doubly linked lists, reversal, cycle detection (Floyd\'s algorithm).',
  },
  {
    name: 'Stacks & Queues',
    status: 'Currently Learning',
    description: 'LIFO & FIFO mechanics, monotonic stack, parentheses matching.',
  },
  {
    name: 'Recursion & Backtracking',
    status: 'Currently Learning',
    description: 'Recursive call stacks, base cases, tree branching fundamentals.',
  },
  {
    name: 'Sorting & Searching',
    status: 'Practicing',
    description: 'Binary search variants, Bubble, Merge sort divide-and-conquer logic.',
  },
  {
    name: 'OOP in Java & C++',
    status: 'Practicing',
    description: 'Inheritance hierarchies, abstract classes, interfaces, method overriding.',
  },
  {
    name: 'Time & Space Complexity (Big-O)',
    status: 'Practicing',
    description: 'Analyzing algorithm efficiency, asymptotic notation, optimizing bottlenecks.',
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'GitHub',
    handleOrUrl: 'YOUR_GITHUB_URL',
    description: 'Source code repositories, web projects, and open-source learning commits.',
    iconType: 'github',
    color: '#38bdf8',
  },
  {
    platform: 'LinkedIn',
    handleOrUrl: 'YOUR_LINKEDIN_URL',
    description: 'Professional network, B.Tech academic updates, and developer connections.',
    iconType: 'linkedin',
    color: '#0ea5e9',
  },
  {
    platform: 'LeetCode',
    handleOrUrl: 'YOUR_LEETCODE_URL',
    description: 'Practicing Data Structures and Algorithms problem sets in C++ and Java.',
    iconType: 'leetcode',
    color: '#f59e0b',
  },
  {
    platform: 'HackerRank',
    handleOrUrl: 'YOUR_HACKERRANK_URL',
    description: 'Problem solving badges, language proficiency exercises, and coding challenges.',
    iconType: 'hackerrank',
    color: '#10b981',
  },
  {
    platform: 'GeeksforGeeks',
    handleOrUrl: 'YOUR_GEEKSFORGEEKS_URL',
    description: 'Computer Science theory, practice questions, and DSA article implementations.',
    iconType: 'gfg',
    color: '#22c55e',
  },
];
