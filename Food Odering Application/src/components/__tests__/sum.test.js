import {sum} from "../sum"
test("Sum func to to calculate the sum of two function",()=>{

    // Store Result and Function Call
    const result = sum(3,4);

    // Assertion
    expect(result).toBe(7);
})