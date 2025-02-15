type IRaw = [string, number?];

const rawPlusList: IRaw[] = [
  ['+', 5],
  ['👍', 5],
  ['👍🏻', 5],
  ['👍🏼', 5],
  ['👍🏽', 5],
  ['👍🏾', 5],
  ['👍🏿', 5],
  ['лайк'],
  ['ня'],
  ['няшно'],
  ['заебись'],
  ['клас'],
  ['класс'],
  ['огонь'],
  ['агонь'],
  ['круто'],
  ['пиздато'],
  ['ахуенно'],
  ['ахуено'],
  ['плюс'],
  ['хорошо'],
];

const rawMinusList: IRaw[] = [
  ['-', 5],
  ['👎', 5],
  ['👎🏻', 5],
  ['👎🏼', 5],
  ['👎🏽', 5],
  ['👎🏾', 5],
  ['👎🏿', 5],
  ['дизлайк'],
  ['говно'],
  ['гавно'],
  ['хуйня'],
  ['отстой'],
  ['кринж'],
  ['пиздец'],
  ['хуево'],
  ['хуёво'],
  ['минус'],
  ['плохо'],
];

const parseList = (list: IRaw[]) => list.map(([value, count]) => {
  if (!count) {
    return value;
  }
  let result = '';
  const resultArray: string[] = [];
  for (let i = 0; i < count; i++) {
    result += value;
    resultArray.push(result);
  }

  return resultArray;
}).flat();

export const plusAndMinusList = [
  '+-',
  '-+',
  '±',
];

export const plusList = parseList(rawPlusList);

export const minusList = parseList(rawMinusList);
