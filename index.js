const form = document.querySelector("form");
const fullName = document.getElementById("name");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Phone Number: ${phoneNumber.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

  Email.send({
    SecureToken: "e50c7100-23f8-4405-a34b-f33e93504778",
    // Host: "smtp.elasticemail.com",
    // Username: "ghayrapetyan890@gmail.com",
    // Password: "22FC5D16075F405814D0B6706BF264D788DD",
    To: 'ghayrapetyan890@gmail.com',
    From: "ghayrapetyan890@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }
  );
}

function checkInputs() {
  const items = [fullName, phoneNumber];

  for (const item of items) {
    if (item.value.trim() === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    } else {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }

    item.addEventListener("keyup", () => {
      if (item.value.trim() !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (!fullName.classList.contains("error") && !phoneNumber.classList.contains("error")) {
    sendEmail();

    form.reset();
    return false;
  }
});

