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
        locations: ['Page Auditorium'],
        modalText: [
          {
            title: 'Opening Ceremony',
            name: 'Jason Valentino (Capital One)',
            loc: 'Page Auditorium'
          }
        ]
      },
      {
        time: '12:30PM - 1:00PM',
        name: 'Track Talks',
        locations: [
          'Schiciano A - Education, Schiciano B - Health, Hudson 207 - Energy, Hudson 208 - Inequality, Hudson 208 - Nonprofits'
        ],
        modalText: [
          {
            title: 'Health Track',
            name: 'GSK (track sponsor)',
            loc: 'Location: Scichiano B',
            speakerBlurb:
              'Shalin Simmons is the Director of Data Product and Engineering Team',
            workshop:
              'This talk will focus on the importance of building compelling stories out of data, the foundational needs for supporting such efforts, and a little bit around what GSK is doing today.'
          },
          {
            title: 'Education Track',
            name: 'Troy Zha',
            loc: 'Location: Scichiano A'
          },
          {
            title: 'Inequality Track',
            name: 'Juvo (track sponsor)',
            loc: 'Location: Hudson 208',
            speakerBlurb:
              'Thomas is a long time iOS developer who recently started doing backend work using Ruby on Rails. His interests are programming languages, the future of programming, and computer graphics. He recently moved back to Durham from San Francisco and lives in Duke Park with his wife Giselle and daughter Lillian.'
          },
          {
            title: 'Energy & Environment Track',
            name: 'Margaret Overton',
            loc: 'Location: Hudson 207'
          },
          {
            title: 'Nonprofit Track',
            name: 'HD Team, Kyle Ryan, Coding it Forward (track sponsor)',
            loc: 'Location: Hudson 208',
            workshop:
              'We will spend time explaining the track and each of our nonprofit projects. Rachel Dodell from Coding it Forward, our track sponsor, will then talk about her work and the Civic Digital Fellowship. Lastly we will open up for Q&A.'
          }
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
        time: '2:00PM - 8:00PM',
        name: 'Workshops',
        locations: ['Hudson Hall, Various Rooms'],
        modalText: [
          {
            title:
              'Ethical Artificial Intelligence: A Lightning Talk with Ethical Tech',
            name: 'Justin Sherman, Joanne Kim, Kam Kara-Pabani (Ethical Tech)',
            loc: '2-3pm, Hudson 218',
            speakerBlurb:
              "Justin Sherman is a senior at Duke double-majoring in computer science and political science. He is a Fellow at the Duke Center on Law & Technology at Duke University’s School of Law, a Cybersecurity Policy Fellow at New America, and the Co-Founder and President of Duke’s nonpartisan initiative Ethical Tech. Joanne Kim is a sophomore at Duke studying public policy and psychology, currently serving as Vice President of the Class of 2022. She also serves as the President of Devilthon, Duke's dance marathon, and as co-Vice President of Ethical Tech. Kam Kara-Pabani is a sophomore at Duke studying computer science and political science with a minor in economics. He serves as the co-Vice President of Ethical Tech and is primarily interested in the moral use of AI in support of American national security.",
            workshop:
              'Interested in AI and machine learning, as well as their broader ethical, legal, and policy implications? Come hear lightning talks around AI/ML ethics in three different areas: surveillance, medicine, and the criminal justice system. Hosted by HackDuke and Duke’s nonpartisan initiative Ethical Tech.'
          },
          {
            title: 'CSS Deep Dive: Grid',
            name: 'Sandra Bermond (Co-Lab)',
            loc: '2-3pm, Hudson 212',
            speakerBlurb:
              'Sandra Bermond is the Innovation Co-Lab program manager where she prepares and organizes the Roots/ program (a series of lectures and workshops on various tech topics), as well as teaches several of its workshops surrounding design and front end development. Sandra has a passion for web design and enjoys creating new web experiences on her spare time as well as sharing her love for CSS (the best language there is!)',
            workshop:
              'Unleash layout powers you didn’t know existed with CSS Grid! Learn how you can place html elements wherever you like, however you like regardless of their html order… Change the vertical and horizontal alignments of any item, and forget about all math calculations! Prerequisites: Some basic knowledge of HTML and CSS (syntax and key concepts) is necessary to follow this class.'
          },
          {
            title: 'Intro to Front-end: HTML, CSS, Javascript',
            // name: 'Grant Kim',
            loc: '3-4pm, Hudson 218, with Grant Kim'
          },
          {
            title: 'How to Host your Web App on GCP',
            name: 'Helena Merk (Smartcar)',
            loc: '3-4pm, Hudson 216',
            speakerBlurb:
              "Helena Merk attended Duke before joining fulltime at Smartcar, a 14-person startup building an API for connected vehicles. She is excited by how technology can be employed to solve problems in society, and can't wait to see what students come up with! This year she is thrilled to be returning as a mentor, after several years of attending hackathons around the country as a student.",
            workshop:
              'Learn how to build and deploy a web application using GCP! Focus on your application and your users without worrying about the infrastructure. Google Cloud is giving away 600 credits to use during HackDuke 2019.'
          },
          {
            title: 'Working Effectively as a Team (Workshop)',
            name: 'Bobby Wang',
            loc: '4-5pm, Hudson 212',
            speakerBlurb:
              'Bobby graduated T’18 and currently works on infrastructure as a software engineer at Airbnb. He’s super excited to be back as a mentor after being a HackDuke competitor in 2014 and an organizer in 2015!',
            workshop:
              'Your teammates are your greatest resource, but working together can be very different (and introduce many new problems) compared to working alone. Come learn how to use Git to simplify working together, as well as how to avoid common Git pitfalls!'
          },
          {
            title: 'Intro to AR/VR Development',
            name: 'Don Shin (CrossComm)',
            loc: '4-5pm, Hudson 218',
            speakerBlurb:
              'Don Shin is the founder of CrossComm, an award-winning mobile, web, and immersive app development studio headquartered in Durham, NC. Under Mr. Shins leadership, the Durham, NC-based company has been recognized as one of the leading mobile app developers in the region by clutch.co, and has been nationally recognized as the the Minority Technology Firm of the Year (2015) by the US Dept. of Commerce.',
            workshop:
              'Virtual and Augmented Reality are frontiers for human-computer interaction that offer the promise of truly spatial computing and more immersive experiences. And while these technologies have existed in some form for decades, sophisticated VR/AR experiences can now run on readily available hardware- making them widely accessible for both the consumer as well as enterprise. New forms of interaction call for the development of new apps and experiences; this talk will introduce developers to VR/AR and provide enough of an overview for aspiring VR/AR developers to take their first steps into the world of spatial computing.'
          },
          {
            title: 'Building Web Apps in Python Django with Capital One',
            loc: '4-5pm, Hudson 216'
          },
          {
            title:
              'Three Powerful Google Cloud Products for Your Project with Google',
            loc: '5-6pm, Hudson 216'
          },
          {
            title: 'Machine Learning Workshop in Tensorflow.js with Mastercard',
            loc: '5-6pm, Hudson 212',
            workshop:
              'Machine learning doesn’t have to involve renting expensive compute and waiting hours to train your model. Join Mastercard engineers Eric and Jordan as they present an introduction to Tensorflow.js, a popular package for training machine learning models in the browser. They will go over use-cases for machine learning on the frontend and walk through a simple demo app.'
          },
          {
            title: 'React Workshop',
            loc: '7-8pm, Hudson 218, with Christina Li'
          },
          {
            title: 'How to be a Product Manager',
            loc: '7-8pm, Hudson 212, with Jenny Chin & Rishi Tripathy'
          }
        ]
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
        time: '6:00PM - 7:00PM',
        name: 'Mixer for Female-Identifying and Non-Binary Hackers with Houzz',
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
        name: 'Midnight Snacks + Nap Time',
        locations: ["Twinnie's"]
      },
      {
        time: '9:00AM - 9:45AM',
        name: 'Breakfast',
        locations: ['Schiciano Foyer']
      },
      {
        time: '10:00AM - 12:00PM',
        name: 'Workshop Session',
        locations: ['Hudson, Various Rooms'],
        modalText: [
          {
            title: 'Interview Advice for the Real World',
            name: 'Erik Zimmer & Sara Rogers (Civis Analytics)',
            loc: '10-11am, Hudson 216',
            speakerBlurb:
              'Sara is a Solution Architect, or what you might call a Pre-Sales Engineer, and she has been at Civis for a year focusing on implementation and onboarding of our clients. Before Sara came to Civis, she was focusing on technical client work at Epic and Uptake. Erik is a recent grad and an Applied Data Scientist here at Civis. He has been working here for about 3 months now and is focusing on our commercial clients. Before Civis he was a TA at Duke and a Data Analyst Intern at ASM research.',
            workshop:
              "Interested in gaining interview advice for the real world! We will be touching upon the research you should be conducting on the company, how you should prepare questions for the interviewer (it's a candidate's job market these days), and resources that you can use to prepare for your interviews, especially technical interviews. We'll also touch upon our interview process and a case study of client work that we've done!"
          },
          {
            title: 'Houzz Workshop',
            name: 'Xin Tong & Jonathan Chu (Houzz)',
            loc: '10-11am, Hudson 212',
            speakerBlurb:
              'Xin is a Software Engineer, who likes to learn, break, and build new things. She is also a full-time foodie, traveler, and dreamer. She also likes Pokemon! I joined Houzz 8 months ago. Before this, I was with AppFolio for 3.5 years. Jonathan joined the Houzz Santa Monica office a year and a half ago as a new grad after spending the previous two summers interning at Uber and SpaceX.',
            workshop: 'More info coming soon!'
          },
          {
            title: 'How to Join the Social Impact Tech Movement',
            name: 'Rachel Dodell (Coding it Forward)',
            loc: '11am-12pm, Hudson 218',
            speakerBlurb:
              "Rachel is a 2018 graduate of Wellesley College, where she studied Media Arts & Sciences. She oversees Coding it Forward's operations, strategic partnerships, and communications. Previously, Rachel worked as a 2018 Venture for America Fellow and a 2017 Civic Digital Fellow at the U.S. Census Bureau. When she’s not writing words or code, she's likely listening to a podcast or searching for the best ice cream in town.",
            workshop:
              'Want to use your tech skills to improve the world? Looking for internship opportunities outside of Big Tech? Have absolutely no idea where to start? That’s why Coding it Forward was created. They’re a nonprofit by and for young people creating new opportunities and pathways into social impact and civic technology. Come join their Co-Founder and Executive Director Rachel Dodell for a workshop on Coding it Forward’s flagship initiatives—the Civic Digital Fellowship and the First Act Fund—as well as tips and tricks for becoming involved in social impact technology.'
          }
        ]
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
      {
        time: '2:00PM - 4:00PM',
        name: 'Judging',
        locations: ['CIEMAS Lobby & Schiciano Foyer']
      },
      {
        time: '4:30PM - 5:30PM',
        name: 'Closing Ceremony',
        locations: ['Page Auditorium'],
        modalText: [
          {
            title: 'Closing Ceremony',
            name: 'Symonne Singleton (Code for America)',
            loc: 'Page Auditorium',
            speakerBlurb:
              'Symonne earned her BA in History at Duke in 2017. She is now a Software Engineer at Code for America, where she works on creating technology to address the consequences of mass incarceration and clear criminal records across the country.'
          }
        ]
      },
      {
        time: '6:00PM',
        name: 'Buses Leaves',
        locations: ['Science Drive']
      }
    ]
  }
];
