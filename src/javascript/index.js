import '../styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import projects from './projects';
import dom from './dom';
import handlers from './handlers';

dom.showProjects()

handlers.listenForClicks()
handlers.handleProjectForm()
handlers.handleTaskForm()