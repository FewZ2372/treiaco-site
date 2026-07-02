const serviceDetails = {
  pulido: {
    kicker: "Pulido de hormigón",
    title: "Recuperación y terminación de pisos existentes.",
    description:
      "Tratamiento de superficies de hormigón y mosaico para mejorar terminación, brillo, limpieza y resistencia al uso diario.",
    items: [
      "Desbaste y pulido con maquinaria específica.",
      "Restauración de pisos deteriorados.",
      "Terminaciones para espacios comerciales, industriales y residenciales.",
    ],
  },
  pisos: {
    kicker: "Pisos industriales",
    title: "Superficies preparadas para alto tránsito.",
    description:
      "Ejecución y terminación de pisos para naves, locales, depósitos y espacios de trabajo que requieren durabilidad.",
    items: [
      "Hormigón alisado para obra nueva y ampliaciones.",
      "Revestimientos epoxi y poliuretánicos.",
      "Pisos decorativos para espacios comerciales.",
    ],
  },
  impermeabilizacion: {
    kicker: "Impermeabilización",
    title: "Protección de cubiertas, frentes y superficies expuestas.",
    description:
      "Trabajos de impermeabilización para prevenir filtraciones y proteger estructuras existentes.",
    items: [
      "Techos, terrazas, frentes y medianeras.",
      "Tanques, sótanos y zonas con humedad.",
      "Aplicación de membranas y sistemas según la superficie.",
    ],
  },
};

const modal = document.querySelector("#service-modal");
const modalKicker = document.querySelector("#modal-kicker");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalList = document.querySelector("#modal-list");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll("[data-service]").forEach((button) => {
  button.addEventListener("click", () => {
    const detail = serviceDetails[button.dataset.service];

    modalKicker.textContent = detail.kicker;
    modalTitle.textContent = detail.title;
    modalDescription.textContent = detail.description;
    modalList.replaceChildren(
      ...detail.items.map((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
      })
    );

    modal.showModal();
  });
});

modalClose.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
