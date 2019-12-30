export class Unescaper {

  // See: https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/#string-escape-sequences
  // See: https://sqlquantumleap.com/2019/06/26/unicode-escape-sequences-across-various-languages-and-platforms-including-supplementary-characters/#csharp
  private static validSequences: {[id:string]: string } = {
    "\\'":  "'", // Single quote
    "\\\"": "\"", // Double quote
    "\\":   "\\", // backslash
    "\\0":  "\0", // Unicode 0
    "\\a":  "\\a", // Alert
    "\\b":  "\b", // Backspace
    "\\f":  "\f", // Formfeed
    "\\n":  "\n", // Newline
    "\\r":  "\r", // Carriage return
    "\\t":  "\t", // Horizontal tab
    "\\v":  "\v", // Vertical tab
  }

  private static mapBeginnig(text: string, length: number): string | null {
    let mapping = this.validSequences[text.substr(0, length)]
    if(mapping !== undefined) return mapping
    return null
  }

  private static unescapeIteration(text: string, length: number): string {
    let processedText: string = "";
    for(let i = 0; i < text.length; i++) {
      var substring = text.substring(i)
      const mapping = this.mapBeginnig(substring, length)
      if(mapping !== null) {
        processedText += mapping
        i += length - 1
      }
      else {
        processedText += substring[0]
      }
    }
    return processedText
  }

  static unescape(text: string): string {
    let processedText: string = this.unescapeIteration(text, 4)
    processedText = this.unescapeIteration(text, 3)
    processedText = this.unescapeIteration(text, 2)
    return processedText
  }

}
