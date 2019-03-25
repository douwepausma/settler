// JAVASCRIPT
// Bootstrap
import 'bootstrap';

// AOS
// import AOS from 'aos';
// AOS.init();


// jQuery
import $ from 'jquery';

import _ from 'lodash';

// VUE
import Vue from 'vue';

// Vue Components
import settlergatherrer from '../components/settler-gatherrer.vue';

new Vue({ 
	el: '#settler',
	components: {
		settlergatherrer,
	} 
})


// FontAwesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faDownload, faTrash, faPlus, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

library.add(faTimes, faDownload, faTrash, faNpm, faGithub, faPlus, faAngleUp )

dom.watch()

// Custom Javascript
import './js/smoothscroll.js';
import './js/app.js';

// STYLESHEETS
import './scss/app.scss';

// IMAGES
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
