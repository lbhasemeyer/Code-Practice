
const insertOrDeleteOne = (str1, str2) => {
    let changes = 0;
    let longer = ((str1.length - str2.length) === 1) ? [...str1] : [...str2];
    const shorter = ((str1.length - str2.length) !== 1) ? [...str1] : [...str2];
    for(x=0; x<longer.length; x++){
        if(longer[x] !== shorter[x]){
            changes++;
            longer.splice(x, 1);
            if(longer[x] !== shorter[x]){
                return false;
                break;
            }
        }
    }
    return (changes > 1) ? false : true;
}

const changeOne = (str1, str2) => {
    let changes = 0;
    for(x=0; x<str1.length; x++){
        if(str1[x] !== str2[x]){
            if(changes > 0){
                return false;
                break;
            }
            changes++;
        }
    };
    return true;
}

const isOneAway = (str1, str2) => {
    if(str1 === str2){
        return false;
    } else if(str1.length === str2.length){
        const changeSuccess = changeOne(str1, str2);
        if(changeSuccess){ return true; }
    } else if(Math.abs(str1.length - str2.length) === 1){
        const insertOrDeleteSuccess = insertOrDeleteOne(str1, str2);
        if(insertOrDeleteSuccess){ return true; }
    }
    return false;
}

module.exports = isOneAway;