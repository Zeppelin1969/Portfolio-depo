import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    { name: "AWS", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Terraform", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
    { name: "Linux", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Node.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Git", path: "/assets/logos/git.svg" },
    { name: "GitHub", path: "/assets/logos/github.svg" },
    { name: "HTML5", path: "/assets/logos/html5.svg" },
    { name: "CSS3", path: "/assets/logos/css3.svg" },
    { name: "JavaScript", path: "/assets/logos/javascript.svg" },
    { name: "React", path: "/assets/logos/react.svg" },
    { name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    { name: "Three.js", path: "/assets/logos/threejs.svg" }
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={skill.path} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={skill.path} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
