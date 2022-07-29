var sign_email = document.getElementById("email");
var sign_password = document.getElementById("password");
var sign_button = document.getElementById("signBtn");

var get_email = localStorage.getItem("sign_email");
var get_password = localStorage.getItem("sign_password");

if ((get_email, get_email != null)) {
  window.location = "index.html";
}

sign_button.addEventListener("click", function () {
  var valid_email = localStorage.getItem("sign_email");
  var valid_password = localStorage.getItem("sign_password");

  if (
    sign_email.value === valid_email ||
    sign_password.value === valid_password
  ) {
    alert("Your account has been actived! Login Now!!");
    return false;
  }

  if ((register_name.value, sign_email.value, sign_password.value === "")) {
    alert("Data not valid ❌");
    localStorage.removeItem("register_name");
    localStorage.removeItem("sign_email");
    localStorage.removeItem("sign_password ");
    return false;
  } else {
    localStorage.setItem("register_name", register_name.value);
    localStorage.setItem("sign_email", sign_email.value);
    localStorage.setItem("sign_password ", sign_password.value);
    alert("Register success ✅");
    window.location = "index.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    var modal = $trigger.dataset.target;
    var $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    var $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    var e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});
