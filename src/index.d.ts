type SpecialCases = Record<number, string>;

type Titles = string[];

declare function plural(number: number, titles: Titles, specialCases?: SpecialCases): string;

export default plural
