export default [
  {
    // Months are zero-indexed for whatever reason
    // This is a historical artifact from the Java (yes, Java) APIs
    date: new Date(2019, 11, 2),
    events: [
      {
        time: '9:00AM - 10:45AM',
        name: 'Check-In',
        locations: ['Schiciano Foyer']
      },
      {
        time: '11:00AM - 12:15PM',
        name: 'Opening Ceremony',
        locations: ['Page Auditorium']
      },
      {
        time: '12:30PM - 1:00PM',
        name: 'Track Talks',
        locations: [
          'Scichiano A - Education, Scichiano B - Health, Hudson 207 - Energy, Hudson 208 - InequalityHudson 208 - Nonprofit'
        ]
      },
      {
        time: '1:00PM - 2:00PM',
        name: 'Lunch',
        locations: ['CIEMAS 1st Floor']
      },
      { time: '2:00PM', name: 'Hacking Commences', locations: ['-'] },
      {
        time: '2:00PM - 2:30PM',
        name: 'Team Formation Mixer',
        locations: ['Schiciano Foyer']
      },
      {
        time: '2:00PM',
        name: 'Workshop Session 1',
        locations: ['Hudson Hall, Room TBD'],
        modalText: 'example modal text 1'
      },
      {
        time: '3:00PM',
        name: 'Workshop Session 2',
        locations: ['Hudson Hall, Room TBD'],
        modalText: 'example modal text 2'
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
        time: '6:30PM - 8:00PM',
        name: 'Dinner',
        locations: ['Schiciano Foyer']
      },
      {
        time: '7:30PM - 8:00PM',
        name: 'Pie an Organizer',
        locations: ['CIEMAS 1st Floor']
      },
      {
        time: '8:00PM - 9:00PM',
        name: 'MLH Minigame',
        locations: ['CIEMAS 1st Floor']
      },
      {
        time: '9:00PM - 10:00PM',
        name: 'WIT Mixer',
        locations: ['Location TBA']
      },
      {
        time: '10:00PM - 10:45PM',
        name: 'Nerf War',
        locations: ["Twinnie's 2nd Floor"]
      },
      {
        time: '11:00PM - 11:45PM',
        name: 'Spicy Noodle Challenge',
        locations: ['Schiciano Foyer']
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
        locations: ['–']
      },
      {
        time: '9:00AM - 9:45AM',
        name: 'Breakfast',
        locations: ['Schiciano Foyer']
      },
      {
        time: '10:00AM - 12:00PM',
        name: 'Workshops',
        locations: ['Locations TBA']
      },
      {
        time: '12:00PM - 1:30PM',
        name: 'Lunch',
        locations: ['Schiciano Foyer']
      },
      {
        time: '1:00pm - 2:00PM',
        name: 'Duke ML Keynote: Dr. Usama Fayyad',
        locations: ['Gross Hall, Ahmadieh Family Auditorium']
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
        name: 'Judging Ends',
        locations: ['–']
      },
      {
        time: '4:30PM - 5:30PM',
        name: 'Closing Ceremony',
        locations: ['Page Auditorium']
      },
      {
        time: '6:00PM',
        name: 'Buses Leaves',
        locations: ['Science Drive']
      }
    ]
  }
];
