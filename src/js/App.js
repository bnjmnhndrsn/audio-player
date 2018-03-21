import queryString from 'query-string';
import Audio from './Audio';

export default class App {
    constructor(){
        this.el = document.createElement('div');
        this.el.classList.add('container');
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    createAudio(){
        const parsed = queryString.parse(location.search);
        this.audio = new Audio();
        this.el.appendChild(this.audio.el);
        if (parsed.src) {
            this.audio.setSrc(parsed.src, parsed.time);
        }
    }

    bindEventHandlers(){
        document.addEventListener('keyup', this.onKeyPress);
    }

    onKeyPress(event){
        switch (event.code) {
            case "ArrowLeft":
                this.audio.skipBack();
                break;
            case "ArrowRight":
                this.audio.skipForward();
                break;
            case "Space":
                this.audio.togglePlayback();
                break;
            default:
                return;
        }
    }
}
