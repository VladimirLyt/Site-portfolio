const header = document.querySelector(".site-header");

if (header) {
  let lastY = window.scrollY;
  const threshold = 8;

  window.addEventListener(
    "scroll",
    () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (Math.abs(delta) < threshold) {
        return;
      }

      if (currentY <= 10) {
        header.classList.remove("header-hidden");
      } else if (delta > 0) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }

      lastY = currentY;
    },
    { passive: true }
  );
}

const feedbackInputs = document.querySelectorAll(
  ".feedback-field input, .feedback-field textarea, .feedback-field select"
);

feedbackInputs.forEach((field) => {
  const wrapper = field.closest(".feedback-field");
  if (!wrapper) return;

  const sync = () => {
    const hasValue =
      field.tagName === "SELECT"
        ? field.value !== ""
        : field.value.trim() !== "";
    wrapper.classList.toggle("has-value", hasValue);
  };

  sync();
  field.addEventListener("input", sync);
  field.addEventListener("change", sync);
});

const autoGrowTextareas = document.querySelectorAll(".feedback-field textarea");

autoGrowTextareas.forEach((textarea) => {
  const resize = () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  resize();
  textarea.addEventListener("input", resize);
});

const feedbackForm = document.querySelector(".feedback-form");
const feedbackSuccess = document.querySelector(".feedback-success");

if (feedbackForm && feedbackSuccess) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedbackForm.hidden = true;
    feedbackSuccess.hidden = false;
  });
}
