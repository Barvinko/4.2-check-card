let check = function(){
    let cardFull = (document.getElementById("input").value);
    console.log(cardFull);

    let info = {
        card: cardFull
    }
    card = cardFull.split('').reverse();
    let sum = 0;

    let paySystem;
    let accepted;

    let MasterCard = ['51','52','53','54','55','22','23','24','25','26','27'];
    let Maestro = ['50','56','57','58','63','67'];


    for (let i = 0; i < card.length; i++) {
        if (i % 2 == 0) {
            sum += +card[i];
        }else{
            let digit = +card[i]*2;
            if (digit > 9) {
                digit -=9;
            }
            sum += digit;
        }
        
    }

    console.log(card);
    console.log(sum);

    if (sum % 10 == 0) {
        info.correct = true;

        info.accepted = true;
        if (card[card.length - 1] == 4) {
            info.paymentSystem = 'visa';
        }else if (MasterCard.includes(card[card.length - 1] + card[card.length - 2])) {
            info.paymentSystem = 'mastercard';
        }else if (Maestro.includes(card[card.length - 1] + card[card.length - 2])) {
            info.paymentSystem = 'maestro';
        }else{
            info.paymentSystem = '';
            info.accepted = false;
        }
    }else{
        info.correct = false;
    }
    console.log(info);
    console.log(info.length)
    document.getElementById("feedback1").innerHTML = 'car: ' + info.card;
    document.getElementById("feedback2").innerHTML = 'correct: ' + info.correct;
    if (info.correct == true) {
        document.getElementById("feedback3").innerHTML = 'paymentSystem: ' + info.paymentSystem;
        document.getElementById("feedback4").innerHTML = 'accepted: ' + info.accepted;        
    }else{
        document.getElementById("feedback3").innerHTML = '';
        document.getElementById("feedback4").innerHTML = ''; 
    }

}