function showPage(pageId) {
  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function openGift(message) {
  document.getElementById("popupMessage").textContent = message;
  document.getElementById("popup").classList.add("show");
}

function closeGift() {
  document.getElementById("popup").classList.remove("show");
}

// Floating hearts
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["💗", "💕", "💖", "🌸"][Math.floor(Math.random() * 4)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(function() {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 700);
// Open When Messages

const messages = {
  sad: {
    emoji: "💗",
    title: "When You Feel Sad",
    text: "Hey Shraddha! ❤️ Don't be sad, okay? You deserve all the happiness in this world. Remember, difficult days don't last forever. Sending you the biggest hug! 🤗"
  },

  smile: {
    emoji: "🥰",
    title: "When You Need a Smile",
    text: "Hey silly girl! 😂 Smile please! Your smile makes everything brighter. Here's one big virtual chocolate and a thousand reasons to smile! 🍫💗"
  },

  alone: {
    emoji: "🤗",
    title: "When You Feel Alone",
    text: "You are never alone, Shraddha. Even when we are far away, you have a friend who wishes the best for you. I'm always cheering for you! 💕"
  },

  motivation: {
    emoji: "🌸",
    title: "When You Need Motivation",
    text: "Believe in yourself, Shraddha! You are stronger than you think and capable of amazing things. Keep going, your dreams are waiting for you! ✨"
  },

  miss: {
    emoji: "💌",
    title: "When You Miss Me",
    text: "Awww! Missing me? 🥹 Sending you a big hug! Remember all the silly laughs and sweet moments. Here's a virtual Kinder Joy for you! 🍫❤️"
  }
};

function openMessage(type) {
  const msg = messages[type];

  document.getElementById("messageEmoji").textContent = msg.emoji;
  document.getElementById("messageTitle").textContent = msg.title;
  document.getElementById("messageText").textContent = msg.text;

  document.getElementById("messageCard").classList.add("show");
}

function closeMessage() {
  document.getElementById("messageCard").classList.remove("show");
}