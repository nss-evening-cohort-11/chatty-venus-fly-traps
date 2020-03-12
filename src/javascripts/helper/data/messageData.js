const messages = [{
  id: 'message1',
  name: 'Joanna',
  message: 'What zone is Tennessee in?',
  timestamp: 'March 9, 2020 6:30 PM',
  color: 'primary',
},
{
  id: 'message2',
  name: 'Xavier',
  message: 'You are in my zone.',
  timestamp: 'March 9, 2020 6:45 PM',
  color: 'success',
},
{
  id: 'message3',
  name: 'Mackenzie',
  message: 'I hope a flytrap eats you.',
  timestamp: 'March 9, 2020 6:50 PM',
  color: 'danger',
},
{
  id: 'message4',
  name: 'Sven',
  message: 'I love Venus Fly Traps.',
  timestamp: 'March 9, 2020 6:55 PM',
  color: 'warning',
},
{
  id: 'message5',
  name: 'Gunter',
  message: 'Should we talk about the weather?',
  timestamp: 'March 9, 2020 7:00 PM',
  color: 'info',
}];

const setMessages = (newMessage) => {
  messages.push(newMessage);
};

const getMessages = () => messages;

export default { getMessages, setMessages };
