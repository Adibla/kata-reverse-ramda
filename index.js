const R = require('ramda');

const reverseSentence = (string) => {
    let lengthGreather5 = R.compose(R.lt(5), R.length);

    let reverseWords = R.cond([
        [lengthGreather5, R.reverse],
        [R.T, R.identity]
    ]);

    return R.join(' ',  R.map(reverseWords, R.split(' ', string)));
}

reverseSentence("this is testtest");
