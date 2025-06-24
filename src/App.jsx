

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaLaptopCode } from "react-icons/fa";
import avatar from "./assets/yogeeta.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [experienceTab, setExperienceTab] = useState("Work Experience");
  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => alert("Message sent successfully!"),
      (error) => alert("Message failed: " + error.text)
    );
    e.target.reset();
  };


  const navItems = ["About", "Projects", "Experience", "Contact"];
  // const categories = ["All", "Web App", "Game", "UI/UX"];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A sleek, responsive portfolio built with React and Tailwind CSS.",
      stack: ["React", "Tailwind CSS"],
      type: "Web App",
      url: "https://yogeeta-portfolio-delta.vercel.app/",
    },
    {
      title: "GTA-VI-Clone",
      desc: "Clean platform-clone made with React and Tailwind CSS, Provides the view of GTA-VI.",
      stack: ["React", "Tailwind CSS", "Frontend", "Framer Motion"],
      type: "Web App",
      url: "https://gta-react-project.vercel.app/",
    },
    {
      title: "My Task Manager",
      desc: "A fun and interactive Task Manager where you add tasks, delete tasks, search tasks and check list the tasks.",
      stack: ["React JS", "Javascript", "Tailwind CSS"],
      type: "Game",
      url: "https://task-manager-git-main-yogeetas-projects.vercel.app/"
    }
  ];

  const experiences = {
    
    "Certification": [
      {
        title: "Frontend Developer Course",
        company: "DevTown",
        year: "2023",
        points: ["Completed Frontend development with practical projects."]
      }
    ],

    "Work Experience": [
      {
        title: "Frontend Developer",
        company: "Personal Project",
        year: "2025",
        points: ["Built responsive clone website of GTA-VI and reusable UI components using React."]
      }
    ],

    "Education": [
      {
        title: "Bachelor of Technology",
        company: "Manav Rachna University",
        year: "2023–2027",
        points: ["Recognised in the DEAN's list for excellence in academics."]
      }
    ],
  };

  const categories = ["All", "Web App", "Game", "UI/UX"];

  return (
    <main className="bg-[#0f0f0f] text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#0f0f0f] z-60 px-8 py-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img src={avatar} alt="avatar" className="w-12 h-12 border-white rounded-full object-cover" />
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition">
              {item}
            </a>
          ))}
           <a href="Yogeeta_Resume_Updated.pdf"  className = "text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700" >
              Resume
            </a>
        </nav>
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
           <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button> 
      </header>


      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#0f0f0f] z-40 p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/abstract-wall-wave-architecture-black-background-black-background-presentation-portfolio-website_41204-2021.jpg')" }} >
        <div className="w-48 h-48 rounded-full border-4 border-white mb-4 overflow-hidden">
          <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl">Hi I'm <span className="text-yellow-300 font-bold">Yogeeta</span></h2>
        <h1 className="text-4xl md:text-5xl font-bold text-center max-w-xl">Building application products, brands, and experience.</h1>
        <p className="mt-4 text-center max-w-md text-gray-300">
          A Frontend Developer and Visual Designer with experience in web design, brand identity, and product design.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">CONNECT WITH ME</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">WHATSAPP MODE</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-24 py-24 bg-[#0c1323]">
        <h2 className="text-5xl font-bold mb-6">Crafting Digital Solutions with <br /><span className="text-green-400">Innovation</span> and <span className="text-blue-400">Precision</span></h2>
        <p className="text-gray-300 mb-4">Welcome to my portfolio! I am a passionate software developer with a knack for solving complex problems and building scalable, efficient solutions.</p>
        <p className="text-gray-300 mb-4">I specialize in Frontend development, blending creativity and technical expertise to deliver seamless user experiences.</p>
        <p className="text-gray-300">Let's build something extraordinary together. Dive into my portfolio to explore my skills, projects, and the journey that defines my passion for technology.</p>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-24 py-24 bg-[#0c1323]">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 ">
      
       {/* Frontend Card */}
    <div className="relative rounded-xl">
      <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 
                      animate-borderGlow bg-[length:400%_400%] blur-sm z-0"></div>

      <div className="relative bg-[#1e1e1e] p-6 rounded-xl z-10 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend</h3>
        <ul className="text-white space-y-2 text-sm">
          <li>⚛️ React</li>
          <li>🌊 Tailwind CSS</li>
          <li>📜 JavaScript</li>
        </ul>
      </div>
    </div>

    {/* Backend Card */}
    <div className="relative rounded-xl">
      <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 
                      animate-borderGlow bg-[length:400%_400%] blur-sm z-0"></div>

      <div className="relative bg-[#1e1e1e] p-6 rounded-xl z-10 border border-gray-700">
        <h3 className="text-xl font-bold text-green-400 mb-4">Language</h3>
        <ul className="text-white space-y-2 text-sm">
          <li>📌 Problem Solving</li>
          <li>🍃 Data Structure and Algorithms</li>
          <li>🟢 OOPS</li>
        </ul>
      </div>
    </div>

    {/* Database Card */}
    <div className="relative rounded-xl">
      <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 
                      animate-borderGlow bg-[length:400%_400%] blur-sm z-0"></div>

      <div className="relative bg-[#1e1e1e] p-6 rounded-xl z-10 border border-gray-700">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Database & Tools</h3>
        <ul className="text-white space-y-2 text-sm">
          <li>🛢 SQL</li>
          <li>🐱 Git</li>
          <li>🔧 Cursor AI</li>
          
        </ul>
      </div>
    </div>
  </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-24 py-24 bg-[#0c1323]">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          A collection of projects that showcase my skills and experience in building digital products.
        </p>
        <div className="flex justify-center gap-3 flex-wrap mb-10 ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm ${activeCategory === cat ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects
            .filter(p => activeCategory === "All" || p.type === activeCategory)
            .map((project, idx) => (
              <div key={idx} className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700 shadow -inset-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 
                      animate-borderGlow bg-[length:400%_400%] -sm z-0">
                <h3 className="text-xl font-semibold mb-2 text-black-700">{project.title}</h3>
                <p className="text-gray-300 mb-3">{project.desc}</p>
                <p className="text-sm font-semibold text-black mb-1">Tech Stack:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <a href="#" className="flex items-center gap-1 text-white"><FaGithub /> Code</a>
                  <a href={project.url || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white"><FaLaptopCode /> Live Demo</a>
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 md:px-24 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-blue-400">Experience</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          Explore my professional journey, showcasing the roles and responsibilities I have undertaken.
        </p>
        <div className="flex justify-center gap-3 mb-12">
          {Object.keys(experiences).map(tab => (
            <button
              key={tab}
              onClick={() => setExperienceTab(tab)}
              className={`px-4 py-1 rounded ${experienceTab === tab ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative border-l-2 border-gray-700 pl-6">
          {experiences[experienceTab].map((item, i) => (
            <div key={i} className="mb-10">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                {item.year.toString().slice(-2)}
              </div>
              <div className="bg-[#1e1e1e] p-6 rounded-xl ml-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-blue-400 text-sm mb-3">{item.company}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {item.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-24 py-24 bg-[#181818]">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4"><span className="text-blue-500">Contact</span> me</h3>
            <p className="text-gray-300 mb-6">Feel free to reach out for any inquiries, collaborations, or just to say hi!</p>
            <div className="flex items-center gap-3 text-gray-300 mb-3">
              <FaEnvelope className="text-blue-400" /> yogeeta1312@gmail.com
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-green-400" /> +91 8744092297
            </div>
          </div>
          <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-gray-800 p-3 rounded text-white w-full" />
                <input type="email" placeholder="Email" className="bg-gray-800 p-3 rounded text-white w-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone" className="bg-gray-800 p-3 rounded text-white w-full" />
                <select className="bg-gray-800 p-3 rounded text-white w-full">
                  <option>Select</option>
                  <option>General</option>
                  <option>Collaboration</option>
                  <option>Freelance</option>
                </select>
              </div>
              <textarea placeholder="Please write your message..." rows="5" className="bg-gray-800 p-3 rounded text-white w-full"></textarea>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-12">
          <h4 className="text-lg font-semibold text-white mb-2">Follow Me On</h4>
          <div className="flex justify-center space-x-6 text-xl">
            <a href="#" className="text-pink-500"><FaInstagram /></a>
            <a href="#" className="text-blue-500"><FaLinkedin /></a>
            <a href="#" className="text-white"><FaGithub /></a>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-600 border-t border-gray-700">
        © 2025 yogeeta. All rights reserved.
      </footer>
    </main>
  );
}
