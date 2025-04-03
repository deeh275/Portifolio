

const skills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-plain colored" },
 
];

const duplicatedSkills = [...skills, ...skills];

const Carrosel = () => {
  return (
    <div className="skills-carousel">
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {duplicatedSkills.map((skill, index) => (
            <div className="skill-slide" key={index}>
              <i className={skill.icon} style={{ fontSize: '80px' }}></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrosel;
