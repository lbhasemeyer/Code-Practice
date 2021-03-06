function bowling(frames) {
  let score = 0;
  const additionalStrikeCounter = {};
  const additionalSpareCounter = {};
  frames.split(' ').forEach((frame, index) => {
    frame.split('').forEach((bowl, bowlIndex) => {
      const bowlInteger = parseInt(bowl);
      if(index !== 9) {
        // not last frame
         if(bowl === 'X') {
           additionalStrikeCounter[index] = 0;
           score += 10;
         } else if(frame.includes('/')) {
           additionalSpareCounter[index] = 0;
           if(bowlIndex === 1) {
             score += 10;
           }
         } else {
           score += bowlInteger;
         }
        // if the last frame had a strike, add current bowl.  if x, add 10.  if frame has spare, only add 10 on second bowl
        if((additionalStrikeCounter[index-1] !== undefined)) {
          additionalStrikeCounter[index-1] += whatToAddOneAgo(frame, bowl, bowlIndex, bowlInteger);
        }
        // if both two and one frames ago had a strike, add only the first number of the frame to it
        if((additionalStrikeCounter[index-2] !== undefined) && (additionalStrikeCounter[index-1] !== undefined) && (bowlIndex === 0)){
          additionalStrikeCounter[index-2] += whatToAddTwoAgoOrSpare(bowl, bowlInteger);
        }
       if(additionalSpareCounter[index-1] !== undefined && (bowlIndex === 0)) {
          additionalSpareCounter[index-1] += whatToAddTwoAgoOrSpare(bowl, bowlInteger);
        }
      } else {
        // last frame
        if(bowl === 'X') {
          score += 10;
        } else if(frame.includes('/')) {
          if(bowlIndex === 1) {
            score += 10;
          } else if(bowlIndex === 2) {
            score += bowlInteger;
          }
        } else {
          score += bowlInteger;
        }
        // if last bowl was a strike, indexes 0 and 1 should get added - strike is 10, spares get 10 on index 1
        if((additionalStrikeCounter[index-1] !== undefined) && bowlIndex<2) {
          additionalStrikeCounter[index-1] += whatToAddOneAgo(frame, bowl, bowlIndex, bowlInteger);
        }
        // if two bowls ago was a strike, index 0 should get added - strike is 10
        if((additionalStrikeCounter[index-2] !== undefined) && (additionalStrikeCounter[index-1] !== undefined) && (bowlIndex === 0)){
          additionalStrikeCounter[index-2] += whatToAddTwoAgoOrSpare(bowl, bowlInteger);
        }
        if((additionalSpareCounter[index-1] !== undefined) && bowlIndex === 0) {
          additionalSpareCounter[index-1] += whatToAddTwoAgoOrSpare(bowl, bowlInteger);
        }
      }
    });
  });
  
  for (let key in additionalStrikeCounter) { 
    score += additionalStrikeCounter[key];
  }
  for (let key in additionalSpareCounter) { 
    score += additionalSpareCounter[key];
  }
  return score;
}

function whatToAddOneAgo(frame, bowl, bowlIndex, bowlInteger) {
  const isFrameTen = (bowl === 'X' || frame.includes('/')) ? true : false;
  if(isFrameTen && ((bowl === 'X') || (bowlIndex === 1))) {
    return 10;
  } else if(!isFrameTen) {
    return bowlInteger;
  } else {
    return 0;
  }
}

function whatToAddTwoAgoOrSpare(bowl, bowlInteger) {
  return (bowl === 'X') ? 10 : bowlInteger;
}

module.exports = bowling;