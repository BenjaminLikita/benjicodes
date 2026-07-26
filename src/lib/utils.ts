export const scrollTo = (id: string) => {
  const contactSection = document.getElementById(id);
  contactSection?.scrollIntoView({
    behavior: "smooth",
  });
};
