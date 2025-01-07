declare module 'pluralize-tool' {
  type SpecialCases = Record<number, string>;
  type Titles = string[];

  function plural(number: number, titles: Titles, specialCases?: SpecialCases): string;

  export default plural;
}
