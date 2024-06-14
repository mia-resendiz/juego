const scenes = {
  start: {
      text: "Eres T/n y tu día comienza tranquilo, vas a la escuela, te diviertes con tus amigos, sales un rato te diviertes pero al llegar a casa tu madre te dice que se mudarán y te cambiarán de escuela. ¿Aceptas ser transferido a otra escuela?",
      choices: [
          { text: "Aceptar sin problemas", next: "accept_transfer" },
          { text: "No aceptar y hacer berrinche", next: "refuse_transfer" }
      ]
  },
  accept_transfer: {
      text: "Tu madre está orgullosa de ti. Al ver que aceptaste sin problemas, decide llevarte a comer a tu lugar favorito con tus amigos para despedirte de ellos. Al día siguiente, te transferirás a tu nueva escuela y comenzarás una nueva vida en otro lugar.",
      choices: [
          { text: "Continuar", next: "new_school" }
      ]
  },
  refuse_transfer: {
      text: "Tu madre se enoja contigo y te castiga por un mes sin salir, sin videojuegos y sin celular. Aún así se mudan y te cambian de escuela.",
      choices: [
          { text: "Continuar", next: "new_school" }
      ]
  },
  new_school: {
      text: "Al día siguiente en tu nueva escuela se te acerca un grupo de dos chicas y tres chicos preguntándote si quieres ser parte de su grupo. ¿Aceptarás unirte a ellos?",
      choices: [
          { text: "Aceptar ser de su grupo", next: "join_group" },
          { text: "Negarte con respeto e irte de ahí", next: "refuse_group" }
      ]
  },
  join_group: {
      text: "Ese grupo al que te uniste se mete en problemas y te hacen menos. Solo le hacen bullying a Mat, un chico con problemas familiares y con solo dos amigos.",
      choices: [
          { text: "Continuar", next: "follow_mat" }
      ]
  },
  refuse_group: {
      text: "Ese grupo ahora te odia y te molestará cada que te vean. Como ventaja, Mat y sus amigos se juntarán contigo para que no estés solo y tratarán de defenderte del grupo de bullies.",
      choices: [
          { text: "Continuar", next: "follow_mat" }
      ]
  },
  follow_mat: {
      text: "Después de un tiempo, notas que Mat está un poco raro y lo sigues a un salón en el cual no hay nadie. Decides entrar y Mat está volando. Mat, al verte, se asusta y deja de volar. Te pide que guardes el secreto. ¿Guardas el secreto de Mat?",
      choices: [
          { text: "Aceptar guardar el secreto", next: "keep_secret" },
          { text: "No guardar el secreto", next: "reveal_secret" }
      ]
  },
  keep_secret: {
      text: "Mat está muy agradecido contigo y decide ayudarte en todo lo que hagas.",
      choices: [
          { text: "Fin", next: "start" }
      ]
  },
  reveal_secret: {
      text: "Mat es tachado de raro y fenómeno. Un día dejó de ir a la escuela. Hay probabilidades de que se haya suicidado o desaparecido.",
      choices: [
          { text: "Fin", next: "start" }
      ]
  }
};

let currentScene = scenes.start;

function showScene(scene) {
  const textElement = document.getElementById("text");
  const choicesElement = document.getElementById("choices");

  textElement.innerText = scene.text;
  choicesElement.innerHTML = "";

  scene.choices.forEach(choice => {
      const button = document.createElement("button");
      button.innerText = choice.text;
      button.onclick = () => showScene(scenes[choice.next]);
      choicesElement.appendChild(button);
  });
}

showScene(currentScene);
