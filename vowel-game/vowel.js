function vowel(word1, word2) {
  const newWords = [];
  const index = word1.search(/[aeiou]/i) + 1;
  const s1 = word1.substr(0, index);
  const s2 = word1.substr(index);
  const index1 = word2.search(/[aeiou]/i) + 1;
  const s3 = word2.substr(0, index1);
  const s4 = word2.substr(index1);
  const new1 = s1 + s4;
  const new2 = s3 + s2;
  newWords.push(new1.toLowerCase());
  newWords.push(new2.toLowerCase());
  console.log(newWords);
  return newWords;
}
function transform(word1, word2) {
  const alphabets = /^[a-z]*$/i;
  if (!alphabets.test(word1) || !alphabets.test(word2)) {
    throw new Error('error');
  }
  if (alphabets.test(word1) && alphabets.test(word2) && !(/[aeiou]/i).test(word1) && !(/[aeiou]/i).test(word2)) {

    const array = [];
    array.push(word1);
    array.push(word2);
    return array;
  }
  return vowel(word1, word2);
}

//  transform('towel', 'car');


module.exports.transform = transform;
