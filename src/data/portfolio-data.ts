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

export const overviewData: OverviewItem[] = [
  {
    id: 1,
    name: "Website Development",
    image: "assets/just-icon/website-development.png",
    description: "Building websites from start to finish using various technologies.",
    link: "https://example.com/website-development"
  },
  {
    id: 2,
    name: "Software Development",
    image: "assets/just-icon/software-development-.png",
    description: "Creating software applications for various platforms.",
    link: "https://example.com/software-development"
  },
  {
    id: 3,
    name: "Third-Party Integration",
    image: "assets/just-icon/thrid-party.png",
    description: "Integrating third-party services and APIs into existing applications.",
    link: "https://example.com/third-party-integration"
  }
];

export const technologiesData: Technology[] = [
  // ========== FRONTEND ==========
  {
    id: 1,
    name: "HTML",
    image: "assets/dev-icon/html5.png",
    description: "Markup language for creating web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    id: 2,
    name: "CSS",
    image: "assets/dev-icon/css.png",
    description: "Style sheet language for beautifying web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    id: 3,
    name: "JavaScript",
    image: "assets/dev-icon/js.png",
    description: "Programming language used in web development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: 4,
    name: "TypeScript",
    image: "assets/dev-icon/ts.png",
    description: "A superset of JavaScript that provides static typing.",
    link: "https://www.typescriptlang.org/"
  },
  {
    id: 5,
    name: "React",
    image: "assets/dev-icon/react-js.png",
    description: "JavaScript library for building user interfaces.",
    link: "https://reactjs.org/"
  },
  {
    id: 6,
    name: "AntDesign",
    image: "assets/dev-icon/ant-design.png",
    description: "UI design language and React UI library providing pre-designed components.",
    link: "https://ant.design/"
  },
  {
    id: 7,
    name: "Shadcn",
    image: "assets/dev-icon/shadcn.png",
    description: "Modern UI component library built with Tailwind CSS.",
    link: "https://ui.shadcn.com/docs/components"
  },

  // ========== BACKEND ==========
  {
    id: 8,
    name: "PHP",
    image: "assets/dev-icon/php.png",
    description: "A popular server-side scripting language used for building dynamic web applications and APIs.",
    link: "https://www.php.net/"
  },
  {
    id: 9,
    name: "Node.js",
    image: "assets/dev-icon/node-js.png",
    description: "JavaScript runtime used for server-side development.",
    link: "https://nodejs.org/"
  },
  {
    id: 10,
    name: "Laravel",
    image: "assets/dev-icon/laravel.png",
    description: "PHP framework for building robust web applications.",
    link: "https://laravel.com/"
  },
  {
    id: 11,
    name: "MySql",
    image: "assets/dev-icon/mysql.png",
    description: "Relational database management system for data storage.",
    link: "https://www.mysql.com/"
  },
  {
    id: 12,
    name: "MsSql",
    image: "assets/dev-icon/mssql.png",
    description: "Database management system from Microsoft.",
    link: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
  },

  // ========== TOOLS ==========
  {
    id: 13,
    name: "Git",
    image: "assets/dev-icon/git.png",
    description: "Version control system for tracking code changes.",
    link: "https://git-scm.com/"
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    name: "ACCAS - Contract Management, Monitoring and Reporting System",
    subtitle: "Internal",
    image: "assets/project-icon/soon.png",
    subimage: [
      "assets/project-icon/accas/accas-main-page.png",
      "assets/project-icon/accas/accas-login-page.png",
      "assets/project-icon/accas/accas-dashboard-page.png",
      "assets/project-icon/accas/accas-branch-page.png",
      "assets/project-icon/accas/accas-branch-add-page.png",
      "assets/project-icon/accas/accas-branch-edit-page.png",
      "assets/project-icon/accas/accas-copier-models-page.png",
      "assets/project-icon/accas/accas-copier-models-add-page.png",
      "assets/project-icon/accas/accas-copier-models-edit-page.png",
      "assets/project-icon/accas/accas-customers-page.png",
      "assets/project-icon/accas/accas-customers-add-page.png",
      "assets/project-icon/accas/accas-customers-edit-page.png",
      "assets/project-icon/accas/accas-equipment-page.png",
      "assets/project-icon/accas/accas-equipment-add-page.png",
      "assets/project-icon/accas/accas-equipment-edit-page.png",
      "assets/project-icon/accas/accas-work-order-page.png",
      "assets/project-icon/accas/accas-work-order-add-page.png",
      "assets/project-icon/accas/accas-work-order-edit-page.png",
      "assets/project-icon/accas/accas-user-management-page.png",
      "assets/project-icon/accas/accas-user-management-add-page.png",
      "assets/project-icon/accas/accas-user-management-edit-page.png",
      "assets/project-icon/accas/accas-user-management-permissions-page.png",
      "assets/project-icon/accas/accas-user-management-logs-users-page.png",
      "assets/project-icon/accas/accas-report-meter-count-page.png"
    ],
    techimage: [
      "assets/dev-icon/html5.png",
      "assets/dev-icon/css.png",
      "assets/dev-icon/react-js.png",
      "assets/dev-icon/ts.png",
      "assets/dev-icon/shadcn.png",
      "assets/dev-icon/laravel.png",
      "assets/dev-icon/mysql.png"
    ],
    link: "https://dev.accas.able.com.pg/",
    description: "A comprehensive web application designed to streamline contract lifecycle management from creation to reporting. Features include contract creation and tracking, monitoring dashboards, automated reporting, branch management, customer relationship management, and equipment tracking. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 2,
    name: "ISLP - Internal Software License Portal",
    subtitle: "Internal",
    image: "assets/project-icon/soon.png",
    subimage: [
      "assets/project-icon/islp/welcomePage.png",
      "assets/project-icon/islp/login.png",
      "assets/project-icon/islp/forgot.png",
      "assets/project-icon/islp/dashboard.png",
      "assets/project-icon/islp/branch.png",
      "assets/project-icon/islp/branchCreate.png",
      "assets/project-icon/islp/branchUpdate.png",
      "assets/project-icon/islp/brandList.png",
      "assets/project-icon/islp/categoryList.png",
      "assets/project-icon/islp/customerList.png",
      "assets/project-icon/islp/expiryNotifRules.png",
      "assets/project-icon/islp/expiryNotifRulesCreate.png",
      "assets/project-icon/islp/expiryNotifRulesUpdate.png",
      "assets/project-icon/islp/expiryTracker.png",
      "assets/project-icon/islp/licensesList.png",
      "assets/project-icon/islp/licensesListCreate.png",
      "assets/project-icon/islp/licensesUsageReport.png",
      "assets/project-icon/islp/productList.png",
      "assets/project-icon/islp/productListCreate.png",
      "assets/project-icon/islp/productListUpdate.png",
      "assets/project-icon/islp/requestForm.png",
      "assets/project-icon/islp/requestFormCreate.png",
      "assets/project-icon/islp/approve-reject-request.png",
      "assets/project-icon/islp/softwareProductInvoice.png",
      "assets/project-icon/islp/typeManagementList.png",
      "assets/project-icon/islp/vendorList.png"
    ],
    techimage: [
      "assets/dev-icon/html5.png",
      "assets/dev-icon/css.png",
      "assets/dev-icon/react-js.png",
      "assets/dev-icon/ts.png",
      "assets/dev-icon/shadcn.png",
      "assets/dev-icon/laravel.png",
      "assets/dev-icon/mysql.png"
    ],
    link: "https://lms.able.com.pg/",
    description: "A comprehensive web application designed to manage and track software licenses efficiently. Features include license lifecycle management, request approval workflows, expiry tracking with automated notifications, vendor and product management, and detailed usage reporting. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 3,
    name: "AMS - Assets Management System",
    subtitle: "Internal",
    image: "assets/project-icon/soon.png",
    subimage: [
      "assets/project-icon/ams/ams-login-page.png",
      "assets/project-icon/ams/ams-dashboard-page.png",
      "assets/project-icon/ams/ams-backup-page.png",
      "assets/project-icon/ams/ams-import-page.png",
      "assets/project-icon/ams/ams-requestable-item-page.png",
      "assets/project-icon/ams/ams-settings-page.png",
      "assets/project-icon/ams/ams-status-label-page.png",
      "assets/project-icon/ams/ams-subscription-page.png"
    ],
    techimage: [
      "assets/dev-icon/html5.png",
      "assets/dev-icon/css.png",
      "assets/dev-icon/react-js.png",
      "assets/dev-icon/ts.png",
      "assets/dev-icon/shadcn.png",
      "assets/dev-icon/laravel.png",
      "assets/dev-icon/mysql.png"
    ],
    link: "https://ams.able.com.pg/login",
    description: "A comprehensive web application designed for asset tracking and management operations. Features include asset lifecycle management, backup functionality, data import and export capabilities, requestable items management, detailed status tracking, and comprehensive labeling. Built with React and TypeScript for the frontend, Laravel for backend operations, and MySQL for data storage, with Shadcn UI providing a modern interface."
  },
  {
    id: 4,
    name: "EN - Engineer Inventory",
    subtitle: "Internal",
    image: "assets/project-icon/soon.png",
    subimage: [
      "assets/project-icon/en/en-login-page.png",
      "assets/project-icon/en/en-dashboard-page.png",
      "assets/project-icon/en/en-inventory-page.png",
      "assets/project-icon/en/en-supply-chain-page.png",
      "assets/project-icon/en/en-reports-page.png"
    ],
    techimage: [
      "assets/dev-icon/html5.png",
      "assets/dev-icon/css.png",
      "assets/dev-icon/js.png",
      "assets/dev-icon/react-js.png",
      "assets/dev-icon/ant-design.png",
      "assets/dev-icon/mssql.png",
      "assets/dev-icon/node-js.png"
    ],
    link: "",
    description: "A comprehensive web application designed for engineering inventory tracking and management. Features include real-time inventory monitoring, automated stock level alerts, supplier management, procurement workflows, batch tracking, and advanced reporting capabilities. Built with React and JavaScript for the frontend, MS SQL for data storage, with Ant Design providing a modern interface."
  },
  {
    id: 5,
    name: "SCM - Supply Chain Management",
    subtitle: "Internal",
    image: "assets/project-icon/soon.png",
    subimage: [
      "assets/project-icon/scm/scm-login-page.png",
      "assets/project-icon/scm/scm-dashboard-page.png",
      "assets/project-icon/scm/scm-inventory-page.png",
      "assets/project-icon/scm/scm-supply-chain-page.png",
      "assets/project-icon/scm/scm-reports-page.png"
    ],
    techimage: [
      "assets/dev-icon/html5.png",
      "assets/dev-icon/css.png",
      "assets/dev-icon/js.png",
      "assets/dev-icon/react-js.png",
      "assets/dev-icon/ant-design.png",
      "assets/dev-icon/mssql.png",
      "assets/dev-icon/node-js.png"
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
    period: "9 months",
    image: "assets/company-icon/bangalow.jpg",
    link: "https://www.linkedin.com/company/bangalow/posts/?feedView=all",
    description: "• Contributed to the development and maintenance of internal and client-facing web applications.\n• Assisted in implementing features, fixing bugs, and enhancing system performance.\n• Collaborated with senior developers to meet project requirements and deadlines.\n• Participated in code reviews and followed best practices for maintainable code.",
    systemUsage: "Internal",
    techStack: ["HTML", "CSS", "React JS", "Laravel", "PHP", "ShadCN UI", "MS SQL", "MySQL", "RESTful APIs", "GitHub"]
  },
  {
    id: 2,
    position: "Junior Programmer",
    company: "Lloyd Laboratories, Inc.",
    location: "Malolos City, Bulacan",
    duration: "June 2023 - December 2023",
    period: "6 months",
    image: "assets/company-icon/lloyd-laboratoties-inc.jpeg",
    link: "https://www.linkedin.com/company/lloyd-laboratories-inc/posts/?feedView=all",
    description: "• Built and maintained internal web applications for business operations.\n• Enhanced system features and resolved technical issues efficiently.\n• Worked closely with the development team to meet project milestones.\n• Applied coding best practices to ensure maintainable and reliable code.",
    systemUsage: "Internal",
    techStack: ["HTML", "CSS", "Ant Design", "React JS", "Node.js", "MS SQL", "RESTful APIs", "GitHub"]
  },
  {
    id: 3,
    position: "Software Engineer",
    company: "GP Next Solution, Inc.",
    location: "Quezon City",
    duration: "November 2021 - January 2023",
    period: "1 year & 2 months",
    image: "assets/company-icon/gp-next-solution-inc.png",
    link: "https://www.linkedin.com/company/gp-next-inc/posts/?feedView=all",
    description: "• Designed, developed, and maintained web applications for external clients.\n• Built reusable and efficient front-end and back-end components.\n• Collaborated with cross-functional teams on UI, backend logic, and database design.\n• Ensured system reliability, performance, and code quality.",
    systemUsage: "External",
    techStack: ["HTML", "CSS", "React JS", "Node.js", "MySQL", "RESTful APIs", "Git"]
  }
];

export const footerData: SocialLink[] = [
  {
    id: 2,
    name: "Gmail",
    image: "assets/social-icon/email.png",
    link: "https://mail.google.com/mail/u/0/#inbox",
    description: "Contact me via email."
  },
  {
    id: 3,
    name: "Facebook",
    image: "assets/social-icon/facebook.png",
    link: "https://www.facebook.com/JustineM1996",
    description: "Check out my profile on Facebook."
  },
  {
    id: 4,
    name: "GitHub",
    image: "assets/social-icon/github.png",
    link: "https://github.com/JustineMHIL28",
    description: "Explore my projects on GitHub."
  },
  {
    id: 5,
    name: "Indeed",
    image: "assets/social-icon/indeed.webp",
    link: "https://profile.indeed.com/p/justineh-4y483th",
    description: "Check out my profile on Indeed."
  },
  {
    id: 6,
    name: "LinkedIn",
    image: "assets/social-icon/linkin.png",
    link: "https://www.linkedin.com/in/justine-hilario",
    description: "Check out my profile on LinkedIn."
  }
];
