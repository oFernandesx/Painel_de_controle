document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openSidebarBtn = document.querySelector(".bi-list");

    // Função para alternar a exibição da modal
    function toggleModal() {
        if (modal.open) {
            modal.close(); // Fecha a modal se estiver aberta
        } else {
            modal.showModal(); // Abre a modal se estiver fechada
        }
    }

    // Abrir e fechar modal ao clicar no ícone do menu
    openSidebarBtn.addEventListener("click", toggleModal);

    // Fechar modal ao clicar fora dela
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.close();
        }
    });
});
