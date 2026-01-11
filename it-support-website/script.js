function requestCallback() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const issue = document.getElementById("issue").value;

  if (!name || !phone || !issue) {
    alert("Please fill all fields");
    return;
  }

  window.location.href =
    "mailto:leondoangelo@gmail.com" +
    "?subject=Callback Request" +
    "&body=Name: " + name +
    "%0APhone: " + phone +
    "%0AIssue: " + issue;
}
