inputArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4,
    -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(`input arr ${inputArr}`);

maxEl = inputArr[0];
for (i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > maxEl) {
        maxEl = inputArr[i];
        maxIndex = i;
    }
}
console.log(`max element ${maxEl} has index ${maxIndex}`);

minEl = inputArr[0];
for (i = 0; i < inputArr.length; i++) {
    if (inputArr[i] < minEl) {
        minEl = inputArr[i];
        minIndex = i;
    }
}
console.log(`min element ${minEl} has index ${minIndex}`);
quantityOfNegative = 0;
for (i = 0; i < inputArr.length; i++) {
    if (Math.sign(inputArr[i]) === -1) {
        quantityOfNegative++;
    }
}
console.log(`quantity of negative: ${quantityOfNegative}`);

quantityOfOddPos = 0;
quantityOfEvenPos = 0;
sumOfOddPos = 0;
sumOfEvenPos = 0;
productOfPos = 1;


for (i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > 0) {
        if (inputArr[i] % 2 === 0) {
            quantityOfEvenPos++;
            sumOfEvenPos += inputArr[i];

        } else {
            quantityOfOddPos++;
            sumOfOddPos += inputArr[i];
        }
        productOfPos *= inputArr[i];

    }
}
console.log(`quantity Of even  positive: ${quantityOfEvenPos}`);
console.log(`quantity Of odd positive: ${quantityOfOddPos}`);
console.log(`sum of even positive: ${sumOfEvenPos}`);
console.log(`sum of odd positive: ${sumOfOddPos}`);
console.log(`product of  positive: ${productOfPos}`);


for (i = 0; i < inputArr.length; i++) {
    if (i !== maxIndex) {
        inputArr[i] = 0;
    }
}
console.log(inputArr);


