import React from "react";
import "../css/example.css";
import srakungImage from "../images/srakung.png";
import sertifnemo from "../images/sertifnemo.png";
import sertifweb from "../images/sertifweb.png";
import sertifaws from "../images/aws.png";
import pico from "../images/pico.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaPhp, FaLaravel, FaReact } from "react-icons/fa";
import { SiDart, SiFlutter } from "react-icons/si";

const techLogos = [
  { icon: <FaHtml5 />, color: "#E34F26" },
  { icon: <FaCss3Alt />, color: "#1572B6" },
  { icon: <FaJs />, color: "#F7DF1E" },
  { icon: <FaNodeJs />, color: "#339933" },
  { icon: <FaPython />, color: "#3776AB" },
  { icon: <FaPhp />, color: "#777BB4" },
  { icon: <FaLaravel />, color: "#FF2D20" },
  { icon: <SiDart />, color: "#0175C2" },
  { icon: <SiFlutter />, color: "#02569B" },
  { icon: <FaReact />, color: "#61DAFB" },
];

const projects = [
  {
    title: "Website Pantai Srakung",
    image: srakungImage,
    description: "Website informasi tentang Pantai Srakung Gunungkidul.",
    link: "https://github.com/SatriaMatahariSampurna/Website-Pantai-Srakung",
  },
  {
    title: "MyApp",
    description: "Aplikasi mobile menggunakan Flutter untuk berbagai keperluan.",
    link: "https://github.com/SatriaMatahariSampurna/MyApp",
  },
  {
    title: "Hanfir",
    description: "Sistem berbasis web untuk manajemen data.",
    link: "https://github.com/SatriaMatahariSampurna/hanfir",
  },
];

const sertifikat = [
  {
    title: "Belajar Dasar Pemrograman Web",
    image: sertifweb,
  },
  {
    title: "Magang Nemo",
    image: sertifnemo,
  },

  {
    title: "aws",
    image: sertifaws,
  },
];

const dokumentasi = [
  {
    title: "HackTheBox — Appointment",
    image: s1,
    description: "pada kali ini saya mau membagikan sebuah tutorial atau panduan untuk menyelesaikan soal test di hackthebok — Appointment....",
    link: "https://medium.com/@satriaykc54/hackthebox-appointment-satria-m-s-e59f5f797cc7",
  },
  {
    title: "PicoCFT-Super SSH",
    image: pico,
    description: "Pada kesempatan kali ini saya akan membagikan langkah langkah untuk menyelesaikan soal di picoCTF-Super SSH.....",
    link: "https://medium.com/@satriaykc54/picocft-super-ssh-c0a4b52cdd95",
  },
  {
    title: "HackTheBok — Dancing",
    image: s2,
    description: "pada kali ini saya mau membagikan sebuah tutorial atau panduan untuk menyelesaikan soal test di hacktehbok — dancing.....",
    link: "https://medium.com/@satriaykc54/hackthebok-dancing-760e1f3a053a",
  },
]

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <nav className="navbar">
       
      </nav>

      <header className="header">
        <div className="header-content">
          <div className="text-container">
            <h2>Hi, I'm</h2>
            <motion.h3 initial={{ x: -1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
              Satria Matahari Sampurna
            </motion.h3>
            <motion.h4 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
              Programmer and Cyber Security
            </motion.h4>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/62xxxxxxxxxx" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="about-me">
        <h2>Tentang Saya</h2>
        <p>
          Saya memiliki kemampuan untuk bekerja secara individu maupun dalam tim dengan baik. Saya juga mudah beradaptasi dalam lingkungan kerja dan
          selalu bersemangat untuk mempelajari teknologi baru. Dengan pendekatan yang efisien dan responsif, saya siap memberikan kontribusi terbaik untuk
          tim dan perusahaan.saya adalah seorang web developer dengan keahlian di bidang front-and dengan bahasa react.js, php, dan sql. selain itu saya memiliki
          pengalaman di bidang cyber security khususnya sebagai SOC Analnyst dengan memanfaatkan wazuh untuk memonitoring server dan sebagai penetration testing.
          saya sangat senang bekerja sama dengan tim ataupun individual, saya juga sangat mudah beradaptasi dalam lingkuangan pekerjaan, pertemanan,
          saya juga cepat beradaptasi dengan perkembangan teknologi, dan memiliki semangat yang tinggi dan juga efesiensi dan responsif        </p>

      </section>

      <section id="skills" className="skills">
        <h2>Keahlian</h2>
        <div className="tech-grid">
          {techLogos.map((tech, index) => (
            <div key={index} className="tech-box" style={{ color: tech.color }}>
              {tech.icon}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
  <h2>Proyek</h2>
  <div className="project-grid">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.image} alt={project.title} />
        <h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
  <div className="view-all-container">
    <a href="/project.jsx" className="view-all-button">View All Projects</a>
  </div>
</section>


      <section id="dokumentasi" className="dokumentasi">
        <h2>Dokumentasi</h2>
        <div className="dokumentasi-grid">
          {dokumentasi.map((dokumentasi, index) => (
            <div key={index} className="dokumentasi-card">
              <img src={dokumentasi.image} alt={dokumentasi.title} />
              <h3>{dokumentasi.title}</h3>
              <p>{dokumentasi.description}</p>
              <a href={dokumentasi.link} target="_blank" rel="noopener noreferrer">Lihat Detail</a>
            </div>
          ))}
        </div>
        <div className="view-all-container">
    <a href="https://medium.com/@satriaykc54" className="view-all-button" target="_blank" rel="noopener noreferrer">
      View All Dokumentasi
    </a>
  </div>
      </section>

      <section id="sertifikat" className="sertifikat">
        <h2>Sertifikat</h2>
        <div className="sertifikat-grid">
          {sertifikat.map((sertifikat, index) => (
            <div key={index} className="sertifikat-card">
              <img src={sertifikat.image} alt={sertifikat.title} />
              <h3>{sertifikat.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
