const fizzBuzz = require('./fizzBuzz');
test('if the number is divisible by three, you instead say “Fizz”.' , () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('if the number is divisible by five you say “Buzz”.' , () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('A number is fizz if it is divisible by 3 or if it has a 3 in it' , () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('A number is buzz if it is divisible by 5 or if it has a 5 in it' , () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('ถ้าไม่ใช่เลขที่หารด้วย 3 ลงตัว' , () => {
    expect(fizzBuzz(7)).toBe(7);
});

test('ถ้าไม่ใช่เลขที่หารด้วย 5 ลงตัว' , () => {
    expect(fizzBuzz(7)).toBe(7);
});

test('ถ้าไม่ใช่เลข 3' , () => {
    expect(fizzBuzz(7)).toBe(7);
});

test('ถ้าไม่ใช่เลข 5' , () => {
    expect(fizzBuzz(7)).toBe(7);
});
