import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  category: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
  stack: string[];
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

type IconProps = {
  className?: string;
};

function GithubIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.344-3.369-1.344-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.34H5.67V18H8.34V10.34ZM7 6A1.56 1.56 0 0 0 5.44 7.56 1.56 1.56 0 0 0 7 9.11 1.56 1.56 0 0 0 8.56 7.56 1.56 1.56 0 0 0 7 6ZM18.33 13.32C18.33 10.95 17.83 9.13 15.06 9.13C13.73 9.13 12.84 9.86 12.47 10.56H12.43V9.34H9.87V18H12.54V13.71C12.54 12.58 12.75 11.49 14.15 11.49C15.53 11.49 15.55 12.78 15.55 13.78V18H18.22L18.33 13.32Z" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

function PremiumButton({
  href,
  label,
  icon,
  variant = "dark",
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: "dark" | "light" | "blue" | "outline";
}) {
  const styles = {
    dark: "bg-black/70 text-white hover:bg-white/10 hover:shadow-blue-500/30",
    light: "bg-white text-black hover:bg-white/90 hover:shadow-purple-500/30",
    blue: "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-blue-500/30",
    outline: "border border-white/20 bg-black/40 text-white hover:bg-white/10 hover:shadow-white/20",
  };

  return (
    <button
      type="button"
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
      className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm shadow-lg transition-all hover:-translate-y-0.5 sm:w-auto sm:text-base ${styles[variant]}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default function HrishikeshPortfolio() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["AI/ML systems", "full-stack apps", "cloud pipelines", "data products", "scalable APIs"],
    []
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTitleNumber((current) => (current === titles.length - 1 ? 0 : current + 1));
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const featuredProject = {
    title: "NASA EONET Interactive Dashboard",
    category: "Geospatial Data Product",
    description:
      "A production-style React dashboard that turns NASA EONET's natural event feed into an interactive map experience for monitoring wildfires, storms, volcanic activity, and other active events.",
    approach:
      "The build focuses on API integration, event normalization, geospatial visualization, and filtering workflows so users can move from a global overview to specific event details quickly.",
    featuredReason:
      "I featured this project because it reflects the kind of work I enjoy most: taking complex real-world data and shaping it into a clear, useful experience people can explore.",
    highlights: ["Real-time NASA data", "Map-centered discovery", "Category-based filtering"],
    metrics: [
      { label: "Source", value: "NASA EONET" },
      { label: "Interface", value: "Interactive map" },
      { label: "Focus", value: "Event exploration" },
    ],
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    stack: ["React", "EONET API", "Maps", "Data Visualization"],
  };

  const projects: Project[] = [
    {
      id: "5",
      title: "Hospital Management System",
      category: "Java / SQL Application",
      period: "Jan 2024 – May 2024",
      duration: "5 months",
      description:
        "Java OOP desktop application backed by a relational SQL database with normalized schemas, optimized CRUD flows, and a JavaFX UI.",
      highlights: ["JavaFX UI", "Normalized schema", "Usability-focused"],
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      stack: ["Java", "SQL", "JavaFX", "OOP"],
    },
    {
      id: "3",
      title: "COVID-19 Survival Prediction",
      category: "ML Pipeline",
      period: "Jun 2024 – Jul 2024",
      duration: "2 months",
      description:
        "Python ETL and machine learning pipeline built on 200K+ records with model benchmarking, feature engineering, and fairness-oriented analysis.",
      highlights: ["200K+ records", "87% accuracy", "Cross-validation"],
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
      stack: ["Python", "SVM", "Logistic Regression", "Decision Trees", "ETL"],
    },
    {
      id: "1",
      title: "StudyHub",
      category: "Cross-Platform Full Stack App",
      period: "Aug 2024 – Dec 2024",
      duration: "5 months",
      description:
        "React Native and TypeScript app built from scratch with a Node.js/Express backend, Firebase real-time data, authentication, sync, and push notifications.",
      highlights: ["200+ active users", "Real-time sync", "Mobile-first UX"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      stack: ["React Native", "TypeScript", "Node.js", "Express", "Firebase"],
    },
    {
      id: "4",
      title: "Stock Peak & Valley Prediction",
      category: "Forecasting Tool",
      period: "Aug 2024 – Dec 2024",
      duration: "5 months",
      description:
        "Financial forecasting application using ARIMA time-series modeling and clustering across 100K+ records with back-testing for decision support.",
      highlights: ["100K+ records", "12% ROI improvement", "ARIMA modeling"],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      stack: ["Python", "ARIMA", "Time Series", "Clustering"],
    },
    {
      id: "2",
      title: "AWS Cloud Data Pipeline",
      category: "Cloud ETL / DevOps",
      period: "Aug 2024 – May 2025",
      duration: "10 months",
      description:
        "Cloud-native ETL pipeline on AWS with S3, Lambda, Athena, and CloudFormation, supported by GitHub Actions and reusable documentation assets.",
      highlights: ["60% fewer deployment errors", "40% faster incident response", "CI/CD automation"],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      stack: ["AWS", "Lambda", "Athena", "CloudFormation", "GitHub Actions"],
    },
    {
      id: "6",
      title: "Fundraising Analytics Pipelines",
      category: "Internship Impact",
      period: "Jan 2025 – Present",
      duration: "Ongoing",
      description:
        "Automated Python and PostgreSQL data workflows and delivered Power BI dashboards that improved reporting speed and reliability.",
      highlights: ["~50% faster turnaround", "Data reliability", "Executive dashboards"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      stack: ["Python", "PostgreSQL", "Power BI", "Analytics"],
    },
  ];

  const aiFirstProjectOrder: Record<string, number> = {
    "3": 0,
    "4": 1,
    "6": 2,
    "2": 3,
    "1": 4,
    "5": 5,
  };

  const orderedProjects = [...projects].sort(
    (a, b) => aiFirstProjectOrder[a.id] - aiFirstProjectOrder[b.id]
  );

  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "Go",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Firebase",
    "AWS",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Power BI",
    "Azure OpenAI",
    "AWS Bedrock",
  ];

  const experience: ExperienceItem[] = [
    {
      role: "Data Analytics Intern",
      company: "ChangingThePresent.org / Important Gifts Inc.",
      period: "Jan 2025 – Present",
      bullets: [
        "Built automated Python and PostgreSQL data pipelines for fundraising analytics.",
        "Designed Power BI dashboards for donor engagement KPIs and leadership visibility.",
        "Improved data quality by identifying and resolving distribution inconsistencies.",
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "Nexus DevOps",
      period: "May 2024 – Aug 2024",
      bullets: [
        "Built production REST APIs and backend services in Java, Python, and TypeScript.",
        "Optimized SQL schemas and queries, reducing average API response time by 25%.",
        "Deployed services with Docker, Kubernetes, and GitHub Actions CI/CD workflows.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-black via-zinc-950 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),transparent_34%,rgba(20,184,166,0.045))]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 md:px-10 lg:px-12 lg:py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/60 sm:text-sm sm:tracking-[0.28em]">
            AI/ML + Software Engineering Portfolio
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hrishikesh Rajaputra
            <span className="relative mt-2 flex h-24 w-full items-start justify-center overflow-hidden sm:h-20 md:h-24">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute max-w-full px-1 text-blue-400"
                  initial={{ opacity: 0, y: -100 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -100 : 100, opacity: 0 }
                  }
                  transition={{ duration: 0.6 }}
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Software engineer building production full-stack apps, backend APIs,
            cloud data pipelines, and AI/ML products from messy data to usable interfaces.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <PremiumButton
              href="https://github.com/Hrishikesh1211"
              label="GitHub"
              icon={<GithubIcon />}
              variant="dark"
            />
            <PremiumButton
              href="https://www.linkedin.com/in/hrishikeshrajaputra"
              label="LinkedIn"
              icon={<LinkedinIcon />}
              variant="light"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-white/80 sm:gap-3">
            <span className="rounded-lg border border-white/15 bg-black/60 px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/10 hover:text-blue-100 sm:px-4">
              AI/ML Projects
            </span>
            <span className="rounded-lg border border-white/15 bg-black/60 px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/10 hover:text-blue-100 sm:px-4">
              Full-Stack Software
            </span>
            <span className="rounded-lg border border-white/15 bg-black/60 px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/10 hover:text-blue-100 sm:px-4">
              Cloud + Data Engineering
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12">
        <div className="group mb-12 overflow-hidden rounded-lg border border-white/10 bg-black/80 shadow-2xl shadow-black/30 transition duration-500 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-blue-500/10 md:mb-16">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[360px] sm:min-h-[390px] lg:min-h-[480px]">
              <img
                src={featuredProject.image}
                alt="NASA EONET Interactive Dashboard preview"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-200/80 sm:tracking-[0.3em]">
                  Featured Case Study
                </p>
                <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight transition duration-300 group-hover:text-blue-100 sm:text-3xl md:text-4xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-3 text-sm text-white/62">{featuredProject.category}</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-blue-300/80 sm:tracking-[0.28em]">
                Project Overview
              </p>
              <p className="mt-4 text-base leading-7 text-white/82 sm:text-lg sm:leading-8">{featuredProject.description}</p>
              <p className="mt-4 leading-7 text-white/68">{featuredProject.approach}</p>
              <p className="mt-5 border-l border-blue-400/40 pl-4 text-sm leading-7 text-white/68">
                {featuredProject.featuredReason}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {featuredProject.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/42 sm:tracking-[0.22em]">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/86">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {featuredProject.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-500/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-white/42 sm:tracking-[0.22em]">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-black/60 px-3 py-1 text-xs text-white/70 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <PremiumButton
                  href="https://nasa-eonet-dashboard.netlify.app/"
                  label="Live Demo"
                  icon={<ExternalLinkIcon />}
                  variant="blue"
                />
                <PremiumButton
                  href="https://github.com/Hrishikesh1211/earth-insight-engine"
                  label="GitHub"
                  icon={<GithubIcon />}
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.28em]">
              Selected Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">Project timeline</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
              AI/ML, forecasting, and analytics projects appear first, followed by the
              full-stack, backend, and cloud systems that show production engineering depth.
            </p>
          </div>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-black/70 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-lg hover:shadow-blue-500/10">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45 sm:tracking-[0.24em]">
              Total project timeline
            </p>
            <p className="mt-2 text-3xl font-semibold">1+ Years</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/70 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-lg hover:shadow-blue-500/10">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45 sm:tracking-[0.24em]">
              Core areas
            </p>
            <p className="mt-2 text-base text-white/72">
              AI/ML, Full Stack, Backend APIs, Cloud, Data Pipelines
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <div className="space-y-8">
            {orderedProjects.map((project, index) => (
              <div key={project.id} className="group relative grid gap-4 pl-8 md:grid-cols-2 md:gap-10 md:pl-0">
                <div className={index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}>
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-black/70 transition duration-500 group-hover:-translate-y-1 group-hover:border-blue-300/30 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                    <div className="relative h-56 overflow-hidden sm:h-60">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/60 transition duration-300 group-hover:text-blue-200 sm:tracking-[0.28em]">
                          {project.category}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold leading-tight transition duration-300 group-hover:text-blue-100 sm:text-2xl">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12"}>
                  <div className="rounded-lg border border-white/10 bg-black/70 p-5 transition duration-500 group-hover:-translate-y-1 group-hover:border-blue-300/30 group-hover:shadow-2xl group-hover:shadow-blue-500/10 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white/60 sm:tracking-[0.2em]">
                        {project.period}
                      </span>
                      <span className="rounded-lg bg-black/60 px-3 py-1 text-xs text-white/70">
                        {project.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/72">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/10 hover:text-blue-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-black/60 px-3 py-1 text-xs text-white/65 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 top-8 h-3 w-3 -translate-x-1/2 rounded-full border border-white/20 bg-white transition duration-300 group-hover:scale-125 group-hover:border-blue-200 group-hover:bg-blue-300 group-hover:shadow-lg group-hover:shadow-blue-400/40 md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.28em]">About</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
              Engineering across the stack
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
              My work spans backend APIs, frontend applications, cloud infrastructure,
              data pipelines, automation, and AI integration. I enjoy taking an idea
              from architecture to deployment, with strong attention to code quality,
              documentation, and delivery.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-white/10 bg-black/70 px-4 py-3 text-sm text-white/78 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-blue-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.28em]">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">Recent roles</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experience.map((item) => (
            <div
              key={item.role}
              className="rounded-lg border border-white/10 bg-black/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-white/45 sm:text-sm sm:tracking-[0.24em]">
                {item.period}
              </p>
              <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{item.role}</h3>
              <p className="mt-2 text-white/60">{item.company}</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/72">
                {item.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 md:px-10 md:pb-20 lg:px-12">
        <div className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.025] to-black p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.28em]">
            Certifications & Leadership
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Credentials</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Anthropic Claude with Amazon Bedrock, Databricks AI Agent Fundamentals,
                Databricks Generative AI Fundamentals, Power BI, Playwright/TypeScript,
                Tricentis Tosca AS1, and AWS certifications.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Leadership</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Founded and led the Penn State Badminton Club and contributed to FIRST
                Robotics programming, building early experience in teamwork, ownership,
                and shipping under deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
