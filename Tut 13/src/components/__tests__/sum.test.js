import { sum } from "../sum";

test("Sum fn should calculate sum of 2 num" , () => {
    const result = sum(3,4);
    // Assertion
    expect(result).toBe(7);  // Pass
    // expect(result).toBe(6);     // Fail
});