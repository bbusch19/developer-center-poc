import Vue from 'vue'
import BaseList from '~/components/BaseList.vue'
import BaseListItem from '~/components/BaseListItem.vue'
import BaseEndpoint from '~/components/BaseEndpoint'

// Any components that need to be accesesed globally can be instantiated in this file.
// For example: components that need to be rendered through rich text.
Vue.component('base-list', BaseList)
Vue.component('base-list-item', BaseListItem)
Vue.component('BaseEndpoint', BaseEndpoint)
