<template>
  <input
    id="algolia"
    v-model="search"
    placeholder="Enter a search"
    class="nui-search-input"
    type="text"
    name="search"
  />
</template>

<script>
let scriptInjected = false
const callbacks = []
const onScriptLoaded = (cb) => callbacks.push(cb)
const scriptLoaded = () => callbacks.forEach((cb) => cb())

export default {
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    onScriptLoaded(() => this.addInstantSearch())
    if (scriptInjected) {
      return
    }
    // Load JS
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute(
      'src',
      '//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js'
    )
    document.getElementsByTagName('body')[0].appendChild(script)
    script.onload = scriptLoaded
    // Load CSS
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute(
      'href',
      'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
    )
    document.getElementsByTagName('body')[0].appendChild(link)
    scriptInjected = true
  },
  methods: {
    addInstantSearch() {
      window.docsearch({
        apiKey: process.env.SEARCH_API_KEY,
        appId: process.env.APPLICATION_ID,
        indexName: 'example',
        inputSelector: '#algolia',
        debug: true // Set debug to true if you want to inspect the dropdown
      })
    },
    reset() {
      // todo call API
      this.q = ''
    }
  }
}
</script>
