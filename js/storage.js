const contactForm = document.getElementById("contactForm");
const contactListLocal = document.getElementById("contactListLocal");
const contactListSession = document.getElementById("contactListSession");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  //Contacto
  const contact = {
    name,
    email,
    message,
  };
  //Guardar
  saveContactLocalStorage(contact);
  saveContactSessionStorage(contact);
  //Mostrar
  displayContactsLocalStorage();
  displayContactsSessionStorage();
  contactForm.reset();
});
//Gestion LocalStorage
const saveContactLocalStorage = (contact) => {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
};

const displayContactsLocalStorage = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  displayContacts(contacts,contactListLocal);
};
//Gestion SessionStorage
const saveContactSessionStorage = (contact) => {
    let contacts = JSON.parse(sessionStorage.getItem("contacts")) || [];
    contacts.push(contact);
    sessionStorage.setItem("contacts", JSON.stringify(contacts));
  };
const displayContactsSessionStorage = () => {
    const contacts = JSON.parse(sessionStorage.getItem("contacts")) || [];
    displayContacts(contacts,contactListSession);
  };
const displayContacts = (data, contactList) => {
  contactList.innerHTML = "";
  data.forEach((contact) => {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
    contactItem.innerHTML = `
                <p><b>Nombre:</b> ${contact.name}</p>
                <p><b>Email:</b> ${contact.email}</p>
                <p><b>Mensaje:</b> ${contact.message}</p>
            `;
    contactList.appendChild(contactItem);
  });
};
/* Mostrar inicialmente los Contactos guardados */
displayContactsLocalStorage();
displayContactsSessionStorage();
