import Project from '../components/Project.jsx';

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        <Project
          title="Potty Partner"
          description="Potty Partner is a social media web app designed to help users find bathrooms and leave reviews. This was designed in conjunction with Tristin Rohr and Nick Zamboni"
          image="/images/potty_partner.png"
          appLink="https://potty-partner.onrender.com/"
          repoLink="https://github.com/ndzamboni/Potty_Partner"
        />
        <Project
          title="CMS Blog"
          description="CMS Blog is a content management system designed for managing blog posts. It provides an easy-to-use interface for creating, editing, and deleting blog posts."
          image="/images/cms_blog.png"
          appLink="https://cms-blog-t3b8.onrender.com/"
          repoLink="https://github.com/contra19/cms-blog"
        />
        <Project
          title="Simple Task Board"
          description="A simple Kanban board for task management."
          image="/images/simple_task_board.png"
          appLink="https://contra19.github.io/kanban-board/"
          repoLink="https://github.com/contra19/kanban-board"
        />
        <Project
          title="PWA Text Editor - J.A.T.E."
          description="Just Another Text Editor (J.A.T.E.) is a progressive web application (PWA) that provides a seamless text editing experience with offline support."
          image="/images/jate.png"
          appLink="https://just-another-text-editor-yce1.onrender.com"
          repoLink="https://github.com/contra19/pwa-text-editor"
        />
        <Project
          title="Basic Weather App"
          description="CMS Blog is a content management system designed for managing blog posts. It provides an easy-to-use interface for creating, editing, and deleting blog posts."
          image="/images/weather_app.png"
          appLink="https://contra19.github.io/weather-app/"
          repoLink="https://github.com/contra19/weather-app"
        />
        <Project
          title="Simple Note Taker"
          description="The Note Taker App is a simple and intuitive application that allows users to create, save, and delete notes."
          image="/images/note_taker.png"
          appLink="https://note-taker-3eo2.onrender.com/"
          repoLink="https://github.com/contra19/note-taker"
        />
      </div>
    </div>
  );
}

export default Portfolio;