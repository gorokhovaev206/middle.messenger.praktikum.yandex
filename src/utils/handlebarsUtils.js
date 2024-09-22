import Handlebars from 'handlebars';
import * as components from '../components'
import arrowRight from '../static/arrowRight.svg'
import arrowBack from '../static/arrowBack.svg'
import clip from '../static/clip.svg'
import defaultPhoto from '../static/default.webp'


export const navigate = (page) => {
    const handlebarsFunc = Handlebars.compile(page);
    document.getElementById('app').innerHTML = handlebarsFunc({arrowBack: arrowBack, arrowRight: arrowRight, clip: clip, defaultPhoto: defaultPhoto});
}

export const initialComponents = () => {
    Object.entries(components).forEach(([ name, component ]) => {
        Handlebars.registerPartial(name, component);
      });
}