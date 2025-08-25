🏀 Scoreboard App

A simple, retro-style basketball scoreboard built with HTML, CSS, and JavaScript.
You can keep track of Home and Guest team scores, add points with buttons, and reset with a single click.

✨ Features

🎮 Interactive Buttons – Add +1, +2, or +3 points to Home or Guest

🔄 New Game Button – Quickly reset both scores to zero

🕹️ Button Press Animation – Buttons shrink & highlight when clicked

🎨 Retro Font Styling – Uses CursedTimer font for a digital scoreboard look

📱 Responsive Layout – Centered and balanced design

------------------------------------------------------------------------------------

🚀 Getting Started

1. Clone the repository
   git clone https://github.com/your-username/scoreboard.git
   cd scoreboard

2. Open in browser

Just open the index.html file in your browser. No server or build step required.

------------------------------------------------------------------------------------

🛠️ Project Structure
```
scoreboard/
│── index.html # Main HTML structure
│── index.css # Styling and layout
│── index.js # Scoreboard logic
│── CursedTimerUlil.ttf # Custom digital timer font
```

------------------------------------------------------------------------------------

⚙️ How It Works

The buttons call updateHome(points) or updateGuest(points) functions

Scores are stored in JavaScript variables and updated on the page

The New Game button resets everything to 0

Buttons get a quick pressed animation (.pressed CSS class) for a tactile feel

------------------------------------------------------------------------------------

🤝 Contributing

Feel free to fork and modify – add timers, fouls, or extra features!
Pull requests are welcome.
