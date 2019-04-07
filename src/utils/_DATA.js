let users = {
  barrbozzo: {
    id: "barrbozzo",
    name: "Constantine",
    avatarURL:
      "https://avatars2.githubusercontent.com/u/16019765?s=400&u=3fca4062f5a789be1227645312c446341fb21aa5&v=4",
    tweets: [
      "8xf0y6ziyjabvozdd253nd",
      "2mb6re13q842wu8n106bhk",
      "6h5ims9iks66d4m7kqizmv"
    ]
  },
  jointentropy: {
    id: "jointentropy",
    name: "Grigory",
    avatarURL: "https://avatars2.githubusercontent.com/u/11326748?s=460&v=4",
    tweets: [
      "5c9qojr2d1738zlx09afby",
      "nnvkjqoevs8t02lzcc0ky",
      "4pt0px8l0l9g6y69ylivti",
      "fap8sdxppna8oabnxljzcv",
      "omdbjl68fxact38hk7ypy6"
    ]
  }
};

let tweets = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    text: "Shazam! Hmmmm... such a boring movie",
    author: "barrbozzo",
    timestamp: 1518122597860,
    likes: ["jointentropy"],
    replies: ["fap8sdxppna8oabnxljzcv"],
    replyingTo: null
  },
  "5c9qojr2d1738zlx09afby": {
    id: "5c9qojr2d1738zlx09afby",
    text: "WOW... There are three pig emojis. is it okay? 🐖🐷🐽",
    author: "jointentropy",
    timestamp: 1518043995650,
    likes: ["barrbozzo"],
    replies: [],
    replyingTo: null
  },
  "2mb6re13q842wu8n106bhk": {
    id: "2mb6re13q842wu8n106bhk",
    text: "I'm not sure about this)",
    author: "barrbozzo",
    timestamp: 1514043995650,
    likes: ["jointentropy"],
    replies: [],
    replyingTo: "5c9qojr2d1738zlx09afby"
  },
  nnvkjqoevs8t02lzcc0ky: {
    id: "nnvkjqoevs8t02lzcc0ky",
    text:
      "Maybe the real benefit of open source was the friendships we made along the way?",
    author: "jointentropy",
    timestamp: 1513043995650,
    likes: [],
    replies: [],
    replyingTo: null
  },
  omdbjl68fxact38hk7ypy6: {
    id: "omdbjl68fxact38hk7ypy6",
    text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making ",
    author: "jointentropy",
    timestamp: 1512043995650,
    likes: [],
    replies: [],
    replyingTo: null
  },
  "4pt0px8l0l9g6y69ylivti": {
    id: "4pt0px8l0l9g6y69ylivti",
    text:
      "Talking less about the downsides of OSS and focusing on some of the huge potential upsides for once might just help get more people into it.",
    author: "jointentropy",
    timestamp: 1511043995650,
    likes: [],
    replies: [],
    replyingTo: null
  },
  "6h5ims9iks66d4m7kqizmv": {
    id: "6h5ims9iks66d4m7kqizmv",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "barrbozzo",
    timestamp: 1510043995650,
    likes: ["jointentropy"],
    replies: [],
    replyingTo: null
  },
  fap8sdxppna8oabnxljzcv: {
    id: "fap8sdxppna8oabnxljzcv",
    author: "jointentropy",
    text: "I agree :)) But trailer was good.",
    timestamp: 1518122677860,
    likes: ["barrbozzo"],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: []
  }
};

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getTweets() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...tweets }), 1000);
  });
}

export function _saveLikeToggle({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes:
            hasLiked === true
              ? tweets[id].likes.filter(uid => uid !== authedUser)
              : tweets[id].likes.concat([authedUser])
        }
      };

      res();
    }, 500);
  });
}

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

function formatTweet({ author, text, replyingTo = null }) {
  return {
    author,
    id: generateUID(),
    likes: [],
    replies: [],
    text,
    timestamp: Date.now(),
    replyingTo
  };
}

export function _saveTweet({ text, author, replyingTo }) {
  return new Promise((res, rej) => {
    const formattedTweet = formatTweet({
      text,
      author,
      replyingTo
    });

    setTimeout(() => {
      tweets = {
        ...tweets,
        [formattedTweet.id]: formattedTweet
      };

      users = {
        ...users,
        [author]: {
          ...users[author],
          tweets: users[author].tweets.concat([formattedTweet.id])
        }
      };

      res(formattedTweet);
    }, 1000);
  });
}
