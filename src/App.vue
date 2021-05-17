<template>
  <div id="app">
    <div class="container">
      <div class="parent" ref="parentRef">
        <div class="child">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import { useScrollbar } from './composables/useScrollbar'

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

export default {
  name: 'App',
  components: {},
  setup() {
    const bodyRef = ref()
    const parentRef = ref()
    const { showScrollbar, hideScrollbar } = useScrollbar(document.body)
    const { showScrollbar: showParentScrollbar, hideScrollbar: hideParentScrollbar} = useScrollbar(parentRef)

    onMounted(async () => {
      bodyRef.value = document.body
      // hideScrollbar()
      await delay(2000)
      hideParentScrollbar()
      await delay(3000)
      showParentScrollbar()
    })

    return {
      parentRef
    }
  }
}
</script>

<style>
.container {
  height: 800px;
  overflow: hidden;
  background-color: pink;
}

.parent {
  max-height: 300px;
  background-color: cyan;
  margin: 50px;
  overflow-y: scroll;
}

.child {
  height: 600px;
  background-color: indigo;
  margin: 50px;
}
</style>
