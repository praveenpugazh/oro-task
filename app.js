const datas = [
  {
    id: 1,
    name: "Kanan S",
    partnerId: "OMA00007",
    mobile: 9988776655,
    status: "VISIT OMV00035",
    active: "green",
  },
  {
    id: 2,
    name: "Sivasubramaniyan K",
    partnerId: "OMA00005",
    mobile: 9988775544,
    status: "VISIT OMV00033",
    active: "green",
  },
  {
    id: 3,
    name: "Jayaraman S",
    partnerId: "OMA00011",
    mobile: 9988875544,
    status: "IDLE",
    active: "yellow",
  },
  {
    id: 4,
    name: "Saravanan C",
    partnerId: "OMA00006",
    mobile: 9184878621,
    status: "IDLE",
    active: "yellow",
  },
  {
    id: 5,
    name: "Sreekesh K",
    partnerId: "OMA00028",
    mobile: 9841874321,
    status: "INACTIVE",
    active: "red",
  },
  {
    id: 6,
    name: "Rakesh M",
    partnerId: "OMA00021",
    mobile: 8869845321,
    status: "INACTIVE",
    active: "red",
  },
  {
    id: 7,
    name: "Parth Shah",
    partnerId: "OMA00021",
    mobile: 8869845321,
    status: "INACTIVE",
    active: "red",
  },
];

const sideSection = document.querySelector(".side-section-content");

const contactCardDetails = datas.map((data) => {
  //create elements
  const contactCardParent = document.createElement("div");
  const contactCard = document.createElement("div");
  const arrowDiv = document.createElement("div");
  const statusRound = document.createElement("span");

  //adding class names
  contactCardParent.classList.add("single-contact-card");
  contactCard.classList.add("card-content");
  arrowDiv.classList.add("card-arrow");
  arrowDiv.innerHTML = '<i class="fas fa-arrow-circle-right"></i>';
  const title = document.createElement("h4");
  title.innerText = data.name;
  const para = document.createElement("p");
  para.innerHTML = `<span> ${data.partnerId}</span> | <span>${data.mobile} </span>`;
  const status = document.createElement("h5");
  statusRound.classList.add("green-status");
  if (data.active === "green") {
    status.innerHTML = `<span class="green-status"></span> ${data.status}`;
  } else if (data.active === "yellow") {
    status.innerHTML = `<span class="yellow-status"></span> ${data.status}`;
  } else {
    status.innerHTML = `<span class="red-status"></span> ${data.status}`;
  }

  //appending children to parent nodes
  contactCard.appendChild(title);
  contactCard.appendChild(para);
  contactCard.appendChild(status);
  contactCardParent.appendChild(contactCard);
  contactCardParent.appendChild(arrowDiv);
  sideSection.appendChild(contactCardParent);

  contactCardParent.addEventListener("click", () => {
    sideSection.childNodes.forEach((child) => {
      if (child.nodeType === 1) {
        if (child.classList.contains("active")) {
          child.classList.remove("active");
        }
      }
    });
    const detailsName = document.querySelector(".name-card");
    const detailsId = document.querySelector(".partner-id-card");
    const detailsStatus = document.querySelector(".status-card");
    const detailsMobile = document.querySelector(".mobile-card");
    contactCardParent.classList.toggle("active");

    detailsName.innerText = contactCard.children[0].textContent;
    let idTrim = contactCard.children[1].textContent;
    idTrim = idTrim.substr(0, idTrim.indexOf(" | "));
    let mobileTrim = contactCard.children[1].textContent;

    mobileTrim = mobileTrim.substr(
      mobileTrim.indexOf(" | ") + 2,
      mobileTrim.length - 1
    );

    detailsId.innerText = idTrim;
    detailsMobile.innerText = mobileTrim;
    detailsStatus.innerHTML = contactCard.children[2].innerHTML;
    console.log(contactCard.children[2]);
  });
});

//mobile dropdown

const partnerDropdown = document.querySelector(".partners-btn");
const sectionToBeDisplayed = document.querySelector(".side-section-content");
partnerDropdown.addEventListener("click", () => {
  sectionToBeDisplayed.classList.toggle("active");
});

//nav-hamburger

const hamburger = document.querySelector(".hamburger");
const sideReveal = document.querySelector(".nav-mob-items");
hamburger.addEventListener("click", () => {
  console.log("clicked");
  sideReveal.classList.toggle("active");
});
