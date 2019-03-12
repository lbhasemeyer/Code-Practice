const makeCards = (num) => {
    const cards = [];
    while(num > 0){
        cards.push(num);
        num --;
    }
    return cards
}

const shuffleCards = () => {
    let cards = makeCards(52);
    const shuffledCards = [];
    while(cards.length > 0){
        const randomIndex = Math.floor(Math.random() * cards.length);
        shuffledCards.push(cards[randomIndex]);
        cards.splice(randomIndex, 1);
    }
    return shuffledCards;
}

module.exports = shuffleCards;
