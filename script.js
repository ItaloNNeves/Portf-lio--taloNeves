document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementsByClassName("navbar") [0];
  const burger = document.getElementById("burger");    // checkbox
  const btnMenu = document.getElementById("btnMenu");  // container do botão

  if (!navbar || !burger || !btnMenu) {
    console.error("Elemento navbar, burger ou btnMenu não encontrado.");
    return;
  }

  // Sincroniza a abertura do menu com o estado do checkbox
  const syncMenu = (open) => {
    if (open) {
      navbar.classList.add("active");
      btnMenu.setAttribute("aria-expanded", "true");
    } else {
      navbar.classList.remove("active");
      btnMenu.setAttribute("aria-expanded", "false");
    }
  };

  // Quando o checkbox mudar (clicou no label ou no input)
  burger.addEventListener("change", (e) => {
    syncMenu(e.target.checked);
  });

  // Clique fora -> fecha o menu e desmarca o checkbox
  document.addEventListener("click", (e) => {
    const clickedInsideNav = e.target.closest("#navbar");
    const clickedOnBtn = e.target.closest("#btnMenu") || e.target.closest("label[for='burger']");
    if (!clickedInsideNav && !clickedOnBtn) {
      if (burger.checked) {
        burger.checked = false;   // desmarca visualmente
        syncMenu(false);          // remove classe active
      }
    }
  });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burger.checked) {
      burger.checked = false;
      syncMenu(false);
    }
  });

  // (opcional) - se o menu for aberto via CSS por outro meio, sincronize no load
  syncMenu(burger.checked);
});

//parte da traduçao

