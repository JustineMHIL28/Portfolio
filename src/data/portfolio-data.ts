// src/data/portfolio-data.ts

export interface OverviewItem {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

export interface Technology {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

export interface Project {
  id: number;
  name: string;
  subtitle?: string;
  image: string;
  subimage: string[];
  techimage: string[];
  link: string;
  description: string;
}

export interface PersonalProject {
  id: number;
  name: string;
  subtitle?: string;
  image: string;
  subimage: string[];
  techimage: string[];
  link: string;
  github?: string;
  description: string;
}

export interface Career {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  image: string;
  link: string;
  description: string;
  systemUsage: string;
  techStack: string[];
}

export interface SocialLink {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
}

// Helper function to get the correct path for assets
const getAssetPath = (path: string) => `${process.env.PUBLIC_URL}/${path}`;

export const overviewData: OverviewItem[] = [
  {
    id: 1,
    name: "Website Development",
    image: getAssetPath("assets/just-icon/website-development.png"),
    description: "Building websites from start to finish using various technologies.",
    link: "https://example.com/website-development"
  },
  {
    id: 2,
    name: "Software Development",
    image: getAssetPath("assets/just-icon/software-development-.png"),
    description: "Creating software applications for various platforms.",
    link: "https://example.com/software-development"
  },
  {
    id: 3,
    name: "Third-Party Integration",
    image: getAssetPath("assets/just-icon/thrid-party.png"),
    description: "Integrating third-party services and APIs into existing applications.",
    link: "https://example.com/third-party-integration"
  }
];

export const technologiesData: Technology[] = [
  // ========== FRONTEND ==========
  {
    id: 1,
    name: "HTML",
    image: getAssetPath("assets/dev-icon/html5.png"),
    description: "Markup language for creating web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    id: 2,
    name: "CSS",
    image: getAssetPath("assets/dev-icon/css.png"),
    description: "Style sheet language for beautifying web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    id: 3,
    name: "JavaScript",
    image: getAssetPath("assets/dev-icon/js.png"),
    description: "Programming language used in web development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: 4,
    name: "TypeScript",
    image: getAssetPath("assets/dev-icon/ts.png"),
    description: "A superset of JavaScript that provides static typing.",
    link: "https://www.typescriptlang.org/"
  },
  {
    id: 5,
    name: "React",
    image: getAssetPath("assets/dev-icon/react-js.png"),
    description: "JavaScript library for building user interfaces.",
    link: "https://reactjs.org/"
  },
  {
    id: 6,
    name: "AntDesign",
    image: getAssetPath("assets/dev-icon/ant-design.png"),
    description: "UI design language and React UI library providing pre-designed components.",
    link: "https://ant.design/"
  },
  {
    id: 7,
    name: "Shadcn",
    image: getAssetPath("assets/dev-icon/shadcn.png"),
    description: "Modern UI component library built with Tailwind CSS.",
    link: "https://ui.shadcn.com/docs/components"
  },

  // ========== BACKEND ==========
  {
    id: 8,
    name: "PHP",
    image: getAssetPath("assets/dev-icon/php.png"),
    description: "A popular server-side scripting language used for building dynamic web applications and APIs.",
    link: "https://www.php.net/"
  },
  {
    id: 9,
    name: "Node.js",
    image: getAssetPath("assets/dev-icon/node-js.png"),
    description: "JavaScript runtime used for server-side development.",
    link: "https://nodejs.org/"
  },
  {
    id: 10,
    name: "Laravel",
    image: getAssetPath("assets/dev-icon/laravel.png"),
    description: "PHP framework for building robust web applications.",
    link: "https://laravel.com/"
  },
  {
    id: 11,
    name: "MySql",
    image: getAssetPath("assets/dev-icon/mysql.png"),
    description: "Relational database management system for data storage.",
    link: "https://www.mysql.com/"
  },
  {
    id: 12,
    name: "MsSql",
    image: getAssetPath("assets/dev-icon/mssql.png"),
    description: "Database management system from Microsoft.",
    link: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
  },

  // ========== TOOLS ==========
  {
    id: 13,
    name: "Git",
    image: getAssetPath("assets/dev-icon/git.png"),
    description: "Version control system for tracking code changes.",
    link: "https://git-scm.com/"
  }
];

export const personalProjectsData: PersonalProject[] = [
  {
    id: 1,
    name: "PW - Portfolio Website",
    subtitle: "Personal Branding",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      getAssetPath("assets/project-icon/portfolio/portfolio-dashboard.png"),
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png")
    ],
    link: "",
    github: "https://github.com/JustineMHIL28/portfolio",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Features include smooth animations, dark mode support, project showcases with detailed descriptions, and an interactive contact form. Built with React, TypeScript, and Shadcn UI for a clean and professional look."
  },
  {
    id: 2,
    name: "DMS - Document Management System",
    subtitle: "File Organization",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      getAssetPath("assets/project-icon/dms/dms-dashboard.png"),
      getAssetPath("assets/project-icon/dms/dms-login.png"),
      getAssetPath("assets/project-icon/dms/dms-create.png"),
      getAssetPath("assets/project-icon/dms/dms-forgot.png"),
      getAssetPath("assets/project-icon/dms/dms-overview.png"),
      getAssetPath("assets/project-icon/dms/dms-document-index.png"),
      getAssetPath("assets/project-icon/dms/dms-document-add.png"),
      getAssetPath("assets/project-icon/dms/dms-document-preview-activity.png"),
      getAssetPath("assets/project-icon/dms/dms-annual-reports-index.png"),
      getAssetPath("assets/project-icon/dms/dms-annual-reports-preview.png"),
      getAssetPath("assets/project-icon/dms/dms-annual-reports-upload.png"),
      getAssetPath("assets/project-icon/dms/dms-checklist-report-index.png"),
      getAssetPath("assets/project-icon/dms/dms-schedule-report-index.png"),
      getAssetPath("assets/project-icon/dms/dms-schedule-report-add.png"),
      getAssetPath("assets/project-icon/dms/dms-category-index.png"),
      getAssetPath("assets/project-icon/dms/dms-category-add.png"),
      getAssetPath("assets/project-icon/dms/dms-department-index.png"),
      getAssetPath("assets/project-icon/dms/dms-department-add.png"),
      getAssetPath("assets/project-icon/dms/dms-users-index.png"),
      getAssetPath("assets/project-icon/dms/dms-users-add.png"),
      getAssetPath("assets/project-icon/dms/dms-users-permission.png"),
      getAssetPath("assets/project-icon/dms/dms-audit-index.png"),
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "",
    github: "https://github.com/JustineMHIL28/dms",
    description: "A comprehensive document management system for organizing, storing, and retrieving files efficiently. Features include file upload and download, folder organization, search functionality, version control, and user permissions. Built with React and integrated with cloud storage APIs for secure file management."
  },
    {
    id: 3,
    name: "TMS - Task Management System",
    subtitle: "Productivity Tool",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/node-js.png"),
      getAssetPath("assets/dev-icon/mysql.png")
    ],
    link: "",
    github: "https://github.com/JustineMHIL28/tms",
    description: "A full-stack task management application with drag-and-drop functionality, priority settings, and deadline tracking. Features include user authentication, real-time updates, task categorization, calendar view, and progress tracking. Built with React TypeScript frontend and Node.js backend with MySQL database."
  },
];

export const suppotingprojectsData: Project[] = [
  {
    id: 1,
    name: "ACCAS - Contract Management, Monitoring and Reporting System",
    subtitle: "Contract Tracking",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      getAssetPath("assets/project-icon/accas/accas-main-page.png"),
      getAssetPath("assets/project-icon/accas/accas-login-page.png"),
      getAssetPath("assets/project-icon/accas/accas-dashboard-page.png"),
      getAssetPath("assets/project-icon/accas/accas-branch-page.png"),
      getAssetPath("assets/project-icon/accas/accas-branch-add-page.png"),
      getAssetPath("assets/project-icon/accas/accas-branch-edit-page.png"),
      getAssetPath("assets/project-icon/accas/accas-copier-models-page.png"),
      getAssetPath("assets/project-icon/accas/accas-copier-models-add-page.png"),
      getAssetPath("assets/project-icon/accas/accas-copier-models-edit-page.png"),
      getAssetPath("assets/project-icon/accas/accas-customers-page.png"),
      getAssetPath("assets/project-icon/accas/accas-customers-add-page.png"),
      getAssetPath("assets/project-icon/accas/accas-customers-edit-page.png"),
      getAssetPath("assets/project-icon/accas/accas-equipment-page.png"),
      getAssetPath("assets/project-icon/accas/accas-equipment-add-page.png"),
      getAssetPath("assets/project-icon/accas/accas-equipment-edit-page.png"),
      getAssetPath("assets/project-icon/accas/accas-work-order-page.png"),
      getAssetPath("assets/project-icon/accas/accas-work-order-add-page.png"),
      getAssetPath("assets/project-icon/accas/accas-work-order-edit-page.png"),
      getAssetPath("assets/project-icon/accas/accas-report-meter-count-page.png")
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://dev.accas.able.com.pg/",
    description: "A comprehensive web application designed to streamline contract lifecycle management from creation to reporting. Features include contract creation and tracking, monitoring dashboards, automated reporting, branch management, customer relationship management, and equipment tracking. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 2,
    name: "ISLP - Internal Software License Portal",
    subtitle: "License Tracking",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      getAssetPath("assets/project-icon/islp/welcomePage.png"),
      getAssetPath("assets/project-icon/islp/login.png"),
      getAssetPath("assets/project-icon/islp/forgot.png"),
      getAssetPath("assets/project-icon/islp/dashboard.png"),
      getAssetPath("assets/project-icon/islp/branch.png"),
      getAssetPath("assets/project-icon/islp/branchCreate.png"),
      getAssetPath("assets/project-icon/islp/branchUpdate.png"),
      getAssetPath("assets/project-icon/islp/brandList.png"),
      getAssetPath("assets/project-icon/islp/categoryList.png"),
      getAssetPath("assets/project-icon/islp/customerList.png"),
      getAssetPath("assets/project-icon/islp/expiryNotifRules.png"),
      getAssetPath("assets/project-icon/islp/expiryNotifRulesCreate.png"),
      getAssetPath("assets/project-icon/islp/expiryNotifRulesUpdate.png"),
      getAssetPath("assets/project-icon/islp/expiryTracker.png"),
      getAssetPath("assets/project-icon/islp/licensesList.png"),
      getAssetPath("assets/project-icon/islp/licensesListCreate.png"),
      getAssetPath("assets/project-icon/islp/licensesUsageReport.png"),
      getAssetPath("assets/project-icon/islp/productList.png"),
      getAssetPath("assets/project-icon/islp/productListCreate.png"),
      getAssetPath("assets/project-icon/islp/productListUpdate.png"),
      getAssetPath("assets/project-icon/islp/requestForm.png"),
      getAssetPath("assets/project-icon/islp/requestFormCreate.png"),
      getAssetPath("assets/project-icon/islp/approve-reject-request.png"),
      getAssetPath("assets/project-icon/islp/softwareProductInvoice.png"),
      getAssetPath("assets/project-icon/islp/typeManagementList.png"),
      getAssetPath("assets/project-icon/islp/vendorList.png")
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://lms.able.com.pg/",
    description: "A comprehensive web application designed to manage and track software licenses efficiently. Features include license lifecycle management, request approval workflows, expiry tracking with automated notifications, vendor and product management, and detailed usage reporting. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 3,
    name: "AMS - Assets Management System",
    subtitle: "Asset Inventory",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      getAssetPath("assets/project-icon/ams/ams-login-page.png"),
      getAssetPath("assets/project-icon/ams/ams-dashboard-page.png"),
      getAssetPath("assets/project-icon/ams/ams-backup-page.png"),
      getAssetPath("assets/project-icon/ams/ams-import-page.png"),
      getAssetPath("assets/project-icon/ams/ams-requestable-item-page.png"),
      getAssetPath("assets/project-icon/ams/ams-settings-page.png"),
      getAssetPath("assets/project-icon/ams/ams-status-label-page.png"),
      getAssetPath("assets/project-icon/ams/ams-subscription-page.png")
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "https://ams.able.com.pg/login",
    description: "A comprehensive web application designed for asset tracking and management operations. Features include asset lifecycle management, backup functionality, data import and export capabilities, requestable items management, detailed status tracking, and comprehensive labeling. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 4,
    name: "EN - Engineer Inventory",
    subtitle: "Inventory Monitoring",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/js.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ant-design.png"),
      getAssetPath("assets/dev-icon/mssql.png"),
      getAssetPath("assets/dev-icon/node-js.png")
    ],
    link: "",
    description: "A comprehensive web application designed for engineering inventory tracking and management. Features include real-time inventory monitoring, automated stock level alerts, supplier management, procurement workflows, batch tracking, and advanced reporting capabilities. Built with React and JavaScript for the frontend, MS SQL for data storage, with Ant Design providing a modern interface."
  },
  {
    id: 5,
    name: "SCM - Supply Chain Management",
    subtitle: "Logistics Tracking",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/js.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ant-design.png"),
      getAssetPath("assets/dev-icon/mssql.png"),
      getAssetPath("assets/dev-icon/node-js.png")
    ],
    link: "",
    description: "A comprehensive web application designed to optimize supply chain operations from procurement to delivery. Features include inventory management, supplier relationship management, order processing, warehouse management, logistics tracking, real-time analytics, automated workflows, and demand forecasting. Built with React and JavaScript for the frontend, MS SQL for data storage, with Ant Design providing a modern interface."
  }
];

export const careerData: Career[] = [
  {
    id: 1,
    position: "Junior Developer",
    company: "Bangalow Pty. Ltd. Co.",
    location: "Papua New Guinea / Marand Family Resort – Bauang, La Union",
    duration: "April 2025 - January 2026",
    period: "10 months",
    image: getAssetPath("assets/company-icon/bangalow.jpg"),
    link: "https://www.linkedin.com/company/bangalow/posts/?feedView=all",
    description: "• Contributed to the development and maintenance of internal and client-facing web applications.\n• Assisted in implementing features, fixing bugs, and enhancing system performance.\n• Collaborated with senior developers to meet project requirements and deadlines.\n• Participated in code reviews and followed best practices for maintainable code.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "React", "TypeScript", "Laravel", "PHP", "ShadCN UI", "Tailwind CSS", "MySQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 2,
    position: "Junior Programmer",
    company: "Lloyd Laboratories, Inc.",
    location: "Malolos City, Bulacan",
    duration: "June 2023 - December 2023",
    period: "6 months",
    image: getAssetPath("assets/company-icon/lloyd-laboratoties-inc.jpeg"),
    link: "https://www.linkedin.com/company/lloyd-laboratories-inc/posts/?feedView=all",
    description: "• Built and maintained internal web applications for business operations.\n• Enhanced system features and resolved technical issues efficiently.\n• Worked closely with the development team to meet project milestones.\n• Applied coding best practices to ensure maintainable and reliable code.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "Ant Design", "React", "JavaScript", "Node.js", "Express.js", "MSSQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 3,
    position: "Software Engineer",
    company: "GP Next Solution, Inc.",
    location: "Quezon City",
    duration: "November 2021 - January 2023",
    period: "1 year & 2 months",
    image: getAssetPath("assets/company-icon/gp-next-solution-inc.png"),
    link: "https://www.linkedin.com/company/gp-next-inc/posts/?feedView=all",
    description: "• Designed, developed, and maintained web applications for external clients.\n• Built reusable and efficient front-end and back-end components.\n• Collaborated with cross-functional teams on UI, backend logic, and database design.\n• Ensured system reliability, performance, and code quality.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "Ant Design", "React", "JavaScript", "Node.js", "Express.js", "MSSQL", "RESTful APIs", "Git", "GitHub"]
  }
];

export const footerData: SocialLink[] = [
  {
    id: 2,
    name: "Gmail",
    image: getAssetPath("assets/social-icon/email.png"),
    link: "https://mail.google.com/mail/u/0/#inbox",
    description: "Contact me via email."
  },
  {
    id: 3,
    name: "Facebook",
    image: getAssetPath("assets/social-icon/facebook.png"),
    link: "https://www.facebook.com/JustineM1996",
    description: "Check out my profile on Facebook."
  },
  {
    id: 4,
    name: "GitHub",
    image: getAssetPath("assets/social-icon/github.png"),
    link: "https://github.com/JustineMHIL28",
    description: "Explore my projects on GitHub."
  },
  {
    id: 5,
    name: "Indeed",
    image: getAssetPath("assets/social-icon/indeed.webp"),
    link: "https://profile.indeed.com/p/justineh-4y483th",
    description: "Check out my profile on Indeed."
  },
  {
    id: 6,
    name: "LinkedIn",
    image: getAssetPath("assets/social-icon/linkin.png"),
    link: "https://www.linkedin.com/in/justine-m-hilario-432431359",
    description: "Check out my profile on LinkedIn."
  }
];