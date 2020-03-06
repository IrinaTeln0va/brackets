module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const configSubarray = getConfigSubarray(arr[i], bracketsConfig);
    if (isCoupleWithPrev(arr[i], result[result.length - 1], configSubarray)) {
      result.pop();
    } else if (isOpeningBracket(arr[i], configSubarray)) {
      result.push(arr[i]);
    } else {
      return false;
    }
  }

  return result.length == 0;
}

const getConfigSubarray = (bracket, bracketsConfig) => {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracket || bracketsConfig[i][1] == bracket) {
      return bracketsConfig[i];
    }
  }
  return false;
}

const isCoupleWithPrev = (nextBracket, prevBrackets, configSubarray) => {
  return (nextBracket == configSubarray[1] && configSubarray[0] == prevBrackets);
}

const isOpeningBracket = (bracket, configSubarray) => {
  return configSubarray[0] == bracket;
}