function send() {
  let input = document.getElementById("msg");
  let chat = document.getElementById("chat");

  let userMsg = input.value.trim();
  if (!userMsg) return;

  chat.innerHTML += `<p class="user"><b>Você:</b> ${userMsg}</p>`;

  let reply = "";

  if (userMsg === "/help") {
    reply = "Comandos: /help, /status, /ip, /skin NICK";
  }

  else if (userMsg === "/status") {
    reply = "Servidor: Online 🟢";
  }

  else if (userMsg === "/ip") {
    reply = "IP: lordmania.qzz.io";
  }

  else if (userMsg.startsWith("/skin")) {
    let nick = userMsg.split(" ")[1];

    if (!nick) {
      reply = "Use: /skin NICK";
    } else {
      reply = `
        Skin de ${nick}:<br>
        <img src="https://crafatar.com/renders/body/${nick}">
      `;
    }
  }

  else {
    reply = "Comando desconhecido. Use /help";
  }

  chat.innerHTML += `<p class="bot"><b>Bot:</b> ${reply}</p>`;

  chat.scrollTop = chat.scrollHeight;
  input.value = "";
}
