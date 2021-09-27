var users = {
  user1: {
    userName: "@elonmusk",
    displayName: "Elon Musk",
    joinedDate: "June 2009",
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: "assets/elonmusk.jpg",
    coverPhotoURL: "assets/elonmusk-cover.jpeg",
    tweets: [
      {
        text: "I admit to judging books by their cover",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Starship to the moon",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "Out on launch pad, engine swap underway",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },

  user2: {
    userName: "@BillGates",
    displayName: "Bill Gates",
    joinedDate: "June 2009",
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: "assets/billgates.jpg",
    coverPhotoURL: "assets/billgates-cover.jpeg",
    tweets: [
      {
        text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Should I start tweeting memes? Let me know in a comment.",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "In 2020, I read a book every hour.",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
};

const urlSearchParams = new URLSearchParams(window.location.search);
const params = urlSearchParams.getAll("user");

//console.log(params[0]); //returns user1

//let user = params[0];
console.log(users[params[0]]); //returns string
let user = users[params[0]];
var displayNames = document.getElementsByClassName("displayName");
for (var displayName of displayNames) {
  displayName.innerHTML = `${user.displayName}`;
}
console.log(displayName.innerHTML);

var coverPhoto = document.getElementById("photo");
coverPhoto.innerHTML = `<img src="/${user.coverPhotoURL}">`;

var avatar = document.getElementById("profilePhoto");
avatar.innerHTML = `<img src="/${user.avatarURL}">`;

var userName = document.getElementById("userName");
userName.innerHTML = `${user.userName}`;

var joinedDate = document.getElementById("joinedDate");
joinedDate.innerHTML = `<img src="/assets/calendar.png"> Joined ${user.joinedDate}`;

var container = document.getElementById("mainContent");

user.tweets.forEach(function (element, i) {
  console.log(element, i);

  let elemDiv = document.createElement("div");
  elemDiv.classList.add("tweetContainer");

  var today = new Date();
  var tweetDate = new Date(element.timestamp);
  var elapsedTime = Math.round((today - tweetDate) / (1000 * 3600 * 24));

  elemDiv.innerHTML = `<div class="tweetContainerProfilePic">
  <img src="${user.avatarURL}" alt="" />
</div>
<div class="tweetContents">
    <div><span class=displayName>${user.displayName} <img src="/assets/twitterverified.png" alt="" srcset=""></span> <span class="tweetContentsHandle">${user.userName}</span> <span class="tweetContentsHandle">  &#8226;  ${elapsedTime} Days ago</span></div>
    <div class="tweetContent">${element.text}</div>
    <div class="tweetInteractions">
      <div class="comments"><img src="/assets/comment.png" alt="" srcset="">5.2</div>
      <div class="retweets"><img src="/assets/retweet.png" alt="" srcset="">3K</div>
      <div class="likes"><img src="/assets/heart.png" alt="" srcset="">43K</div>
      <div class="share"><img src="/assets/share.png" alt="" srcset=""></div>
    </div>
</div>`;
  container.appendChild(elemDiv);
});
