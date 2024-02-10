import { createApp, h } from "chibivue";

const app = createApp({
  render() {
    return h('div', {}, [h('button', {}, ['Hello world.'])])
  },
})

app.mount('#app')