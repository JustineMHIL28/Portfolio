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

// ✅ Per-image metadata
export interface SubImage {
  src: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  subtitle?: string;
  image: string;
  subimage: SubImage[];
  techimage: string[];
  link: string;
  description: string;
}

export interface PersonalProject {
  id: number;
  name: string;
  subtitle?: string;
  image: string;
  subimage: SubImage[];
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

const getAssetPath = (path: string) => `${process.env.PUBLIC_URL}/${path}`;

export const overviewData: OverviewItem[] = [
  { id: 1, name: "Website Development", image: getAssetPath("assets/just-icon/website-development.png"), description: "Building websites from start to finish using various technologies.", link: "https://example.com/website-development" },
  { id: 2, name: "Software Development", image: getAssetPath("assets/just-icon/software-development-.png"), description: "Creating software applications for various platforms.", link: "https://example.com/software-development" },
  { id: 3, name: "Third-Party Integration", image: getAssetPath("assets/just-icon/thrid-party.png"), description: "Integrating third-party services and APIs into existing applications.", link: "https://example.com/third-party-integration" }
];

export const technologiesData: Technology[] = [
  { id: 1, name: "HTML", image: getAssetPath("assets/dev-icon/html5.png"), description: "Markup language for creating web pages.", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: 2, name: "CSS", image: getAssetPath("assets/dev-icon/css.png"), description: "Style sheet language for beautifying web pages.", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: 3, name: "JavaScript", image: getAssetPath("assets/dev-icon/js.png"), description: "Programming language used in web development.", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: 4, name: "TypeScript", image: getAssetPath("assets/dev-icon/ts.png"), description: "A superset of JavaScript that provides static typing.", link: "https://www.typescriptlang.org/" },
  { id: 5, name: "React", image: getAssetPath("assets/dev-icon/react-js.png"), description: "JavaScript library for building user interfaces.", link: "https://reactjs.org/" },
  { id: 6, name: "AntDesign", image: getAssetPath("assets/dev-icon/ant-design.png"), description: "UI design language and React UI library providing pre-designed components.", link: "https://ant.design/" },
  { id: 7, name: "Shadcn", image: getAssetPath("assets/dev-icon/shadcn.png"), description: "Modern UI component library built with Tailwind CSS.", link: "https://ui.shadcn.com/docs/components" },
  { id: 8, name: "PHP", image: getAssetPath("assets/dev-icon/php.png"), description: "A popular server-side scripting language for building dynamic web applications.", link: "https://www.php.net/" },
  { id: 9, name: "Node.js", image: getAssetPath("assets/dev-icon/node-js.png"), description: "JavaScript runtime used for server-side development.", link: "https://nodejs.org/" },
  { id: 10, name: "Laravel", image: getAssetPath("assets/dev-icon/laravel.png"), description: "PHP framework for building robust web applications.", link: "https://laravel.com/" },
  { id: 11, name: "MySql", image: getAssetPath("assets/dev-icon/mysql.png"), description: "Relational database management system for data storage.", link: "https://www.mysql.com/" },
  { id: 12, name: "MsSql", image: getAssetPath("assets/dev-icon/mssql.png"), description: "Database management system from Microsoft.", link: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads" },
  { id: 13, name: "Git", image: getAssetPath("assets/dev-icon/git.png"), description: "Version control system for tracking code changes.", link: "https://git-scm.com/" }
];

export const personalProjectsData: PersonalProject[] = [
  {
    id: 1,
    name: "My Portfolio",
    subtitle: "Personal Branding",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      {
        src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121552.png"),
        title: "Hero — Landing Page",
        subtitle: "First Impression",
        description: "The hero section of my personal portfolio featuring my name, role, and call-to-action buttons. Designed with a blurred background, smooth entrance animations, and a scroll indicator for a polished first impression."
      },
      {
        src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121613.png"),
        title: "Overview — What I Do",
        subtitle: "Skills Summary",
        description: "A concise overview section highlighting my core competencies as a Full Stack Developer, including website development, software development, and third-party integrations."
      },
      {
        src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121637.png"),
        title: "Technologies — Tech Stack",
        subtitle: "Tools & Languages",
        description: "An interactive technology showcase displaying all the tools, frameworks, and languages I work with — from HTML and CSS to React, Laravel, TypeScript, and more."
      },
      {
        src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121654.png"),
        title: "Personal Projects",
        subtitle: "My Own Builds",
        description: "A carousel showcasing projects I built independently, each with tech stack icons, descriptions, and links to live sites or GitHub repositories."
      },
      {
        src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121729.png"),
        title: "Supporting Projects — Detail",
        subtitle: "Team Project Gallery",
        description: "Detailed view of a supporting project with a full screenshot carousel, tech stack, description, and a link to the live site for in-depth exploration."
      },
      {
        src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121818.png"),
        title: "Career — Work Experience",
        subtitle: "Professional Journey",
        description: "A timeline-style career section listing my work experience, including company names, positions, durations, tech stacks used, and key contributions at each role."
      },
      {
        src: getAssetPath("assets/project-icon/portfolio/Screenshot 2026-03-07 121832.png"),
        title: "Footer — Contact & Socials",
        subtitle: "Get In Touch",
        description: "The footer section featuring my social media links including GitHub, LinkedIn, Facebook, Gmail, and Indeed — making it easy for recruiters and collaborators to reach out."
      },
    ],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/shadcn.png"),
    ],
    link: "",
    github: "https://github.com/JustineMHIL28/portfolio",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Features include smooth animations, dark mode support, project showcases with detailed descriptions, and an interactive contact form. Built with React, TypeScript, and Shadcn UI for a clean and professional look."
  },
  {
    id: 2,
    name: "Document Management System",
    subtitle: "File Organization",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-landing-page-2026-03-07-08_13_12.png"),
        title: "Landing Page",
        subtitle: "Welcome Screen",
        description: "The public-facing welcome page introducing the Document Management System with a clean layout and call-to-action buttons for login and registration."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-login-2026-03-07-08_12_56.png"),
        title: "Login",
        subtitle: "User Authentication",
        description: "Secure login screen where users enter their email and password to access the system. Includes a forgot password link for account recovery."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-register-2026-03-07-08_13_12.png"),
        title: "Register",
        subtitle: "New Account Creation",
        description: "Registration screen allowing new users to create an account by providing their name, email, and password to gain access to the system."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-forgot-password-2026-03-07-08_12_56.png"),
        title: "Forgot Password",
        subtitle: "Password Recovery",
        description: "Password recovery screen where users enter their registered email address to receive a password reset link and regain access to their account."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_16_47.png"),
        title: "Dashboard",
        subtitle: "System Overview",
        description: "Main dashboard displaying key metrics, recent activities, document summaries, and quick-access shortcuts for efficient system navigation."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_17_00.png"),
        title: "Documents",
        subtitle: "Document List",
        description: "Complete list of all uploaded documents with filtering, sorting, and search capabilities. Displays document name, category, department, and date uploaded."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_17_42.png"),
        title: "Documents — Add",
        subtitle: "Upload New Document",
        description: "Document upload form where users can attach files, assign categories, select departments, and add relevant metadata before submitting."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_17_54.png"),
        title: "Documents — Edit",
        subtitle: "Update Document",
        description: "Form for uploading and updating documents, including file attachment, category assignment, department selection, and metadata input."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_26.png"),
        title: "Documents — Details",
        subtitle: "View Document Details",
        description: "Detailed view of a document showing its information, file preview, version history, download options, and activity logs."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_33.png"),
        title: "Documents — Preview",
        subtitle: "Reports Index",
        description: "Index page listing all reports with options to preview, download, or upload new files."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_38.png"),
        title: "Documents — Activity Log",
        subtitle: "Document Change History",
        description: "Chronological log showing all actions performed on a document including uploads, edits, downloads, and permission changes."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_47.png"),
        title: "Documents — Visibility",
        subtitle: "Public, Private or by Department",
        description: "Page to manage document visibility settings including public access, private restrictions, or department-specific permissions."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_18_53.png"),
        title: "Documents — By Department",
        subtitle: "All Departments You Are Member Of",
        description: "Page showing documents filtered by departments the user belongs to."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_07.png"),
        title: "Department — Overview",
        subtitle: "All Department",
        description: "Overview of all departments with structured view, including status indicators and tracking."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_15.png"),
        title: "Department — Add",
        subtitle: "Department Add",
        description: "Form for creating a new department including department name and details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_26.png"),
        title: "Department — Edit",
        subtitle: "Department Edit",
        description: "Form for editing existing department details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_33.png"),
        title: "Department — View all Details",
        subtitle: "Department Management",
        description: "Page displaying all department details and management options."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_40.png"),
        title: "Department — Invite Users",
        subtitle: "Department",
        description: "Form for inviting new users to a department."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_47.png"),
        title: "Department — Gmail Invite",
        subtitle: "Department",
        description: "Page to send department invitations via Gmail to users."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_19_53.png"),
        title: "Department — Invite User via Email",
        subtitle: "Create New Department",
        description: "Form for sending a department invitation by email."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_20_09.png"),
        title: "Department — Delete",
        subtitle: "User Management Index",
        description: "Page to remove a department from the system."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_20_27.png"),
        title: "Department — Archive",
        subtitle: "Create New User Account",
        description: "Page displaying archived departments with options to review or restore."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_20_38.png"),
        title: "Category — Overview",
        subtitle: "Category Overview",
        description: "Page listing all categories with options to manage them."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_20_47.png"),
        title: "Category — Add",
        subtitle: "Add New Category",
        description: "Form to create a new document category."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_21_05.png"),
        title: "Category — Edit",
        subtitle: "Edit Category",
        description: "Form to update existing category details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_21_16.png"),
        title: "Category — Delete",
        subtitle: "Delete Category",
        description: "Confirmation page for removing a category."
      },
      {
        src: getAssetPath("assets/project-icon/dms/Screenshot 2026-03-07 112554.png"),
        title: "Category — Archive",
        subtitle: "Archive Category",
        description: "Page showing archived categories with options to review or restore them."
      },
      {
        src: getAssetPath("assets/project-icon/dms/Screenshot 2026-03-07 111922.png"),
        title: "Category — Details",
        subtitle: "Details Category",
        description: "Detailed view of a category including assigned members and related documents."
      },
      {
        src: getAssetPath("assets/project-icon/dms/Screenshot 2026-03-07 112012.png"),
        title: "Category — Add Member",
        subtitle: "Add Member Category",
        description: "Form for adding a member to a specific category for document access and collaboration."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_04.png"),
        title: "User Management — Overview",
        subtitle: "Overview",
        description: "Page displaying all system users."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_11.png"),
        title: "User Management — Add",
        subtitle: "Add User",
        description: "Form to create a new user account."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_23.png"),
        title: "User Management — Edit",
        subtitle: "Edit User",
        description: "Form to update user account details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_32.png"),
        title: "User Management — Permissions",
        subtitle: "Permissions",
        description: "Page to assign roles and access permissions to users."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_39.png"),
        title: "User Management — View Changes",
        subtitle: "Change History",
        description: "Page showing modifications performed on user accounts."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_44.png"),
        title: "User Management — Change History",
        subtitle: "Activity Log",
        description: "Log of user actions and system activities."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_52.png"),
        title: "Audit Log — Overview",
        subtitle: "Audit Trail",
        description: "Page showing all system audit logs including user and admin activities."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-dashboard-2026-03-07-08_22_58.png"),
        title: "Settings — Overview",
        subtitle: "Settings Overview",
        description: "Page providing access to all system configuration settings."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_06.png"),
        title: "Profile",
        subtitle: "Profile Overview",
        description: "Page showing user personal details, role, department, and recent activity."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_13.png"),
        title: "Profile — Change Background",
        subtitle: "Edit Personal Information",
        description: "Form to update personal details such as name, email, contact information, and profile photo."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_21.png"),
        title: "Profile — Change Profile",
        subtitle: "Password Update",
        description: "Form for updating account password securely."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_26.png"),
        title: "Profile — Update Information",
        subtitle: "Update Information",
        description: "Form allowing users to update their personal information including name, email, and other profile details."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_33.png"),
        title: "Profile — Update Email",
        subtitle: "Update Email",
        description: "Interface for users to change their registered email address with verification and confirmation."
      },
      {
        src: getAssetPath("assets/project-icon/dms/screencapture-127-0-0-1-8000-profile-2026-03-07-08_23_40.png"),
        title: "Profile — Change Password",
        subtitle: "Change Password",
        description: "Secure page where users can update their account password by entering the current password and a new one."
      }
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
    name: "Task Management System",
    subtitle: "Productivity Tool",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/node-js.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
    ],
    link: "",
    github: "https://github.com/JustineMHIL28/tms",
    description: "A full-stack task management application with drag-and-drop functionality, priority settings, and deadline tracking. Features include user authentication, real-time updates, task categorization, calendar view, and progress tracking. Built with React TypeScript frontend and Node.js backend with MySQL database."
  },
  {
    id: 4,
    name: "Invotrack",
    subtitle: "Inventory Tracking System",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "",
    github: "",
    description: "A comprehensive inventory tracking and management system designed to streamline stock monitoring, automate alerts for low inventory levels, and provide real-time visibility into warehouse operations. Built with React, TypeScript, Laravel, and MySQL for efficient data management and reporting."
  },
  {
    id: 5,
    name: "Biotrack 360",
    subtitle: "Biometric Tracking Platform",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ts.png"),
      getAssetPath("assets/dev-icon/laravel.png"),
      getAssetPath("assets/dev-icon/mysql.png"),
      getAssetPath("assets/dev-icon/php.png"),
    ],
    link: "",
    github: "",
    description: "A 360-degree biometric tracking platform for managing employee attendance, access control, and identity verification. Features include real-time monitoring, detailed reporting, automated notifications, and integration with biometric devices. Built with React, TypeScript, Laravel, and MySQL."
  },
];

export const suppotingprojectsData: Project[] = [
  {
    id: 1,
    name: "Contract Management System",
    subtitle: "Contract Tracking",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      { src: getAssetPath("assets/project-icon/accas/accas-main-page.png"), title: "Landing Page", subtitle: "Welcome Screen", description: "Public-facing welcome page for the Contract Management System introducing key features and providing navigation to login." },
      { src: getAssetPath("assets/project-icon/accas/accas-login-page.png"), title: "Login", subtitle: "User Authentication", description: "Secure login screen for authorized users to access the contract management system using their credentials." },
      { src: getAssetPath("assets/project-icon/accas/accas-dashboard-page.png"), title: "Dashboard", subtitle: "System Overview", description: "Main dashboard displaying contract summaries, recent activity, key metrics, and quick-access navigation for efficient workflow." },
      { src: getAssetPath("assets/project-icon/accas/accas-branch-page.png"), title: "Branch", subtitle: "Branch List", description: "Index page listing all registered branches with their details, status, and management options for the organization." },
      { src: getAssetPath("assets/project-icon/accas/accas-branch-add-page.png"), title: "Branch — Add", subtitle: "Create New Branch", description: "Form for registering a new branch by entering branch name, location, and contact details into the system." },
      { src: getAssetPath("assets/project-icon/accas/accas-branch-edit-page.png"), title: "Branch — Edit", subtitle: "Update Branch Details", description: "Edit form for updating existing branch information such as name, address, and contact details as needed." },
      { src: getAssetPath("assets/project-icon/accas/accas-copier-models-page.png"), title: "Copier Models", subtitle: "Model List", description: "Index of all registered copier machine models with specifications and current inventory count per model type." },
      { src: getAssetPath("assets/project-icon/accas/accas-copier-models-add-page.png"), title: "Copier Models — Add", subtitle: "Register New Model", description: "Form for adding a new copier model by entering model name, specifications, and other relevant equipment details." },
      { src: getAssetPath("assets/project-icon/accas/accas-copier-models-edit-page.png"), title: "Copier Models — Edit", subtitle: "Update Model Details", description: "Edit form to update an existing copier model's specifications, name, or other details in the equipment catalog." },
      { src: getAssetPath("assets/project-icon/accas/accas-customers-page.png"), title: "Customers", subtitle: "Customer List", description: "List of all registered customers with contact information, assigned branch, and contract status for relationship management." },
      { src: getAssetPath("assets/project-icon/accas/accas-customers-add-page.png"), title: "Customers — Add", subtitle: "Register New Customer", description: "Form for adding a new customer to the system including name, contact details, address, and branch assignment." },
      { src: getAssetPath("assets/project-icon/accas/accas-customers-edit-page.png"), title: "Customers — Edit", subtitle: "Update Customer Details", description: "Edit form for modifying existing customer information to keep contact details and assignments current and accurate." },
      { src: getAssetPath("assets/project-icon/accas/accas-equipment-page.png"), title: "Equipment", subtitle: "Equipment Inventory", description: "Equipment inventory listing all assets under management with serial numbers, model types, status, and assigned customer details." },
      { src: getAssetPath("assets/project-icon/accas/accas-equipment-add-page.png"), title: "Equipment — Add", subtitle: "Register New Equipment", description: "Form for registering new equipment into the system including model, serial number, customer assignment, and installation date." },
      { src: getAssetPath("assets/project-icon/accas/accas-equipment-edit-page.png"), title: "Equipment — Edit", subtitle: "Update Equipment Details", description: "Edit form for updating equipment details such as assigned customer, status, or maintenance notes for accurate tracking." },
      { src: getAssetPath("assets/project-icon/accas/accas-work-order-page.png"), title: "Work Orders", subtitle: "Work Order Index", description: "Index of all work orders showing request details, assigned technician, status, and scheduled service dates for tracking." },
      { src: getAssetPath("assets/project-icon/accas/accas-work-order-add-page.png"), title: "Work Orders — Add", subtitle: "Create New Work Order", description: "Form for creating a new work order by specifying the equipment, issue description, assigned technician, and scheduled service date." },
      { src: getAssetPath("assets/project-icon/accas/accas-work-order-edit-page.png"), title: "Work Orders — Edit", subtitle: "Update Work Order", description: "Edit form for updating work order details including status changes, technician reassignment, and resolution notes." },
      { src: getAssetPath("assets/project-icon/accas/accas-report-meter-count-page.png"), title: "Reports — Meter Count", subtitle: "Meter Count Report", description: "Report page displaying meter count readings per equipment unit, used for billing and usage tracking across all customers." },
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
    name: "Internal Software License Portal",
    subtitle: "License Tracking",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      { src: getAssetPath("assets/project-icon/islp/welcomePage.png"), title: "Landing Page", subtitle: "Welcome Screen", description: "Public welcome page for the Internal Software License Portal introducing the platform features and directing users to login." },
      { src: getAssetPath("assets/project-icon/islp/login.png"), title: "Login", subtitle: "User Authentication", description: "Secure login page for authorized personnel to access the software license management portal using their credentials." },
      { src: getAssetPath("assets/project-icon/islp/forgot.png"), title: "Forgot Password", subtitle: "Password Recovery", description: "Password recovery page where users submit their email to receive a reset link for regaining account access." },
      { src: getAssetPath("assets/project-icon/islp/dashboard.png"), title: "Dashboard", subtitle: "System Overview", description: "Main dashboard summarizing total licenses, active subscriptions, pending requests, expiry alerts, and key system metrics at a glance." },
      { src: getAssetPath("assets/project-icon/islp/branch.png"), title: "Branch", subtitle: "Branch List", description: "List of all registered company branches with details and license assignment counts for branch-level management." },
      { src: getAssetPath("assets/project-icon/islp/branchCreate.png"), title: "Branch — Create", subtitle: "Add New Branch", description: "Form to register a new branch by entering its name, location, and contact information into the portal." },
      { src: getAssetPath("assets/project-icon/islp/branchUpdate.png"), title: "Branch — Update", subtitle: "Edit Branch Details", description: "Edit form for updating existing branch information to maintain accurate records in the license portal." },
      { src: getAssetPath("assets/project-icon/islp/brandList.png"), title: "Brand List", subtitle: "Software Brand Management", description: "Management page listing all software brands registered in the system for product categorization and license assignment." },
      { src: getAssetPath("assets/project-icon/islp/categoryList.png"), title: "Category List", subtitle: "License Category Management", description: "List of license categories used to classify software products and organize licenses within the portal effectively." },
      { src: getAssetPath("assets/project-icon/islp/customerList.png"), title: "Customer List", subtitle: "Customer Management", description: "Index of all customers registered in the system with license details, assigned products, and account status." },
      { src: getAssetPath("assets/project-icon/islp/expiryNotifRules.png"), title: "Expiry Notification Rules", subtitle: "Alert Rule Index", description: "Index of all expiry notification rules configured to alert users before software licenses reach their expiration dates." },
      { src: getAssetPath("assets/project-icon/islp/expiryNotifRulesCreate.png"), title: "Expiry Rules — Create", subtitle: "Add Notification Rule", description: "Form to create a new expiry notification rule by defining the days-before-expiry threshold and target recipients." },
      { src: getAssetPath("assets/project-icon/islp/expiryNotifRulesUpdate.png"), title: "Expiry Rules — Update", subtitle: "Edit Notification Rule", description: "Edit form for updating an existing expiry notification rule including threshold days and recipient configurations." },
      { src: getAssetPath("assets/project-icon/islp/expiryTracker.png"), title: "Expiry Tracker", subtitle: "License Expiry Monitoring", description: "Real-time tracker showing all licenses nearing expiration with days remaining, product name, and assigned customer details." },
      { src: getAssetPath("assets/project-icon/islp/licensesList.png"), title: "Licenses List", subtitle: "All Licenses", description: "Complete list of all software licenses in the system with product, customer, expiry date, and current status information." },
      { src: getAssetPath("assets/project-icon/islp/licensesListCreate.png"), title: "Licenses — Create", subtitle: "Add New License", description: "Form for adding a new software license entry including product, customer, license key, and expiry date details." },
      { src: getAssetPath("assets/project-icon/islp/licensesUsageReport.png"), title: "License Usage Report", subtitle: "Usage Analytics", description: "Report page showing license usage statistics per product and customer, helping identify underutilized or over-allocated licenses." },
      { src: getAssetPath("assets/project-icon/islp/productList.png"), title: "Product List", subtitle: "Software Product Index", description: "Index of all software products registered in the system with brand, category, license type, and availability details." },
      { src: getAssetPath("assets/project-icon/islp/productListCreate.png"), title: "Product — Create", subtitle: "Add New Product", description: "Form for registering a new software product into the system including name, brand, category, and pricing information." },
      { src: getAssetPath("assets/project-icon/islp/productListUpdate.png"), title: "Product — Update", subtitle: "Edit Product Details", description: "Edit form for updating existing software product details such as pricing, category, availability, and product description." },
      { src: getAssetPath("assets/project-icon/islp/requestForm.png"), title: "Request Form", subtitle: "License Request Index", description: "Index of all submitted license requests showing requester details, requested product, status, and submission date." },
      { src: getAssetPath("assets/project-icon/islp/requestFormCreate.png"), title: "Request Form — Create", subtitle: "Submit License Request", description: "Form for users to submit a new license request by selecting the product, quantity, and providing a justification." },
      { src: getAssetPath("assets/project-icon/islp/approve-reject-request.png"), title: "Approve / Reject Request", subtitle: "Request Review", description: "Review panel for admins to approve or reject pending license requests with comments and status update notifications." },
      { src: getAssetPath("assets/project-icon/islp/softwareProductInvoice.png"), title: "Software Product Invoice", subtitle: "Invoice Management", description: "Invoice page for software product purchases displaying item details, quantities, pricing, and payment status for billing." },
      { src: getAssetPath("assets/project-icon/islp/typeManagementList.png"), title: "Type Management", subtitle: "License Type Index", description: "Management page for license types such as perpetual, subscription, or trial, used to classify software licenses in the portal." },
      { src: getAssetPath("assets/project-icon/islp/vendorList.png"), title: "Vendor List", subtitle: "Vendor Management", description: "Index of all registered software vendors with contact details, associated products, and vendor account management options." },
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
    name: "Assets Management System",
    subtitle: "Asset Inventory",
    image: getAssetPath("assets/project-icon/soon.png"),
    subimage: [
      { src: getAssetPath("assets/project-icon/ams/ams-login-page.png"), title: "Login", subtitle: "User Authentication", description: "Secure login screen for authorized users to access the Assets Management System using their registered credentials." },
      { src: getAssetPath("assets/project-icon/ams/ams-dashboard-page.png"), title: "Dashboard", subtitle: "System Overview", description: "Main dashboard displaying total assets, recent activities, asset status breakdown, and quick-access navigation for the system." },
      { src: getAssetPath("assets/project-icon/ams/ams-backup-page.png"), title: "Backup", subtitle: "System Backup Management", description: "Backup management page for creating, scheduling, and downloading system data backups to prevent data loss." },
      { src: getAssetPath("assets/project-icon/ams/ams-import-page.png"), title: "Import", subtitle: "Data Import", description: "Data import page allowing admins to bulk upload asset records using CSV or Excel file formats into the system." },
      { src: getAssetPath("assets/project-icon/ams/ams-requestable-item-page.png"), title: "Requestable Items", subtitle: "Asset Request Management", description: "Management page for items that users can request, showing availability, assigned assets, and pending request counts." },
      { src: getAssetPath("assets/project-icon/ams/ams-settings-page.png"), title: "Settings", subtitle: "System Configuration", description: "Settings panel for configuring system preferences including company details, default values, and general application behavior." },
      { src: getAssetPath("assets/project-icon/ams/ams-status-label-page.png"), title: "Status Labels", subtitle: "Asset Status Management", description: "Management page for creating and customizing asset status labels such as Active, Inactive, Under Repair, and Disposed." },
      { src: getAssetPath("assets/project-icon/ams/ams-subscription-page.png"), title: "Subscription", subtitle: "Plan Management", description: "Subscription management page for viewing and managing the current plan, billing details, and available system features." },
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
    image: getAssetPath("assets/project-icon/backup.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/js.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ant-design.png"),
      getAssetPath("assets/dev-icon/mssql.png"),
      getAssetPath("assets/dev-icon/node-js.png"),
    ],
    link: "",
    description: "A comprehensive web application designed for engineering inventory tracking and management. Features include real-time inventory monitoring, automated stock level alerts, supplier management, procurement workflows, batch tracking, and advanced reporting capabilities. Built with React and JavaScript for the frontend, MS SQL for data storage, with Ant Design providing a modern interface."
  },
  {
    id: 5,
    name: "SCM - Supply Chain Management",
    subtitle: "Logistics Tracking",
    image: getAssetPath("assets/project-icon/backup.png"),
    subimage: [],
    techimage: [
      getAssetPath("assets/dev-icon/html5.png"),
      getAssetPath("assets/dev-icon/css.png"),
      getAssetPath("assets/dev-icon/js.png"),
      getAssetPath("assets/dev-icon/react-js.png"),
      getAssetPath("assets/dev-icon/ant-design.png"),
      getAssetPath("assets/dev-icon/mssql.png"),
      getAssetPath("assets/dev-icon/node-js.png"),
    ],
    link: "",
    description: "A comprehensive web application designed to optimize supply chain operations from procurement to delivery. Features include inventory management, supplier relationship management, order processing, warehouse management, logistics tracking, real-time analytics, automated workflows, and demand forecasting. Built with React and JavaScript for the frontend, MS SQL for data storage, with Ant Design providing a modern interface."
  }
];

export const careerData: Career[] = [
  {
    id: 1,
    position: "Junior Programmer",
    company: "Bangalow Proprietary Limited Company (BPLC)",
    location: "Worked on systems supporting international operations for Able Home and Office and Tawamist Proprietary Limited Philippines, Papua New Guinea, Australia",
    duration: "April 2025 - January 2026",
    period: "",
    image: getAssetPath("assets/company-icon/bangalow.jpg"),
    link: "https://www.linkedin.com/company/bangalow/posts/?feedView=all",
    description: "• Contributed to the development and maintenance of internal and client-facing web applications.\n• Assisted in implementing features, fixing bugs, and enhancing system performance.\n• Collaborated with senior developers to meet project requirements and deadlines.\n• Participated in code reviews and followed best practices for maintainable code.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "React", "TypeScript", "Laravel", "PHP", "ShadCN UI", "Tailwind CSS", "MySQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 2,
    position: "Contract Web Developer",
    company: "Independent Contract",
    location: "Remote",
    duration: "September 2024 - March 2025",
    period: "",
    image: getAssetPath("assets/company-icon/freelance.jpg"),
    link: "",
    description: "• Developed an HR Management System from scratch for internal business operations.\n• Designed and implemented modules including employee records, attendance tracking, and HR workflows.\n• Built full-stack features using React, TypeScript, Laravel, and MySQL. Developed RESTful APIs and managed version control using Git.",
    systemUsage: "HR Management System",
    techStack: ["HTML", "CSS", "React", "TypeScript", "Laravel", "PHP", "Tailwind CSS", "MySQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 3,
    position: "Junior Programmer",
    company: "Lloyd Laboratories, Inc.",
    location: "Malolos City, Bulacan",
    duration: "June 2023 - December 2023",
    period: "",
    image: getAssetPath("assets/company-icon/lloyd-laboratoties-inc.jpeg"),
    link: "https://www.linkedin.com/company/lloyd-laboratories-inc/posts/?feedView=all",
    description: "• Built and maintained internal web applications for business operations.\n• Enhanced system features and resolved technical issues efficiently.\n• Worked closely with the development team to meet project milestones.\n• Applied coding best practices to ensure maintainable and reliable code.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "Ant Design", "React", "JavaScript", "Node.js", "Express.js", "MSSQL", "RESTful APIs", "Git", "GitHub"]
  },
  {
    id: 4,
    position: "Software Engineer",
    company: "GP Next Solution, Inc.",
    location: "Quezon City",
    duration: "November 2021 - January 2023",
    period: "",
    image: getAssetPath("assets/company-icon/gp-next-solution-inc.png"),
    link: "https://www.linkedin.com/company/gp-next-inc/posts/?feedView=all",
    description: "• Designed, developed, and maintained web applications for external clients.\n• Built reusable and efficient front-end and back-end components.\n• Collaborated with cross-functional teams on UI, backend logic, and database design.\n• Ensured system reliability, performance, and code quality.",
    systemUsage: "",
    techStack: ["HTML", "CSS", "Ant Design", "React", "JavaScript", "Node.js", "Express.js", "MSSQL", "RESTful APIs", "Git", "GitHub"]
  }
];

export const footerData: SocialLink[] = [
  { id: 2, name: "Gmail", image: getAssetPath("assets/social-icon/email.png"), link: "https://mail.google.com/mail/u/0/#inbox", description: "Contact me via email." },
  { id: 3, name: "Facebook", image: getAssetPath("assets/social-icon/facebook.png"), link: "https://www.facebook.com/JustineM1996", description: "Check out my profile on Facebook." },
  { id: 4, name: "GitHub", image: getAssetPath("assets/social-icon/github.png"), link: "https://github.com/JustineMHIL28", description: "Explore my projects on GitHub." },
  { id: 5, name: "Indeed", image: getAssetPath("assets/social-icon/indeed.webp"), link: "https://profile.indeed.com/p/justineh-4y483th", description: "Check out my profile on Indeed." },
  { id: 6, name: "LinkedIn", image: getAssetPath("assets/social-icon/linkin.png"), link: "https://www.linkedin.com/in/justine-m-hilario-432431359", description: "Check out my profile on LinkedIn." },
];