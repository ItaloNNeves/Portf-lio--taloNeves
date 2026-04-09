document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementsByClassName("navbar")[0];
  const burger = document.getElementById("burger");
  const btnMenu = document.getElementById("btnMenu");

  if (!navbar || !burger || !btnMenu) {
    console.error("Elemento navbar, burger ou btnMenu não encontrado.");
  } else {
    const syncMenu = (open) => {
      if (open) {
        navbar.classList.add("active");
        btnMenu.setAttribute("aria-expanded", "true");
      } else {
        navbar.classList.remove("active");
        btnMenu.setAttribute("aria-expanded", "false");
      }
    };

    burger.addEventListener("change", (e) => {
      syncMenu(e.target.checked);
    });

    document.addEventListener("click", (e) => {
      const clickedInsideNav = e.target.closest(".navbar");
      const clickedOnBtn =
        e.target.closest("#btnMenu") || e.target.closest("label[for='burger']");

      if (!clickedInsideNav && !clickedOnBtn) {
        if (burger.checked) {
          burger.checked = false;
          syncMenu(false);
        }
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && burger.checked) {
        burger.checked = false;
        syncMenu(false);
      }
    });

    syncMenu(burger.checked);
  }

  // FORMULÁRIO -> WHATSAPP
  const inputNome = document.querySelector(".ctt-in[placeholder='Seu Nome']");
  const inputEmail = document.querySelector(".ctt-in[placeholder='Seu Email']");
  const textareaMensagem = document.querySelector(".ctt-msg");
  const btnEnviar = document.querySelector(".ctt-sub");

  if (!inputNome || !inputEmail || !textareaMensagem || !btnEnviar) {
    console.error("Campos do formulário não encontrados.");
    return;
  }

  btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const mensagem = textareaMensagem.value.trim();

    if (!nome  || !mensagem) {
      alert("Por favor, preencha nome, e-mail e mensagem.");
      return;
    }

    const texto = `Olá, Ítalo! Me chamo ${nome}.
E-mail: ${email}

Mensagem:
${mensagem}`;

    const numero = "5575982911046";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
});
