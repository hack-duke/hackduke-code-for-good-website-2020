export default [
  {
    // Months are zero-indexed for whatever reason
    // This is a historical artifact from the Java (yes, Java) APIs
    date: new Date(2019, 11, 2),
    events: [
      {
        time: '9:00AM - 10:45AM',
        name: 'Check-In',
        locations: ['Schiciano Atrium']
      },
      {
        time: '11:00AM - 12:30PM',
        name: 'Opening Ceremony',
        locations: ['Reynolds Theatre']
      },
      {
        time: '12:30PM - 1:00PM',
        name: 'Team Formation Mixer',
        locations: ['Schiciano Foyer']
      },
      {
        time: '1:00PM - 2:00PM',
        name: 'Lunch',
        locations: ['Schiciano Atrium']
      },
      { time: '2:00PM', name: 'Hacking Commences', locations: ['-'] },
      {
        time: '2:00PM',
        name: 'Workshop Session 1',
        locations: ['Hudson Hall, Room TBD']
      },
      {
        time: '3:00PM',
        name: 'Workshop Session 2',
        locations: ['Hudson Hall, Room TBD']
      },
      {
        time: '3:00PM - 5:00PM',
        name: 'Puppies!!!!!',
        locations: ['Harrington Quad']
      },
      {
        time: '3:00PM - 7:00PM',
        name: 'Spikeball & Frisbee',
        locations: ['Harrington Quad']
      },
      {
        time: '4:00PM',
        name: 'Workshop Session 3',
        locations: ['Hudson Hall, Room TBD']
      },
      {
        time: '6:00PM - 7:00PM',
        name: 'Mixer for Female-Identifying and Non-Binary Hackers',
        locations: ['Innovation Co-Lab']
      },
      {
        time: '7:00PM - 8:00PM',
        name: 'Dinner',
        locations: ['Schiciano Foyer']
      },
      {
        time: '8:30PM - 9:00PM',
        name: 'Pie an Organizer',
        locations: ['Schiciano Foyer']
      },
      {
        time: '10:00PM - 11:00PM',
        name: 'Nerf War',
        locations: ["Twinnie's 2nd Floor"]
      },
      {
        time: '11:00PM - 11:45PM',
        name: 'Spicy Noodle Challenge',
        locations: ['Schiciano Atrium']
      }
    ]
  },
  {
    date: new Date(2019, 11, 3),
    events: [
      {
        time: '12:00AM - 8:00AM',
        name: 'Midnight Snacks',
        locations: ["Twinnie's"]
      },
      {
        time: '12:00AM - 8:00AM',
        name: 'Nap Time',
        locations: ['Hudson (222, 224, 232)']
      },
      {
        time: '9:00AM - 9:45AM',
        name: 'Breakfast',
        locations: ['Schiciano Foyer']
      },
      {
        time: '11:00AM',
        name: 'Workshop Session 4',
        locations: ['Hudson Hall, Room TBD']
      },
      {
        time: '12:00PM - 1:30PM',
        name: 'Lunch',
        locations: ['Schiciano Foyer']
      },
      { time: '1:30PM', name: 'Hacking Ends', locations: ['-'] },
      { time: '2:00PM', name: 'Judging Begins' },
      {
        time: '2:00PM - 2:45PM',
        name: 'First Round Judging',
        locations: ['CIEMAS Lobby']
      },
      {
        time: '2:45PM - 3:30PM',
        name: 'Finalist Demos',
        locations: ['CIEMAS Lobby']
      },
      {
        time: '3:30PM - 4:00PM',
        name: 'Final Judging',
        locations: ['CIEMAS Lobby']
      },
      {
        time: '4:00PM',
        name: 'Judging Ends'
      },
      {
        time: '4:30PM - 5:30PM',
        name: 'Closing Ceremony',
        locations: ['Reynolds Theatre']
      },
      {
        time: '6:00PM',
        name: 'Buses Leaves',
        locations: ['Science Drive']
      }
    ]
  }
];
