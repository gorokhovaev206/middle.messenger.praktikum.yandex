import './style.less'
import {login, registration, chats, notFound, error, profile} from './src/pages'
import {navigate, initialComponents} from './src/utils'


initialComponents();
navigate(login);



document.addEventListener('click', (e) => {
  const page = e.target.getAttribute('page');

  switch (page) {
    case 'login': {
      navigate(login);
      break;
    }
    case 'registration': {
      navigate(registration);
      break;
    }
    case 'chats': {
      navigate(chats);
      break;
    }
    case 'profile': {
      navigate(profile);
      break;
    }
    case '404': {
      navigate(notFound);
      break;
    }
    case '500': {
      navigate(error);
      break;
    }
  }
  e.preventDefault();
  e.stopImmediatePropagation();

});

document.addEventListener('DOMContentLoaded', (e) => {
  navigate(login);
});
