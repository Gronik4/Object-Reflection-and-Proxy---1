import sortValue from '../app';

const date1 = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const date2 = ["name", "level"];
const expected = [
  {key: "name", value: "мечник"}, 
  {key: "level", value: 2}, 
  {key: "attack", value: 80}, 
  {key: "defence", value: 40}, 
  {key: "health", value: 10}
];

test('Test sortValue', () => {
  const result = sortValue(date1, date2);
  expect(result).toEqual(expected);
});
