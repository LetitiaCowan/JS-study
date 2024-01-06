let user = [
  {
    username: "Letitia",
    email: "Letitia.cowan01@hotmail.com",
    password: "Damian123",
    subscriptionStatus: "VIP",
    discordID: "Letitia Cowan#0001",
    lessonCompleted: [0, 1, 2],
  },
  {
    username: "Tristan",
    email: "Tristan.cowan01@hotmail.com",
    password: "Belle123",
    subscriptionStatus: "VIP",
    discordID: "Tristan Cowan#0002",
    lessonCompleted: [0, 1, 2, 3],
  },
  {
    username: "Zen",
    email: "Zen.cowan01@hotmail.com",
    password: "Micky123",
    subscriptionStatus: "VIP",
    discordID: "Zen Cowan#0002",
    lessonCompleted: [0, 1, 2, 3],
  },
];


function login(email, password) {
  for (i = 0; i < user.length; i++) {
    if (user[i].email === email) {
        console.log(user[i])
      if (user[i].password === password) {
        console.log("The password are correct - log the user in")
      }
      else {
        console.log('Password incorrect')
      }
      return;
    }

  }
  console.log('Could not find a email that matches')
}


function register(newUser) {
    user.push(newUser);
  }
  
  register({
    username: "HI",
    email: "hi@@@",
    password: "hello",
    subscriptionStatus: "VIP",
    discordID: "#0004",
    lessonCompleted: [0, 1, 2],
  });
  
  console.log(user);
  
login ('hi@@@', 'hello')
