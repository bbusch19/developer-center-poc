import Vue from 'vue'
import VuePrismEditor from 'vue-prism-editor'
import 'prismjs'
import 'vue-prism-editor/dist/VuePrismEditor.css' // import the styles
import '~/assets/css/prism-code-editor.css'

Vue.component('prism-editor', VuePrismEditor)
