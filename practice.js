var generateParenthesis = function (n) {
  if (n < 2) return ["()"];
  let parNums = {
    1: ["()"],
  };
  for (let i = 2; i <= n; i++) {
    parNums[i] = [
      parNums[i - 1].map((paranthesis) => `()${paranthesis}`),
      parNums[i - 1].map((paranthesis) => `${paranthesis}()`),
      parNums[i - 1].map((paranthesis) => `(${paranthesis})`),
    ];

    parNums[i] = [...new Set(parNums[i].flat())];
  }

  console.log(parNums);
  console.log(parNums[n]);

  return parNums[n];
};

generateParenthesis[4];

["(())(())"];

[];
