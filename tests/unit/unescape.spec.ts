import { Unescaper } from "@/services/Unescaper";

describe("Unescaper.unescape()", () => {
  it("returns expected values", () => {
    // Arrange
    const input = "how y\\\'all doing!\\n\\\"FINE!\\\"";
    const expectedOutput = "how y\'all doing!\n\"FINE!\"";

    // Act
    var output = Unescaper.unescape(input)

    // Assert
    expect(output).toBe(expectedOutput)
  });
});
