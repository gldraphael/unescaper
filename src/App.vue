<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <h1 class="title is-1">The Unescaper</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading
        </h2>
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
import { Component, Vue } from "vue-property-decorator"
import { Unescaper } from "./services/Unescaper"

@Component({
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
