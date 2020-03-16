const messages = [
  {
    id: 'message1',
    name: 'Zoe',
    userId: 'user1',
    message: 'What zone is Tennessee in?',
    timestamp: 'March 9th, 2020 6:30 PM',
    color: 'primary',
    likes: [],
    dislikes: [],
  },
  {
    id: 'message2',
    name: 'Joey',
    userId: 'user5',
    message: 'You are in my zone.',
    timestamp: 'March 9th, 2020 6:45 PM',
    color: 'success',
    likes: [],
    dislikes: [],
  },
  {
    id: 'message3',
    name: 'Michele',
    userId: 'user4',
    message: 'I hope a flytrap eats you.',
    timestamp: 'March 9th, 2020 6:50 PM',
    color: 'danger',
    likes: [],
    dislikes: [],
  },
  {
    id: 'message4',
    name: 'Liza',
    userId: 'user3',
    message: 'I love Venus Fly Traps.',
    timestamp: 'March 9th, 2020 6:55 PM',
    color: 'warning',
    likes: [],
    dislikes: [],
  },
  {
    id: 'message5',
    name: 'John',
    userId: 'user2',
    message: 'Should we talk about the weather?',
    timestamp: 'March 9th, 2020 7:00 PM',
    color: 'info',
    likes: [],
    dislikes: [],
  },
];

const setLikes = (messagePosition, newLike) => {
  messages[messagePosition].likes.push(newLike);
};

const setDislikes = (messagePosition, newDislike) => {
  messages[messagePosition].dislikes.push(newDislike);
};

const setMessages = (newMessage) => {
  if (newMessage && messages.length < 20) {
    messages.push(newMessage);
  } else if (newMessage === undefined) {
    messages.length = 0;
  } else {
    messages.shift();
    messages.push(newMessage);
  }
};

const getMessages = () => messages;

export default {
  getMessages, setMessages, setLikes, setDislikes,
};
