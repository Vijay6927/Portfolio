import Card from './Card';

const Projects = () => {
  const desc = "A digital whiteboard application that allows users to collaborate in real-time, share ideas, and brainstorm effectively.";
  const desc2 = "A Streamlit application to analyze WhatsApp chat exports, offering insights into messaging patterns, user activity, and more.";
  const desc3 = "A Web application that efficiently manage employee details, roles, and access with user-friendly admin and employee dashboards.";
  const desc4 = "An interactive web-based memory matching game using HTML, CSS, and JavaScript.";
  const tech3 = "React, Tailwind CSS, JavaScript, LocalStorage";
  const technologies = "React, Next.js, Node.js with WebSocket (Socket.IO), Express, MongoDB, JWT, OAuth";
  const tech2 = "Python, Streamlit, Pandas, Matplotlib / Seaborn / Plotly, NLTK / Emoji";
  const tech4 = "HTML, CSS, JavaScript";
  const git = "https://github.com/Vijay6927/Real-Time-Collaborative-Whiteboard";
  const git2 = "https://github.com/Vijay6927/Memory-Game";
  const git3 = "https://github.com/Vijay6927/WhatsApp-Chat-Analysis";
  const li = "http://memorygame27.netlify.app/";
  const li2 = "https://real-time-collaborative-whiteboard-gd3r.onrender.com/";
  const git4="https://github.com/Vijay6927/Employee-Management-System";

  return (
    <div className="px-4 py-16">
    
      <h1 className="text-4xl md:text-5xl font-bold  mb-12">
        <span className="text-blue-500 text-2xl md:text-3xl">--------------------</span> Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <Card
          image={"/pro.png"}
          title={"Real-Time-Collaborative-Whiteboard"}
          description={desc}
          tech={technologies}
          github={git}
          linkk={li2}
        />
        <Card
          image={"/whats.png"}
          title="WhatsApp-Chat-Analyzer"
          description={desc2}
          tech={tech2}
          github={git3}
        />
        <Card
          image={"/employee.png"}
          title="Employee-Management-System"
          description={desc3}
          tech={tech3}
          github={git4}
        />
        <Card
          image={"/memory.png"}
          title="Memory Game"
          description={desc4}
          tech={tech4}
          github={git2}
          linkk={li}
        />
      </div>
    </div>
  );
};

export default Projects;
