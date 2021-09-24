const { sum, substract, sumAsync} = require("./math");

test('sum adds numbers', () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
});

test('sum async adds numbers', async () => {
    const result = await sumAsync(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
});

test('subtract subtracts numbers', () => {
    const result = substract(7, 4);
    const expected = 3;
    expect(result).toBe(expected);
});