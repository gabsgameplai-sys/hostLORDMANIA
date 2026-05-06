function send() {
  let input = document.getElementById("msg");
  let chat = document.getElementById("chat");
  let skin = document.getElementById("skin");

  let msg = input.value.trim();
  if (!msg) return;

  chat.innerHTML += `
    <div class="user-msg"><span>${msg}</span></div>
  `;

  let reply = "";

  if (msg === "/help") {
    reply = "Comandos: /help, /skin NICK, /ip";
  }

  else if (msg === "/ip") {
    reply = "IP: lordmania.qzz.io";
  }

  else if (msg.startsWith("/skin")) {
    let nick = msg.split(" ")[1];

    if (!nick) {
      reply = "Use: /skin NICK";
    } else {
      let url = `https://crafatar.com/renders/body/${nick}?overlay=true`;

      skin.src = url;

      // fallback automático
      skin.onerror = () => {
        skin.src = `https://minotar.net/body/${nick}/200.png`;
      };

      reply = `Mostrando skin de ${nick}`;
    }
  }

  else {
    reply = "Não entendi 🤔 (use /help)";
  }

  chat.innerHTML += `
    <div class="bot-msg">${reply}</div>
  `;

  chat.scrollTop = chat.scrollHeight;
  input.value = "";
}
