<template>
  <div id="app" class="max-w-screen-lg mx-auto p-12">
    <h1 class="text-4xl font-bold">The Unescaper</h1>
    <textarea
      class="w-full mt-8 font-mono text-sm rounded"
      rows="16"
      placeholder="Paste text to be unescaped here."
      v-model="inputText"
      @input="inputChanged()"
    ></textarea>

    <label class="block mt-4 mb-2 text-sm uppercase font-bold text-gray-400"
      >Unescaped text</label
    >
    <textarea
      class="w-full font-mono text-sm rounded"
      rows="16"
      placeholder="The unescaped text will appear here."
      readonly
      v-model="escapedText"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Unescaper } from "./services/Unescaper"
import { Vue, Options } from "vue-class-component"

@Options({
  components: {}
})
export default class App extends Vue {
  inputText: string = ""
  escapedText: string = ""

  inputChanged() {
    this.escapedText = Unescaper.unescape(this.inputText)
  }
}
</script>
