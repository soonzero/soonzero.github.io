const lyricsArray = [
  {
    lyrics: "I love myself, I trust myself",
    title: "내게 들려주고 싶은 말(Dear Me)",
  },
  {
    lyrics: "수고했어요, 정말 고생했어요. 그댄 나의 자랑이죠",
    title: "하루의 끝(End of a day)",
  },
  {
    lyrics: "잠깐 쉬어도 좋아 쉬엄쉬엄도 좋아 무리하지 않아도 돼",
    title: "Marathon",
  },
  {
    lyrics: "네 모습 그대로 그래 괜찮아 괜찮아도",
    title: "괜찮아도 괜찮아(That's okay)",
  },
  {
    lyrics: "우린 빛나고 있네, 각자의 방 각자의 별에서",
    title: "소우주(Microkosmos)",
  },
  {
    lyrics: "가끔은 실수 해도 돼, 누구든 그랬으니까",
    title: "한숨",
  },
  {
    lyrics: "봄 몇 송이, 여름 한 컵, 가을 한 장, 겨울 한 숨",
    title: "겨울잠",
  },
  {
    lyrics: "넌 혼자가 아니야 네 곁엔 내가 있잖아",
    title: "Smile Again",
  },
  {
    lyrics: "나의 길을 가고 있다고 외치면 돼",
    title: "나를 외치다",
  },
  {
    lyrics: "Are we all lost stars, trying to light up the dark?",
    title: "Lost Stars",
  },
];

const lyricbox = document.getElementById("lyrics");
const lyrics = document.querySelector("#words");
const title = document.querySelector("#title");

let randomNumber = Math.floor(Math.random() * lyricsArray.length);
let randomlyrics = lyricsArray[randomNumber];

function makeRandomlyric() {
  randomNumber = Math.floor(Math.random() * lyricsArray.length);
  randomlyrics = lyricsArray[randomNumber];
  lyrics.innerText = `${randomlyrics.lyrics}`;
  title.innerText = `${randomlyrics.title}`;
}
lyricbox.addEventListener("click", makeRandomlyric);

makeRandomlyric();
