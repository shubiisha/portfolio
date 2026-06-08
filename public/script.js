fetch("/projects")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("projects-container");

    data.forEach((project) => {
      container.innerHTML += `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>${project.technology}</strong></p>
                <a href="${project.github}" target="_blank">
                    GitHub
                </a>
            </div>
        `;
    });
  });

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  document.getElementById("status").innerText = result.message;
});
