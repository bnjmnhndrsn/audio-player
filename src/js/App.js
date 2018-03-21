import queryString from 'query-string';
import Audio from './Audio';

export default class App {
    init(){
        const parsed = queryString.parse(location.search);
        const audio = new Audio();
        this.container = document.createElement('div');
        this.container.classList.add('container');
        document.body.appendChild(this.container);
        this.container.appendChild(audio.el);
        if (parsed.src) {
            audio.setSrc(parsed.src, parsed.time);
        }
    }
}
