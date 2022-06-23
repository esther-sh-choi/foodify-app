var longestCommonPrefix = function (strs) {
  let prefix = "";
  let i = 0;

  while (i >= 0) {
    let currentLetter = strs[0][i];
    if (strs.every((str) => str[i] === currentLetter)) {
      prefix += currentLetter;
      i++;
    } else break;
  }

  return prefix;
};

console.log(longestCommonPrefix([""]));
