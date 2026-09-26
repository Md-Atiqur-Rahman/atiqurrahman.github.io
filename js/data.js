// All portfolio content lives here. Edit this file to update the site.
window.PORTFOLIO = {
  name: "MD Atiqur Rahman",
  initials: "AR",
  role: "Software Engineer · .NET / C#",
  location: "Dhaka, Bangladesh",
  tagline:
    "I build scalable, event-driven microservices and secure web applications with .NET and Angular — clean, well-tested and ready for production.",
  photo: "assets/img/profile.png", // leave the file missing to show the initials avatar
  resume: "assets/Md-Atiqur-Rahman-CV.pdf", // "Download CV" buttons are hidden while empty

  about: [
    "I'm a software engineer building high-performance web applications with ASP.NET Core and Angular on SQL Server, Oracle and MongoDB.",
    "At SELISE Digital Platforms I work with Swiss and German clients — breaking legacy monoliths into domain-driven microservices, designing secure APIs with OAuth2, OIDC and PKCE, building third-party integrations (Teams, calendar, malware scanning) and leading security remediation across the platform.",
    "I enjoy solution architecture, empowering teams to take ownership, and using emerging tools — including AI-agentic, spec-driven development — to solve complex, real-world problems."
  ],

  stats: [
    { value: "12", label: "Featured projects" },
    { value: "3", label: "Companies" },
    { value: "3", label: "Microsoft certifications" }
  ],

  hobbies: [
    "🏏 Cricket — inter-software tournaments, top-5 ranked bowler & opening batsman",
    "✈️ Traveling & exploring new places",
    "📚 Reading & learning"
  ],

  skills: [
    { group: "Backend", items: ["C#", "ASP.NET Core", "ASP.NET MVC", "Web API", "Entity Framework", "ADO.NET", "CQRS", "Event-driven", "gRPC", "MassTransit", "RabbitMQ", "Redis", "FusionCache", "Webhooks", "SignalR", "Hangfire", "xUnit"] },
    { group: "Frontend", items: ["Angular", "AngularJS", "JavaScript", "jQuery", "HTML5", "CSS3"] },
    { group: "Database", items: ["SQL Server", "Oracle", "MongoDB"] },
    { group: "Cloud & DevOps", items: ["Microsoft Azure (AZ-104)", "Azure Functions", "Event Grid", "Virtual Machines", "Storage", "Docker", "Git", "CI/CD pipelines"] },
    { group: "Security & Identity", items: ["OAuth2", "OpenID Connect", "PKCE", "JWT", "Keycloak", "SAML / SSO", "Pentest remediation"] },
    { group: "AI Tools", items: ["GitHub Copilot", "Claude AI", "BMAD-METHOD", "Spec-driven development", "Gemini API"] },
    { group: "Reporting", items: ["RDLC", "Crystal Reports", "HTML to PDF (Gotenberg)"] }
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "SELISE Digital Platforms",
      meta: "Insurance & Banking for Switzerland",
      period: "Feb 2023 — Present",
      points: [
        "Refactored a legacy monolith into domain-driven microservices, delivered a production-ready PDF Generation Service and collaborated with Swiss/German clients on iterative enhancements.",
        "Built and published shared NuGet libraries (FusionCache wrapper, centralized exception handling), automated MongoDB migrations and standardized a reusable multi-tenant architecture.",
        "Implemented gRPC communication and MassTransit event workflows, securing the platform with OpenID Connect, PKCE, JWT and modular permission management.",
        "Led security pentest remediation — fixed CORS, dependency and token-handling vulnerabilities across the platform.",
        "Built integrations for Autom (Teams notifications via webhook/Power Automate) and a malware-scan pipeline (Azure Function → Event Grid → RabbitMQ)."
      ]
    },
    {
      title: "Junior Software Engineer",
      company: "ERA InfoTech Ltd.",
      meta: "",
      period: "Nov 2019 — Jan 2023",
      points: [],
      // projects delivered in this role, each with its own responsibilities
      projects: [
        {
          name: "Electronic Information and Database Management System",
          client: "For Government",
          points: [
            "Actively participated in system analysis, requirement gathering, and architecture design to deliver a secure and scalable intelligence management platform.",
            "Designed and developed robust backend services using C#, ASP.NET MVC, ASP.NET Web API and Entity Framework, and implemented dynamic frontend interfaces with Razor, HTML, CSS, Bootstrap, JavaScript and jQuery.",
            "Created MIS reports using procedures, functions, views and scheduler jobs.",
            "Collaborated closely with software development and testing teams to ensure solutions met client requirements for functionality, performance and scalability.",
            "Deployed the system on Windows Server, ensuring reliable production operations."
          ]
        },
        {
          name: "e-Remittance",
          client: "For Bank Asia Limited",
          points: [
            "Participated in requirement analysis, system architecture decisions and integration planning, ensuring high-performance remittance services.",
            "Developed scalable backend APIs using C#, ASP.NET Core, ASP.NET Core Web API and Entity Framework Core, with frontend functionality in Angular.",
            "Implemented RDLC reports to provide actionable insights and facilitate operational efficiency.",
            "Deployed the system on UAT and production servers (Oracle Linux), configuring Nginx as a reverse proxy for optimized performance.",
            "Engaged with end-users to gather feedback, refine features and enhance system usability."
          ]
        }
      ]
    },
    {
      title: "Programmer",
      company: "Databiz Software Ltd.",
      meta: "",
      period: "Aug 2018 — Oct 2019",
      points: [
        "Developed core modules of a supply-chain management ERP with dynamic forms and complex backend logic.",
        "Wrote optimized SQL queries, stored procedures, indexes and triggers to improve system performance.",
        "Created Crystal Reports and dynamic reporting solutions to improve data visibility and decision-making."
      ]
    }
  ],

  // type: "professional" (client / employer work) or "personal" (own & open-source work)
  projects: [
    {
      type: "professional",
      name: "Insurance File Process",
      description: "Event-driven microservice platform for insurance file processing on .NET 10, with CQRS, gRPC and MassTransit messaging, Hangfire background jobs, SOAP integrations, shared NuGet libraries and 60% xUnit test coverage.",
      tags: [".NET 10", "CQRS", "gRPC", "MassTransit", "RabbitMQ", "Redis", "Hangfire", "MongoDB", "Docker"],
      github: "",
      live: ""
    },
    {
      type: "professional",
      name: "PDF Generation Service",
      description: "Schema-driven, event-based document pipeline that turns any JSON-schema payload into a PDF. Incoming data is dynamically mapped to normalized metadata, rendered to HTML with Liquid — either as raw HTML or through a predefined template — and published over RabbitMQ to a rendering service. The service converts the HTML to PDF and returns an upload ID on RabbitMQ; our consumer picks it up and fires a webhook to notify clients the PDF is ready.",
      tags: ["ASP.NET Core", "JSON Schema", "Liquid", "RabbitMQ", "MassTransit", "Webhooks", "Event-driven"],
      github: "",
      live: ""
    },
    {
      type: "professional",
      name: "Automated Database Migration Engine",
      description: "Designed and built a migration & seed module that replaced manual pre-deployment steps. Discovers IMigration classes, diffs them against applied runs in MongoDB, executes pending ones in timestamp order, and exposes role-secured REST endpoints for run, status and per-migration up/down — cutting deployment time and human error for VNet-isolated environments.",
      tags: ["ASP.NET Core", "C#", "MongoDB", "Clean Architecture", "REST API", "Unit Testing"],
      github: "",
      live: ""
    },
    {
      type: "professional",
      name: "Test Automation Platform (Autom)",
      description: "Microservice-based test automation platform with Keycloak-secured APIs, Playwright test execution and Microsoft Teams notifications via RabbitMQ, webhooks and Power Automate.",
      tags: ["ASP.NET Core", "Keycloak", "RabbitMQ", "Webhooks", "Power Automate", "Playwright", "MongoDB"],
      github: "",
      live: ""
    },
    {
      type: "professional",
      name: "e-Remit for Bank Asia",
      description: "Microservice-based remittance platform — contributed UI/UX improvements, scheduled jobs and backend workflow enhancements.",
      tags: ["ASP.NET Core", "Angular 9", "Material", "Quartz", "Oracle 11g"],
      github: "",
      live: ""
    },
    {
      type: "professional",
      name: "Electronic Information and Database Management System (Government project)",
      description: "Electronic Information and Database Management System with enterprise-level security.",
      tags: ["ASP.NET MVC", "Oracle", "RDLC"],
      github: "",
      live: ""
    },
    {
      type: "professional",
      name: "Business Supply Chain Management ERP",
      description: "Core ERP modules with dynamic forms, complex backend logic, optimized SQL and Crystal Reports.",
      tags: ["ASP.NET MVC 5", "Web API", "OData", "WCF", "Entity Framework 6", "SQL Server"],
      github: "",
      live: ""
    },
    {
      type: "professional",
      name: "Real Estate Business ERP",
      description: "Monolithic ERP for real-estate business operations built on ASP.NET and ADO.NET.",
      tags: ["ASP.NET", "ADO.NET", "jQuery", "SQL Server"],
      github: "",
      live: ""
    },
    {
      type: "personal",
      name: "Identity & Access Playground",
      description: "Hands-on lab for authentication & authorization — OIDC, SSO, SAML (IdP/SP) and token exchange (STS) across 7 epics, planned spec-first with the BMAD-METHOD AI-agentic framework.",
      tags: [".NET 8", "Angular", "Keycloak", "Sustainsys.Saml2", "Clean Architecture", "MongoDB"],
      github: "",
      live: ""
    },
    {
      type: "personal",
      name: "MicroRabbit",
      description: "Event-driven microservices communicating over RabbitMQ with MediatR command/event handling and a containerized broker.",
      tags: ["C#", ".NET Core", "MediatR", "RabbitMQ", "EF Core", "Docker"],
      github: "https://github.com/Md-Atiqur-Rahman/MicroRabbit",
      live: ""
    },
    {
      type: "personal",
      name: "SecureMicroservices",
      description: "Microservices secured with IdentityServer4 and routed through an Ocelot API gateway using OAuth2, OpenID Connect and JWT.",
      tags: [".NET Core", "IdentityServer4", "Ocelot", "OAuth2", "OIDC", "JWT"],
      github: "https://github.com/Md-Atiqur-Rahman/SecureMicroservices",
      live: ""
    },
    {
      type: "personal",
      name: "HireAI — AI Resume Analyzer",
      description: "Master's project that extracts experience, education and skills from PDF/DOCX resumes with spaCy + Gemini, scores candidates against job descriptions and visualizes rankings in a Plotly dashboard.",
      tags: ["Python", "spaCy", "Gemini API", "SQLite", "Plotly"],
      github: "",
      live: ""
    }
  ],

  education: [
    { title: "Professional Masters in Information Technology (PMIT)", place: "Jahangirnagar University, Savar", period: "2024 — 2025", note: "" },
    { title: "Post-Graduate Diploma in Information Technology (PGDIT)", place: "Jahangirnagar University, Savar", period: "2022 — 2023", note: "" },
    { title: "Diploma in System Analysis & Design with C# .NET", place: "IDB-BISEW IT Scholarship, Dhaka", period: "2017 — 2018", note: "Enterprise Systems Analysis and Design" },
    { title: "Bachelor of Business Studies (Management)", place: "Govt. City College, Chittagong", period: "2015", note: "" }
  ],

  certifications: [
    { title: "Microsoft Azure Administrator Associate", place: "Microsoft · AZ-104", period: "2025" },
    { title: "Developing ASP.NET MVC 4 Web Applications", place: "Microsoft · 70-486", period: "2019" },
    { title: "Programming in HTML5 with JavaScript and CSS3", place: "Microsoft · 70-480", period: "2018" }
  ],

  contact: {
    email: "atiqur.rahman.himel@gmail.com",
    github: "https://github.com/Md-Atiqur-Rahman",
    linkedin: "https://www.linkedin.com/in/md-atiqur-rahman-himel-702b51158"
  }
};
