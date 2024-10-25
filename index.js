function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
}
function toggleDropdown() {
  document.getElementById("languageDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.closest(".language-dropdown")) {
    var dropdown = document.getElementById("languageDropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
};
const translations = {
  en: {
    headerTitle: "Welcome to The Kiosk",
    welcomeMessage: "Where great food meets casual comfort",
    menuButton: "Visit Our Menu",
    storyTitle: "Our Story",
    storyContent: "Nestled in the heart of Istanbul, we offer...",
    contactTitle: "Contact Us",
    photosLink: "Photos",
    storyLink: "Our Story",
    contactLink: "Contact Us",
    menuLink: "Our Menu",
    followUsOn:
      'Follow us on <a href="https://www.instagram.com/thekiosk_ist?igsh=M3phNXFpZXAyMDZp" data-i18n="instagram">Instagram</a>',
    storyDetailsSectionOne:
      "Nestled in the heart of Istanbul, we offer a cozy spot for you to enjoy our handcrafted sandwiches, freshly brewed coffee, and a variety of delicious treats. Whether you're grabbing a quick bite on the go or settling in with friends, we’re here to make every meal memorable.",
    storyDetailsSectionTwo:
      "Our menu is thoughtfully created with quality ingredients, and we pride ourselves on providing a relaxed atmosphere where everyone feels welcome. At The Kiosk, it's all about simple, tasty food served with a smile.",
  },
  tr: {
    headerTitle: "The Kiosk'a Hoşgeldiniz",
    welcomeMessage: "Lezzetli yemeklerin rahatlıkla buluştuğu yer.",
    menuButton: "Menümüze Göz Atın",
    storyTitle: "Bizim Hikayemiz",
    storyContent: "İstanbul'un kalbinde yer alan Kiosk...",
    contactTitle: "Bize Ulaşın",
    photosLink: "Fotoğraflar",
    storyLink: "Hikayemiz",
    contactLink: "Bize Ulaşın",
    menuLink: "Menümüz",
    followUsOn:
      'Takip edin <a href="https://www.instagram.com/thekiosk_ist?igsh=M3phNXFpZXAyMDZp" data-i18n="instagram">Instagram\'da</a>',
    storyDetailsSectionOne:
      "İstanbul'un kalbinde, el yapımı sandviçlerimiz, taze demlenmiş kahvemiz ve çeşitli lezzetli tatlarımızla sizi ağırlıyoruz.",
    storyDetailsSectionTwo:
      "The Kiosk'ta, herkesin kendini rahat hissettiği sıcak bir ortamda basit ve lezzetli yemekler sunuyoruz.",
  },
  ar: {
    headerTitle: "مرحبًا بكم في The Kiosk",
    welcomeMessage: "حيث يجتمع الطعام الرائع مع الراحة غير الرسمية.",
    menuButton: "زر قائمتنا",
    storyTitle: "قصتنا",
    storyContent: "يقع كشك في قلب اسطنبول...",
    contactTitle: "اتصل بنا",
    photosLink: "صور",
    storyLink: "قصتنا",
    contactLink: "اتصل بنا",
    menuLink: "قائمتنا",
    followUsOn:
      'تابعنا على <a href="https://www.instagram.com/thekiosk_ist?igsh=M3phNXFpZXAyMDZp" data-i18n="instagram">إنستغرام</a>',
    storyDetailsSectionOne:
      "في قلب إسطنبول، نوفر مكانًا دافئًا لتستمتعوا بسندويتشاتنا اليدوية وقهوتنا الطازجة، مع مجموعة متنوعة من الحلويات اللذيذة.",
    storyDetailsSectionTwo:
      "نقدم طعامًا بسيطًا ولذيذًا في أجواء مريحة ترحب بالجميع.",
  },
};
function setLanguage(language) {
  localStorage.setItem("selectedLanguage", language);
  updateContent(language);
  const storySection = document.querySelector(".text-section");
  const storyHeading = document.querySelector(".text-section h2");
  const contactSection = document.querySelector(".contact-section");

  if (language === "ar") {
    document.body.style.direction = "rtl";
    document.body.style.textAlign = "right";
    document.body.style.fontFamily = "'Amiri', serif";
    storySection.style.direction = "rtl";
    storySection.style.textAlign = "right";
    storyHeading.classList.add("rtl-heading");
    contactSection.classList.add("rtl-contact");
  } else {
    document.body.style.direction = "ltr";
    document.body.style.textAlign = "left";
    document.body.style.fontFamily = "'Poppins', sans-serif";
    storySection.style.direction = "ltr";
    storySection.style.textAlign = "left";
    storyHeading.classList.remove("rtl-heading");
    contactSection.classList.remove("rtl-contact");
  }
}
function updateContent(language) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = translations[language][key];
  });
}
