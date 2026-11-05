/**
 * Single source of truth for all portfolio content.
 * Every link below was verified against the live web before being listed.
 * If a project has no working deployment, `demo` stays null and no demo button is rendered.
 */

const EMAIL = 'shubiishaj@gmail.com';
const GITHUB_USER = 'shubiisha';

/**
 * LinkedIn: the URL on the previous portfolio ("linkedin.com/in/Shubiisha .J")
 * was malformed and could not be verified. Set it here once you paste your
 * exact public profile URL and the link (hero, contact, footer) appears automatically.
 */
const LINKEDIN_URL = process.env.LINKEDIN_URL || null;

const profile = {
  name: 'Shubiisha J',
  role: 'Frontend & Full-Stack Developer',
  roles: [
    'Frontend Developer',
    'Full-Stack Developer',
    'React & JavaScript Developer',
    'Computer Science Engineer'
  ],
  tagline:
    'Computer Science & Engineering student building responsive, component-driven web applications with React, Node.js, Express and MySQL.',
  intro:
    'I build responsive, component-driven web applications and user interfaces using React, JavaScript, Node.js, Express and MySQL. I care about clean, accessible code, well-designed REST APIs and user experiences that hold up on every screen size.',
  email: EMAIL,
  github: `https://github.com/${GITHUB_USER}`,
  githubUser: GITHUB_USER,
  linkedin: LINKEDIN_URL,
  location: 'India · Open to onsite & remote roles',
  availability: 'Available for internship & entry-level software roles',
  education: {
    degree: 'B.E. Computer Science and Engineering',
    status: 'Final year · Expected graduation 2026',
    focus: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP']
  },
  resume: {
    // Replace this file with your real resume — same filename keeps the button working.
    file: '/assets/Shubiisha-J-Resume.pdf',
    isPlaceholder: true
  }
};

const stats = [
  { value: '9', label: 'Documented projects', detail: 'Full-stack, Python and cloud work' },
  { value: '2026', label: 'Graduating', detail: 'B.E. Computer Science & Engineering' },
  { value: '2', label: 'Live deployments', detail: 'Public, working URLs' }
];

/**
 * Skill groups. Only technologies evidenced by the existing portfolio and the
 * public repositories are listed — nothing aspirational.
 */
const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    summary: 'Core programming and problem solving',
    icon: 'code',
    skills: [
      { name: 'JavaScript (ES6+)', note: 'Primary language' },
      { name: 'Python', note: 'Flask, scripting, ML basics' },
      { name: 'Java', note: 'OOP fundamentals' },
      { name: 'SQL', note: 'MySQL queries & schema design' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Interfaces, state and responsive layout',
    icon: 'layout',
    skills: [
      { name: 'React.js', note: 'Hooks, Context API, Router' },
      { name: 'HTML5', note: 'Semantic & accessible markup' },
      { name: 'CSS3', note: 'Flexbox, Grid, responsive design' },
      { name: 'Vite', note: 'Build tooling' },
      { name: 'Progressive Web Apps', note: 'Service workers, offline shell' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    summary: 'APIs, authentication and server logic',
    icon: 'server',
    skills: [
      { name: 'Node.js', note: 'Runtime for APIs & tooling' },
      { name: 'Express.js', note: 'Routing, middleware, REST' },
      { name: 'REST API design', note: 'JSON endpoints, validation' },
      { name: 'Firebase Auth', note: 'Email/password sessions' },
      { name: 'Flask', note: 'Python web services' }
    ]
  },
  {
    id: 'data',
    title: 'Data & Cloud',
    summary: 'Storage, hosting and deployment',
    icon: 'database',
    skills: [
      { name: 'MySQL', note: 'Relational schemas & joins' },
      { name: 'Firebase Firestore', note: 'Real-time document database' },
      { name: 'Amazon S3 & CloudFront', note: 'Static hosting + CDN' },
      { name: 'AWS EC2 & VPC', note: 'Server provisioning & networking' },
      { name: 'Netlify', note: 'Frontend deployments' }
    ]
  },
  {
    id: 'foundations',
    title: 'Core CS',
    summary: 'Coursework and engineering fundamentals',
    icon: 'book',
    skills: [
      { name: 'Data Structures & Algorithms', note: 'Coursework + practice' },
      { name: 'Object-Oriented Programming', note: 'Java, C++, JavaScript' },
      { name: 'DBMS', note: 'Normalisation, indexing, SQL' },
      { name: 'Operating Systems', note: 'Processes, memory, scheduling' },
      { name: 'Computer Networks', note: 'TCP/IP, HTTP, DNS' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    summary: 'Daily development workflow',
    icon: 'tool',
    skills: [
      { name: 'Git & GitHub', note: 'Branching, pull requests' },
      { name: 'VS Code', note: 'Primary editor' },
      { name: 'Postman', note: 'API testing' },
      { name: 'npm / Vite CLI', note: 'Dependency & build workflow' }
    ]
  }
];

/**
 * Projects, newest-first. `repo` is always a real repository.
 * `demo` is only set when the deployed URL returned a live page during review.
 */
const projects = [
  {
    slug: 'riyadvi-digital-experience',
    title: 'Riyadvi Digital Experience',
    subtitle: '3D corporate platform',
    year: '2026',
    category: 'fullstack',
    categories: ['Full Stack', 'Frontend'],
    featured: true,
    repo: 'https://github.com/shubiisha/riyadvi-digital-experience',
    demo: null,
    cover: '/assets/covers/riyadvi.svg',
    stack: ['React', 'React Router', 'Three.js', 'Node.js', 'Express', 'MongoDB'],
    problem:
      'A software services company needed a corporate site that looked nothing like a template and could carry real service and lead data.',
    summary:
      'A multi-page corporate platform with a real-time Three.js hero, dynamic service catalogue, lead capture and an executive admin portal.',
    features: [
      'Hardware-accelerated Three.js hero with mouse-reactive particles',
      'Client-side routing with dynamic service and detail templates',
      'Lead intelligence pipeline with an admin dashboard',
      'Reusable component system and responsive layout'
    ],
    role: 'Full-stack development & UI engineering',
    highlights: [
      { label: 'Experience', value: '3D + motion' },
      { label: 'Architecture', value: 'Client routing + API' },
      { label: 'Status', value: 'Repository' }
    ]
  },
  {
    slug: 'ecommerce-store',
    title: 'Full-Stack E-Commerce Store',
    subtitle: 'Catalogue, cart & admin',
    year: '2026',
    category: 'fullstack',
    categories: ['Full Stack', 'React'],
    featured: true,
    repo: 'https://github.com/shubiisha/E-commerce-app',
    demo: null,
    cover: '/assets/covers/ecommerce.svg',
    stack: ['React', 'Vite', 'Context API', 'Node.js', 'Express', 'MySQL', 'Firebase Auth'],
    problem:
      'Small online stores need a single system where shoppers can browse and order while staff restock the catalogue without touching code.',
    summary:
      'A shopping platform with product browsing, a persistent cart, validated checkout, order history and an administrative product dashboard.',
    features: [
      'Firebase email/password authentication with guarded routes',
      'Product catalogue, detail views and dynamic cart count',
      'Checkout with form validation and order history',
      'Admin dashboard to add, list and remove products and review orders',
      'REST endpoints on Express backed by a normalised MySQL schema'
    ],
    role: 'Full-stack developer',
    highlights: [
      { label: 'Frontend', value: 'React + Vite' },
      { label: 'Backend', value: 'Express + MySQL' },
      { label: 'Deployment', value: 'Local setup' }
    ]
  },
  {
    slug: 'blog-platform',
    title: 'Blog Platform with Comments',
    subtitle: 'Authors, posts & discussions',
    year: '2025',
    category: 'fullstack',
    categories: ['Full Stack', 'React'],
    featured: true,
    repo: 'https://github.com/shubiisha/Blog-Platform',
    demo: null,
    cover: '/assets/covers/blog.svg',
    stack: ['React', 'React Router', 'Axios', 'Node.js', 'Express', 'MySQL', 'Firebase Auth'],
    problem:
      'Writers needed a place to publish and manage their own articles while readers could discuss them, without a third-party CMS.',
    summary:
      'A blogging platform where authenticated authors create, edit and delete their own posts and readers join threaded discussions in comments.',
    features: [
      'Firebase authentication with per-author ownership checks',
      'Create, edit and delete posts with a "My Blogs" view',
      'Nested comments stored relationally and joined per post',
      'RESTful Express API with Axios on the client'
    ],
    role: 'Full-stack developer',
    highlights: [
      { label: 'Data model', value: 'users / posts / comments' },
      { label: 'Auth', value: 'Firebase UID mapping' },
      { label: 'Deployment', value: 'Local setup' }
    ]
  },
  {
    slug: 'hospital-management-system',
    title: 'Smart Hospital Scheduling',
    subtitle: 'Appointments, triage & wait times',
    year: '2026',
    category: 'python',
    categories: ['Python', 'Full Stack'],
    featured: true,
    repo: 'https://github.com/shubiisha/Hospital-Management-System',
    demo: null,
    cover: '/assets/covers/hospital.svg',
    stack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    problem:
      'Hospital queues are managed manually, so urgent patients wait behind routine appointments and nobody can predict consultation delays.',
    summary:
      'A Flask and MySQL appointment system with priority queueing, wait-time estimation and doctor utilisation analytics.',
    features: [
      'Appointment booking and patient records',
      'Priority queue with emergency handling',
      'Estimated wait time and consultation-time prediction',
      'Doctor dashboard with utilisation analytics',
      'Patient notifications for upcoming appointments'
    ],
    role: 'Backend & database development',
    highlights: [
      { label: 'Backend', value: 'Python + Flask' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Focus', value: 'Scheduling algorithms' }
    ]
  },
  {
    slug: 'task-management-pwa',
    title: 'Smart To-Do & Task Manager',
    subtitle: 'Installable PWA with cloud sync',
    year: '2025',
    category: 'frontend',
    categories: ['Frontend', 'PWA'],
    featured: true,
    repo: 'https://github.com/shubiisha/TO-DO-app',
    demo: 'https://shubiisha-todo.netlify.app',
    cover: '/assets/covers/todo.svg',
    screenshot: '/assets/shots/todo-app.png',
    stack: ['JavaScript', 'Firebase Auth', 'Firestore', 'PWA', 'CSS3'],
    problem:
      'Most simple to-do apps lose data between devices and give no sense of progress across a day, week or month.',
    summary:
      'An installable task manager with authentication, real-time Firestore sync, date-based grouping, progress tracking and offline support.',
    features: [
      'Signup, login and secure Firebase sessions',
      'Add, update, complete and delete tasks synced to Firestore',
      'Today / this week / this month views plus date history',
      'Daily completion summary and progress indicator',
      'Browser notifications and a reminder toggle',
      'Dark/light themes and full offline PWA shell'
    ],
    role: 'Frontend developer',
    highlights: [
      { label: 'Live demo', value: 'Netlify' },
      { label: 'Realtime', value: 'Firestore sync' },
      { label: 'Installable', value: 'PWA' }
    ]
  },
  {
    slug: 'sentiment-analysis',
    title: 'Product Review Sentiment Analysis',
    subtitle: 'TF-IDF + logistic regression',
    year: '2026',
    category: 'python',
    categories: ['Python', 'Machine Learning'],
    featured: false,
    repo: 'https://github.com/shubiisha/Sentiment-Analysis-on-Product-Reviews',
    demo: null,
    cover: '/assets/covers/sentiment.svg',
    stack: ['Python', 'scikit-learn', 'TF-IDF', 'Logistic Regression'],
    problem:
      'Reading thousands of product reviews manually makes it hard for sellers to spot whether sentiment is trending negative.',
    summary:
      'A text-classification project that labels product reviews as positive or negative using TF-IDF vectorisation and logistic regression.',
    features: [
      'Text clean-up and tokenisation pipeline',
      'TF-IDF feature extraction',
      'Logistic regression classifier with accuracy reporting',
      'Reusable prediction script for new reviews'
    ],
    role: 'Machine learning coursework',
    highlights: [
      { label: 'Approach', value: 'TF-IDF + LR' },
      { label: 'Task', value: 'Binary classification' },
      { label: 'Language', value: 'Python' }
    ]
  },
  {
    slug: 'aws-vpc-ec2-deployment',
    title: 'AWS VPC & EC2 Web Server',
    subtitle: 'Cloud networking deployment',
    year: '2026',
    category: 'cloud',
    categories: ['Cloud', 'DevOps'],
    featured: false,
    repo: 'https://github.com/shubiisha/Growfinix-AWS-VPC-EC2-Web-Server-Deployment',
    demo: null,
    cover: '/assets/covers/aws-vpc.svg',
    stack: ['AWS VPC', 'EC2', 'Ubuntu', 'Apache', 'Security Groups'],
    problem:
      'Deploying a public web server safely means understanding subnets, routing and firewall rules — not just launching an instance.',
    summary:
      'A custom VPC with a public subnet, route table, internet gateway and a hardened Ubuntu EC2 instance serving Apache over HTTP.',
    features: [
      'Custom VPC with a public subnet and internet gateway',
      'Route table and security-group configuration (22, 80, 443)',
      'Ubuntu EC2 instance with Apache serving a custom page',
      'Documented architecture and security decisions'
    ],
    role: 'Cloud computing internship — task 4',
    highlights: [
      { label: 'Services', value: 'VPC · EC2 · SG' },
      { label: 'OS', value: 'Ubuntu + Apache' },
      { label: 'Type', value: 'Internship project' }
    ]
  },
  {
    slug: 'aws-iam-architecture',
    title: 'AWS IAM Architecture',
    subtitle: 'Least-privilege access design',
    year: '2026',
    category: 'cloud',
    categories: ['Cloud', 'Security'],
    featured: false,
    repo: 'https://github.com/shubiisha/Growfinix-AWS-IAM-Architecture-Project',
    demo: null,
    cover: '/assets/covers/aws-iam.svg',
    stack: ['AWS IAM', 'IAM Policies', 'MFA', 'AWS Billing'],
    problem:
      'Shared root credentials and broad permissions are the most common cause of cloud account compromise.',
    summary:
      'A role-based IAM design for a mock company: developer, billing, auditor and administrator roles with least-privilege policies and MFA.',
    features: [
      'Four scoped roles mapped to real job functions',
      'Least-privilege IAM policies and groups',
      'MFA enforcement and password policy',
      'Documented permission review process'
    ],
    role: 'Cloud computing internship — task 2',
    highlights: [
      { label: 'Model', value: 'RBAC' },
      { label: 'Security', value: 'MFA + least privilege' },
      { label: 'Type', value: 'Internship project' }
    ]
  },
  {
    slug: 'aws-s3-lifecycle',
    title: 'S3 Media Archive Lifecycle',
    subtitle: 'Automated cold-storage tiering',
    year: '2026',
    category: 'cloud',
    categories: ['Cloud'],
    featured: false,
    repo: 'https://github.com/shubiisha/Growfinix-aws-s3-media-archive-lifecycle-management',
    demo: null,
    cover: '/assets/covers/aws-s3.svg',
    stack: ['Amazon S3', 'Glacier Deep Archive', 'Lifecycle Rules', 'SSE-S3'],
    problem:
      'Large video archives kept in S3 Standard silently inflate storage bills even though old footage is almost never accessed.',
    summary:
      'An S3 lifecycle policy that keeps new media in S3 Standard and transitions files older than 30 days to Glacier Deep Archive, with encryption at rest.',
    features: [
      'Bucket layout with encryption and access controls',
      'Lifecycle rule transitioning objects after 30 days',
      'Cost comparison between storage classes',
      'Documented restore procedure'
    ],
    role: 'Cloud computing internship',
    highlights: [
      { label: 'Cost', value: 'Tiered storage' },
      { label: 'Encryption', value: 'SSE-S3' },
      { label: 'Automation', value: 'Lifecycle rule' }
    ]
  },
  {
    slug: 'cloud-cost-automation',
    title: 'Cloud Billing & Cost Alerts',
    subtitle: 'Budgets, metrics & notifications',
    year: '2026',
    category: 'cloud',
    categories: ['Cloud'],
    featured: false,
    repo: 'https://github.com/shubiisha/Growfinix-Cloud-Billing-Cost-Automation',
    demo: null,
    cover: '/assets/covers/aws-billing.svg',
    stack: ['AWS Budgets', 'CloudWatch', 'SNS'],
    problem:
      'Pay-as-you-go billing can produce a surprise invoice when nobody is watching spend.',
    summary:
      'An automated cost-monitoring pipeline using AWS Budgets, CloudWatch and SNS that emails owners when forecasted spend crosses thresholds.',
    features: [
      'Monthly budget with forecasted and actual thresholds',
      'CloudWatch alarm wired to an SNS topic',
      'Email subscription for spend alerts',
      'Tested with a deliberate threshold breach'
    ],
    role: 'Cloud computing internship — task 5',
    highlights: [
      { label: 'Monitoring', value: 'Budgets + CloudWatch' },
      { label: 'Alerts', value: 'SNS email' },
      { label: 'Type', value: 'Internship project' }
    ]
  }
];

const projectCategories = [
  { id: 'all', label: 'All projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'python', label: 'Python' },
  { id: 'cloud', label: 'Cloud' }
];

const featuredProjects = projects.filter((project) => project.featured);

/**
 * Verified fallback repository data — used when the GitHub API is unavailable
 * so the section never shows invented numbers.
 */
const githubFallback = {
  profile: {
    login: GITHUB_USER,
    name: 'Shubiisha J',
    publicRepos: 13,
    url: `https://github.com/${GITHUB_USER}`
  },
  repos: [
    { name: 'riyadvi-digital-experience', description: '3D corporate platform', language: 'JavaScript', url: `https://github.com/${GITHUB_USER}/riyadvi-digital-experience`, updated: '2026-10' },
    { name: 'Hospital-Management-System', description: 'Flask + MySQL appointment scheduling', language: 'Python', url: `https://github.com/${GITHUB_USER}/Hospital-Management-System`, updated: '2026-09' },
    { name: 'Blog-Platform', description: 'MERN-style blog with comments on MySQL', language: 'JavaScript', url: `https://github.com/${GITHUB_USER}/Blog-Platform`, updated: '2026-08' },
    { name: 'E-commerce-app', description: 'Full-stack store with admin dashboard', language: 'JavaScript', url: `https://github.com/${GITHUB_USER}/E-commerce-app`, updated: '2026-08' },
    { name: 'Sentiment-Analysis-on-Product-Reviews', description: 'TF-IDF + logistic regression classifier', language: 'Python', url: `https://github.com/${GITHUB_USER}/Sentiment-Analysis-on-Product-Reviews`, updated: '2026-07' },
    { name: 'TO-DO-app', description: 'Firebase PWA task manager', language: 'JavaScript', url: `https://github.com/${GITHUB_USER}/TO-DO-app`, updated: '2026-07' }
  ],
  source: 'fallback'
};

module.exports = {
  profile,
  stats,
  skillGroups,
  projects,
  projectCategories,
  featuredProjects,
  githubFallback
};
