function firstplace() {
    document.querySelector("#firstplace").href = "tajmahal.html";
    let a = new SpeechSynthesisUtterance("First place is Taj Mahal, Agra. This place is located in Uttar Pradesh. It's popular for being an architectural marvel and a UNESCO World Heritage Site, known globally as a symbol of love.");
    speechSynthesis.speak(a);
}

function secondplace() {
    document.querySelector("#secondplace").href = "jaipur.html";
    let b = new SpeechSynthesisUtterance("Second place is Jaipur, Rajasthan. The Pink City is renowned for its majestic forts, palaces, and vibrant culture. Amber Fort, City Palace, and Hawa Mahal are must-see attractions.");
    speechSynthesis.speak(b);
}

function thirdplace() {
    document.querySelector("#thirdplace").href = "vijayawada.html";
    let c = new SpeechSynthesisUtterance("Third place is Vijayawada, Andhra Pradesh. Known as the 'Place of Victory,' it is famous for its Kanaka Durga Temple and the Prakasam Barrage over the Krishna River.");
    speechSynthesis.speak(c);
}

function fourthplace() {
    document.querySelector("#fourthplace").href = "goa.html";
    let d = new SpeechSynthesisUtterance("Fourth place is Goa. Famous for its stunning beaches, vibrant nightlife, and Portuguese heritage, Goa is a top destination for tourists seeking sun, sand, and relaxation.");
    speechSynthesis.speak(d);
}

function fifthplace() {
    document.querySelector("#fifthplace").href = "kerala.html";
    let e = new SpeechSynthesisUtterance("Fifth place is Kerala. Known as 'God's Own Country,' Kerala is celebrated for its backwaters, Ayurvedic retreats, and lush green landscapes.");
    speechSynthesis.speak(e);
}

function sixthplace() {
    document.querySelector("#sixthplace").href = "mysore.html";
    let f = new SpeechSynthesisUtterance("Sixth place is Mysore, Karnataka. This city is famous for its royal heritage, especially the grand Mysore Palace and the Dussehra festival.");
    speechSynthesis.speak(f);
}

function seventhplace() {
    document.querySelector("#seventhplace").href = "amritsar.html";
    let g = new SpeechSynthesisUtterance("Seventh place is Amritsar, Punjab. Home to the Golden Temple, the holiest site in Sikhism, Amritsar is also known for its rich history and the Jallianwala Bagh memorial.");
    speechSynthesis.speak(g);
}

function eighthplace() {
    document.querySelector("#eighthplace").href = "varanasi.html";
    let h = new SpeechSynthesisUtterance("Eighth place is Varanasi, Uttar Pradesh. One of the oldest living cities in the world, Varanasi is a sacred city on the banks of the Ganges River, known for its ghats and temples.");
    speechSynthesis.speak(h);
}

function ninthplace() {
    document.querySelector("#ninthplace").href = "leh-ladakh.html";
    let i = new SpeechSynthesisUtterance("Ninth place is Leh-Ladakh, Jammu & Kashmir. Known for its breathtaking landscapes, high-altitude deserts, and Buddhist monasteries, Leh-Ladakh is a paradise for adventure enthusiasts.");
    speechSynthesis.speak(i);
}
function back(){
    speechSynthesis.cancel()
}
