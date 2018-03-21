import queryString from 'query-string';
import Audio from './Audio';

export default class App {
    constructor(){
        this.el = document.createElement('div');
        this.el.classList.add('container');
    }

    createAudio(){
        const parsed = queryString.parse(location.search);
        this.audio = new Audio();
        this.el.appendChild(this.audio.el);
        if (parsed.src) {
            this.audio.setSrc(parsed.src, parsed.time);
        }
    }
}
