type SpecialCases = Record<number, string>;

type Titles = string[];

export function plural(number: number, titles: Titles, specialCases?: SpecialCases): string;
