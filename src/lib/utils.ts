export const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  contactSection?.scrollIntoView({
    behavior: "smooth",
  });
};