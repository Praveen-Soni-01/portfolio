import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Academix Cloud (School Management Dashboard)",
    description: "A self-hosted multi-role system for admins, teachers, students, and parents.",
    image: "/projects/academix-fullstack.png",
    liveSite: "https://academix-cloud-xdzs.vercel.app/",
    github: "https://github.com/Annonymous-001/Academix-cloud-fullstack",
    techStack: ["Next", "TypeScript", "Prisma", "Postgres","Tailwind","Docker","Shadcn"],
  },
  {
    title: "Paytm-Like Web App - Digital Wallet System",
    description: "A web-based payment system where users can sign up and receive initial virtual money, which can be transferred to other users within the system.",
    image: "/projects/paytm.png",
    liveSite: "",
    github: "https://github.com/Annonymous-001/paytm",
    techStack: ["Mongo", "Express", "React", "Node","Tailwind"],
  },
  {
    title: "Agency Management System",
    description: "A role-based system for Admin, Project Manager, Team Member, and Client with project tracking & assignments.",
    image: "/projects/agency-management.png",
    liveSite: "https://snapscale-portal.vercel.app/",
    github: "https://github.com/Annonymous-001/snapscale_portal",
    techStack: ["Next", "TypeScript", "Prisma", "Postgres","Tailwind","NextAuth"],
  },
  {
    title: "Verse Trail - Blogging Platform",
    description: "A minimalist blogging app where users can post blogs with a title, description, author name, and publish date. Blogs are displayed in a structured format for easy readability.",
    image: "/projects/project-1.png",
    liveSite: "https://verse-trail.vercel.app/",
    github: "https://github.com/Annonymous-001/Verse-Trail",
    techStack: ["Cloudflare", "Next", "Postgres", "Prisma", "Tailwind"],
  },
  {
    title: "Helix Institute - UI/UX Redesign",
    description: "Enhanced usability, navigation, and accessibility for an educational platform.",
    image: "/projects/helix.png",
    liveSite: "https://helix-institute.vercel.app/",
    github: "https://github.com/Annonymous-001/Helix-Institute",
    techStack: ["Next", "TypeScript","Tailwind"],
  },
  {
    title: "Academix Cloud - SaaS Landing Page",
    description: "Animated SaaS landing page with authentication and PostgreSQL integration.",
    image: "/projects/academix-landing.png",
    liveSite: "https://academix-cloud-xdzs.vercel.app/",
    github: "https://github.com/Annonymous-001/Academix-cloud",
    techStack: ["Next", "TypeScript", "Postgres","Tailwind","Prisma"],
  },
  {
    title: "SnapScale Media - UI Redesign",
    description: "Revamped digital agency UI for brand consistency and responsiveness and smooth animation for micro interactions.",
    image: "/projects/snapscale-redesign.png",
    liveSite: "https://snapscale-media.vercel.app/",
    github: "https://github.com/Annonymous-001/Snapscale_media",
    techStack: ["Next", "TypeScript","Tailwind"],
  },
  {
    title: "Get Fit - Mobile App UI/UX & Frontend",
    description: "Fitness app frontend with some native mobile capabilities.",
    image: "/projects/getfit.png",
    liveSite: "",
    github: "https://github.com/Annonymous-001/get-fit",
    techStack: ["Next", "TypeScript","Tailwind","Capacitor"],
  },
  {
    title: "Lustra Jewellery Store - E-commerce Website",
    description: "Developed a fully functional online jewellery store with payment and shipping integrations.",
    image: "/projects/lustra.png",
    liveSite: "https://lustra.co.in/",
    github: "",
    techStack: ["Wordpress", "Shopify",],
  }
];

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">my projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            check out some of the projects i have worked on.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={{ ...project, github: project.github ?? null }} />
          ))}
        </div>
      </div>
    </section>
  );
}