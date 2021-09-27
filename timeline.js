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
        timestamp: "2/10/2021 00:01:21",
      },
      {
        text: "Starship to the moon",
        timestamp: "2/09/2021 18:37:13",
      },
      {
        text: "Out on launch pad, engine swap underway",
        timestamp: "2/09/2021 12:11:52",
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
var timeSortedTweets = {};
for (let user in users) {
  for (let tweet of users[user].tweets) {
    // console.log(
    //   `timestamp: ${Date.parse(tweet.timestamp)}, text: ${
    //     tweet.text
    //   }, user:${user}`
    // );

    timeSortedTweets[Date.parse(tweet.timestamp)] = [tweet.text, user];
  }
}
//console.log(timeSortedTweets);
const orderedTweets = Object.keys(timeSortedTweets)
  .sort()
  .reverse()
  .reduce((obj, key) => {
    obj[key] = timeSortedTweets[key];
    return obj;
  }, {});

// console.log(JSON.stringify(orderedTweets));

const newlyOrderedTweets = JSON.stringify(orderedTweets);
console.log(orderedTweets);
//console.log(newlyOrderedTweets);

var container = document.getElementById("mainContentTimeLine");

for (let time in orderedTweets) {
  let user = orderedTweets[time][1];

  let elemDiv = document.createElement("div");
  elemDiv.classList.add("tweetContainer");

  var today = new Date();
  var timestamp = time.toString();
  var tweetDate = new Date(parseInt(timestamp, 10));
  console.log(tweetDate);

  var elapsedTime = Math.round((today - tweetDate) / (1000 * 3600 * 24));

  elemDiv.innerHTML = `<div class="tweetContainerProfilePic">
    <img src="${users[user].avatarURL}" alt="" />
  </div>
  <div class="tweetContents">
      <div><span class=displayName><a class="profileLink" href="/?user=${[
        user,
      ]}">${
    users[user].displayName
  }</a> <img src="/assets/twitterverified.png" alt="" srcset=""></span> <span class="tweetContentsHandle">${
    users[user].userName
  }</span> <span class="tweetContentsHandle">  &#8226; ${elapsedTime}  Days ago</span></div>
      <div class="tweetContent">${orderedTweets[time][0]}</div>
      <div class="tweetInteractions">
        <div class="comments"><img src="/assets/comment.png" alt="" srcset="">5.2</div>
        <div class="retweets"><img src="/assets/retweet.png" alt="" srcset="">3K</div>
        <div class="likes"><img src="/assets/heart.png" alt="" srcset="">43K</div>
        <div class="share"><img src="/assets/share.png" alt="" srcset=""></div>
      </div>
  </div>`;
  container.appendChild(elemDiv);
}
