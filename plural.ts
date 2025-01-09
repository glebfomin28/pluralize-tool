type SpecialCases = Record<number, string>;
type Titles = [string, string, string];

const cases = [2, 0, 1, 1, 1, 2];

function plural(number: number, titles: Titles, specialCases?: SpecialCases): string {
  if (specialCases?.[number] !== undefined) {
    return specialCases[number];
  }

  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
}

export default plural
