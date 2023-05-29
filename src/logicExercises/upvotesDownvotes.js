// https://edabit.com/challenge/654ABGmNS5GqscE8C
// easier than I thought :(
// const getVoteCount = votes => {
//     return votes.upvotes - votes.downvotes
// }

// console.log(getVoteCount({ upvotes: 2, downvotes: 33}));


// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
const arrayOfMultiples = (num, lengthNumber) => {
    const result = [];
    for (let item = 1; item <= lengthNumber; item += 1){
        result.push(num*item);
    }
    return result;
}

console.log(arrayOfMultiples(7, 5));
