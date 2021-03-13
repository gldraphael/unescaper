<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <h1 class="title is-1">The Unescaper</h1>
      </div>
      <div class="container">
        <div class="field">
          <label class="label">Enter text to be unescaped</label>
          <div class="control">
            <textarea
              class="textarea is-primary"
              rows="10"
              placeholder="Paste text to be unescaped here."
              v-model="inputText"
              @input="inputChanged()"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Unescaped text</label>
          <div class="control">
            <textarea
              class="textarea is-primary"
              rows="10"
              placeholder="The unescaped text will appear here."
              readonly
              v-model="escapedText"
            ></textarea>
          </div>
        </div>
      </div>
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
