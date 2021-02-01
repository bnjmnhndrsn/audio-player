import './styles.css';
import App from './js/app';

document.addEventListener('DOMContentLoaded', function() {
    const app = new App();
    document.body.appendChild(app.el);
    app.createAudio();
});
