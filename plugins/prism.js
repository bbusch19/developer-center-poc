import Vue from 'vue'
import Prism from 'vue-prism-component'

import 'prismjs'

// import 'prismjs/themes/prism-funky.css'

// import 'prismjs/components/prism-scss.min'

// import 'prismjs/plugins/autolinker/prism-autolinker.min'
// import 'prismjs/plugins/autolinker/prism-autolinker.css'

import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
Vue.component('prism', Prism)
