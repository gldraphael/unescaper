<template>
  <div id="app" class="max-w-xl mx-auto p-4">
    <section>
      <h1 class="text-2xl font-bold">The Unescaper</h1>
      <textarea
        class="w-full mt-4 font-mono text-xs rounded"
        rows="10"
        placeholder="Paste text to be unescaped here."
        v-model="inputText"
        @input="inputChanged()"
      ></textarea>

      <label class="block mt-2 mb-1 text-xs uppercase font-bold text-gray-400">Unescaped text</label>
      <textarea
        class="w-full font-mono text-xs rounded"
        rows="10"
        placeholder="The unescaped text will appear here."
        readonly
        v-model="escapedText"
      ></textarea>
    </section>
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
