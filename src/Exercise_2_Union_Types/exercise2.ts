// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 2 – Union Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • See how TypeScript performs code flow analysis
// • Understand Non-Nullable types
// • Create and apply union types
// • Use basic type guards (narrowing types w/ typeof)

export default () => {
  // ======== Exercise 2.0 ========
  // In strict mode, types in Typescript are non-nullable, that is,
  // you cannot assign `null` or `undefined` to variables types as `string` or `number`, for example
  // Instructions:
  // • Fix the error on lines 21 and 22 by setting the type of `secretWord` to `string OR null OR undefined`
  //   (Also called a Union type)

  let secretWord: (string|null|undefined);
  secretWord = "supercalifragilisticexpialidocious";
  secretWord = null;
  secretWord = undefined;

  console.log("[Exercise 2.0]", `The secret word is ${secretWord}`);

  // ======== Exercise 2.2 ========
  // Instructions:
  // • Restrict type of `value` to `string OR number`
  // • Fix any resulting errors.

  function doStuff(value: (string|number)): void {
    if (typeof value === "string") {
      console.log(value.toUpperCase().split("").join(" "));
    } else if (typeof value === "number") {
      console.log(value.toPrecision(5));
    }
    value; // hover over `value` here
  }

  doStuff(2);
  doStuff(22);
  doStuff(222);
  doStuff("hello");

  console.log("[Exercise 2.2]");

  // ======== Exercise 2.3 ========
  // Instructions:
  // • Use a type guard to fill out the body of the `padLeft` function.

  function padLeft(value: string, padding: (number|string)): string {
    // if padding is a number, return `${Array(padding + 1).join(' ')}${value}`

    if(typeof padding == "number") return `${Array(padding + 1).join(' ')}${value}`;
    // if padding is a string, return padding + value
    if(typeof padding == "string") return padding + value;

    return '';
  }

  console.log(
    "[Exercise 2.3]",
    `
    ${padLeft("🐕", 0)}
    ${padLeft("🐕", "🐩")}
    ${padLeft("🐕", "🐩🐩")}
    ${padLeft("🐕", "🐩🐩🐩")}
    ${padLeft("🐕", "🐩🐩🐩🐩")}
  `
  );
};
