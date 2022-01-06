const quotes = [
    {
        quote: "몹시도 사랑히 적어둔 글씨들에", 
        title: "러브 레터",
    },
    {
        quote: "봄 몇 송이, 여름 한 컵, 가을 한 장, 그리고 겨울 한 숨", 
        title: "겨울잠",
    },
    {
        quote: "이 밤 그날의 반딧불을 당신의 창 가까이 보낼게요", 
        title: "밤편지",
    },
    {
        quote: "감히 이 마음만은 주름도 없이 여기 반짝 살아있어요", 
        title: "마음",
    },
    {
        quote: "아득히 떨어진 곳에서, 끝없이 흐노는 누구를 알까", 
        title: "너",
    },
    {
        quote: "바람을 세로질러 날아오르는 기분 so cool", 
        title: "strawberry moon",
    },
    {
        quote: "네 말대로 언젠가 나도 나 같은 누군가에게 사랑 받게 될까", 
        title: "이런 엔딩",
    },
    {
        quote: "백만송이장미꽃을, 나랑피워볼래?", 
        title: "Blueming",
    },
    {
        quote: "황혼을 따라 춤추는 그늘 길어지는데", 
        title: "정거장",
    },
    {
        quote: "I got this, I've truly found 이제 조금 알 것 같아 날", 
        title: "Palette",
    },
]

const quote = document.querySelector("#quote span:first-child");
const title = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
title.innerText = todaysQuote.title;