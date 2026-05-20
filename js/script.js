const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-es]");
const backTopButton = document.querySelector(".back-top");
const revealElements = document.querySelectorAll(".reveal");
const panelButtons = document.querySelectorAll("[data-panel-target]");
const menuPanels = document.querySelectorAll("[data-panel]");
const infoModal = document.querySelector(".info-modal");
const infoTitle = document.querySelector("#info-title");
const infoDescription = document.querySelector("#info-description");
const closeInfoButtons = document.querySelectorAll("[data-close-info]");

let currentLanguage = localStorage.getItem("maitagarri-language") || "es";

const dishInfo = {
  "Magras con tomate, 2 huevos fritos y patatas": {
    es: "Lonchas finas de cerdo curado cocinadas con tomate, acompañadas de huevos fritos y patatas. Un almuerzo muy navarro para empezar fuerte la mañana.",
    en: "Thin slices of cured pork cooked with tomato, served with fried eggs and potatoes. A very Navarrese breakfast to start the day strong.",
    fr: "Fines tranches de porc seche cuisinees a la tomate, avec oeufs frits et pommes de terre. Un petit dejeuner tres navarrais."
  },
  "Bacon, 2 huevos fritos y patatas": {
    es: "Bacon dorado a la plancha, huevos fritos al momento y patatas crujientes. Sencillo, contundente y perfecto para San Fermín.",
    en: "Grilled bacon, freshly fried eggs and crisp potatoes. Simple, generous and perfect for San Fermin.",
    fr: "Bacon grille, oeufs frits minute et pommes de terre croustillantes. Simple, genereux et parfait pour San Fermin."
  },
  "Chistorra con tomate, 2 huevos fritos y patatas": {
    es: "Chistorra navarra jugosa con tomate casero, huevos fritos y patatas. Sabor clásico de barra pamplonesa.",
    en: "Juicy Navarrese chistorra with homemade tomato, fried eggs and potatoes. A classic Pamplona bar flavor.",
    fr: "Chistorra navarraise avec tomate maison, oeufs frits et pommes de terre. Saveur classique de Pampelune."
  },
  "Lomo de cerdo, 2 huevos fritos y patatas": {
    es: "Lomo de cerdo marcado a la plancha, servido con huevos fritos y patatas. Un almuerzo directo y sabroso.",
    en: "Grilled pork loin served with fried eggs and potatoes. A direct and tasty breakfast.",
    fr: "Longe de porc grillee, servie avec oeufs frits et pommes de terre. Un plat simple et savoureux."
  },
  "Ajoarriero a la navarra con un huevo frito": {
    es: "Guiso tradicional de bacalao desmigado con verduras, ligado con salsa sabrosa y terminado con huevo frito.",
    en: "Traditional stew of shredded cod with vegetables, bound in a savory sauce and finished with a fried egg.",
    fr: "Plat traditionnel de morue emiettee avec legumes, sauce savoureuse et oeuf frit."
  },
  "Estofado de toro con patatas fritas": {
    es: "Carne de toro cocinada lentamente hasta quedar tierna, con salsa intensa y patatas fritas para acompañar.",
    en: "Bull meat slow-cooked until tender, with a deep sauce and fries on the side.",
    fr: "Viande de taureau mijotee jusqu'a tendrete, avec sauce intense et frites."
  },
  "Chistorra de Arbizu": {
    es: "Chistorra artesana de Arbizu, jugosa y especiada, servida caliente para compartir.",
    en: "Artisan chistorra from Arbizu, juicy and lightly spiced, served hot to share.",
    fr: "Chistorra artisanale d'Arbizu, juteuse et epicee, servie chaude a partager."
  },
  "Revuelto de bacalao": {
    es: "Huevos cremosos revueltos con bacalao, una combinación suave, salina y muy de sidrería.",
    en: "Creamy scrambled eggs with cod, a soft, savory cider-house classic.",
    fr: "Oeufs brouilles cremeux a la morue, doux, salin et typique de cidrerie."
  },
  "Ensalada de queso de cabra con frutos secos": {
    es: "Ensalada templada con queso de cabra, frutos secos y contraste dulce-salado.",
    en: "Warm salad with goat cheese, nuts and a sweet-salty contrast.",
    fr: "Salade tiede au fromage de chevre, fruits secs et contraste sucre-sale."
  },
  "Chuletón premium": {
    es: "Pieza noble de vaca para compartir, marcada a la brasa y servida con todo el sabor de la carne madurada.",
    en: "A noble beef cut for sharing, grilled over embers and served with the full flavor of aged meat.",
    fr: "Belle piece de boeuf a partager, grillee a la braise avec toute la saveur de la viande maturee."
  },
  "Lagarto ibérico": {
    es: "Corte jugoso del cerdo ibérico, muy sabroso por su infiltración y perfecto a la brasa.",
    en: "A juicy Iberian pork cut, rich thanks to its marbling and perfect on the grill.",
    fr: "Morceau juteux de porc iberique, savoureux grace a son persillage et parfait a la braise."
  },
  "Solomillo de vaca": {
    es: "Corte tierno y elegante de vaca, pensado para quien busca carne suave y limpia.",
    en: "A tender, elegant beef cut for those who prefer clean, delicate meat.",
    fr: "Morceau tendre et elegant de boeuf, pour une viande douce et nette."
  },
  "Lubina al horno": {
    es: "Pescado blanco horneado con punto jugoso, sabor fino y acompañamiento sencillo.",
    en: "Baked white fish with a juicy texture, delicate flavor and simple garnish.",
    fr: "Poisson blanc au four, juteux, delicat et accompagne simplement."
  },
  "Sepia con panaderas": {
    es: "Sepia tierna servida con patatas panaderas, una opción marinera cómoda para compartir.",
    en: "Tender cuttlefish served with panadera potatoes, an easy seafood dish to share.",
    fr: "Seiche tendre avec pommes boulangere, une option marine a partager."
  },
  "Tarta de queso": {
    es: "Tarta cremosa de queso, horneada para quedar suave por dentro y ligeramente tostada.",
    en: "Creamy baked cheesecake, soft inside and lightly toasted.",
    fr: "Gateau au fromage cremeux, cuit au four, tendre et legerement dore."
  },
  "Cuajada": {
    es: "Postre tradicional de leche cuajada, suave y lácteo, ideal con miel o frutos secos.",
    en: "Traditional milk curd dessert, soft and dairy-forward, ideal with honey or nuts.",
    fr: "Dessert traditionnel de lait caille, doux et lacte, ideal avec miel ou fruits secs."
  },
  "Tarta de chocolate": {
    es: "Postre intenso de chocolate, pensado para cerrar la comida con un final goloso.",
    en: "Rich chocolate dessert, made for a sweet finish to the meal.",
    fr: "Dessert intense au chocolat, pour finir le repas avec gourmandise."
  },
  "Torrija": {
    es: "Pan brioche empapado y caramelizado, tierno por dentro y dorado por fuera.",
    en: "Soaked and caramelized brioche, tender inside and golden outside.",
    fr: "Brioche imbibee et caramelisee, tendre dedans et doree dehors."
  },
  "Flan": {
    es: "Flan casero de huevo, textura suave y sabor clásico.",
    en: "Homemade egg flan with a smooth texture and classic flavor.",
    fr: "Flan maison aux oeufs, texture douce et saveur classique."
  },
  "Ensalada griega": {
    es: "Ensalada fresca de inspiración mediterránea con queso, verduras y aliño ligero.",
    en: "Fresh Mediterranean-style salad with cheese, vegetables and a light dressing.",
    fr: "Salade fraiche d'inspiration mediterraneenne avec fromage, legumes et assaisonnement leger."
  },
  "Cogollos de Tudela": {
    es: "Cogollos crujientes y frescos de Tudela, normalmente servidos con un aliño sabroso.",
    en: "Crisp, fresh Tudela lettuce hearts, usually served with a savory dressing.",
    fr: "Coeurs de laitue de Tudela, frais et croquants, avec assaisonnement savoureux."
  },
  "Cabra en equilibrio": {
    es: "Plato con queso de cabra y contrastes de textura, pensado entre lo cremoso, lo dulce y lo crujiente.",
    en: "A goat cheese dish with texture contrasts, balancing creamy, sweet and crisp notes.",
    fr: "Plat au fromage de chevre avec contrastes de texture, entre cremeux, sucre et croquant."
  },
  "Icónico Ibérico": {
    es: "Selección ibérica de sabor intenso, perfecta para abrir mesa y compartir.",
    en: "An intense Iberian selection, perfect to start the meal and share.",
    fr: "Selection iberique au gout intense, parfaite a partager en debut de repas."
  },
  "Corazón de alcachofas": {
    es: "Alcachofas tiernas con sabor vegetal y delicado, servidas en formato limpio y elegante.",
    en: "Tender artichokes with a delicate vegetable flavor, served cleanly and elegantly.",
    fr: "Artichauts tendres a la saveur vegetale delicate, servis simplement et elegamment."
  },
  "Hummus casero": {
    es: "Crema de garbanzo con tahini, aceite de oliva y especias suaves. Ideal para compartir.",
    en: "Chickpea cream with tahini, olive oil and mild spices. Ideal for sharing.",
    fr: "Creme de pois chiches au tahini, huile d'olive et epices douces. Ideal a partager."
  },
  "Baba ganug": {
    es: "Crema ahumada de berenjena asada con tahini y aceite de oliva.",
    en: "Smoky roasted eggplant cream with tahini and olive oil.",
    fr: "Creme fumee d'aubergine rotie avec tahini et huile d'olive."
  },
  "Falafel": {
    es: "Bocados crujientes de garbanzo y hierbas, con inspiración de Oriente Medio.",
    en: "Crisp chickpea and herb bites inspired by the Middle East.",
    fr: "Bouchees croustillantes de pois chiches et herbes, inspirees du Moyen-Orient."
  },
  "Kofta": {
    es: "Carne especiada de estilo oriental, jugosa y aromática.",
    en: "Eastern-style spiced meat, juicy and aromatic.",
    fr: "Viande epicee de style oriental, juteuse et aromatique."
  },
  "Shish tawuk": {
    es: "Brocheta de pollo marinado con especias suaves, yogur y toque cítrico.",
    en: "Chicken skewer marinated with mild spices, yogurt and a citrus touch.",
    fr: "Brochette de poulet marine aux epices douces, yaourt et touche citronnee."
  },
  "Pulpo a la parrilla": {
    es: "Pulpo marcado a la parrilla, con exterior dorado y textura tierna.",
    en: "Grilled octopus with a golden outside and tender texture.",
    fr: "Poulpe grille, dore a l'exterieur et tendre."
  },
  "Vieiras del pacífico": {
    es: "Vieiras suaves y delicadas, con sabor marino elegante.",
    en: "Soft, delicate scallops with an elegant seafood flavor.",
    fr: "Noix de Saint-Jacques douces et delicates, saveur marine elegante."
  },
  "Tortilla de bacalao": {
    es: "Tortilla jugosa con bacalao desmigado, muy típica de sidrería.",
    en: "Juicy omelette with shredded cod, a cider-house classic.",
    fr: "Omelette juteuse a la morue emiettee, typique de cidrerie."
  },
  "Paella de marisco": {
    es: "Arroz marinero con marisco, caldo sabroso y punto festivo.",
    en: "Seafood rice with a flavorful stock and festive character.",
    fr: "Riz marin aux fruits de mer, bouillon savoureux et esprit festif."
  },
  "Ajoarriero navarro": {
    es: "Bacalao desmigado guisado con verduras, tomate y sabor tradicional navarro.",
    en: "Shredded cod stewed with vegetables, tomato and traditional Navarrese flavor.",
    fr: "Morue emiettee mijotee avec legumes, tomate et saveur navarraise."
  },
  "Gambones a la miel": {
    es: "Gambones con toque dulce de miel y fondo sabroso, contraste potente y diferente.",
    en: "King prawns with a honey touch and savory base, a bold sweet-salty contrast.",
    fr: "Gambas royales au miel, fond savoureux et contraste sucre-sale."
  },
  "Sepia a la plancha": {
    es: "Sepia marcada a la plancha, tierna, limpia y con sabor de mar.",
    en: "Grilled cuttlefish, tender, clean and full of sea flavor.",
    fr: "Seiche a la plancha, tendre, nette et marine."
  },
  "Gran chuletón premium": {
    es: "El plato estrella de la brasa: chuletón grande para compartir, con sabor profundo, grasa noble y punto jugoso.",
    en: "The grill's star dish: a large rib steak to share, with deep flavor, noble fat and a juicy finish.",
    fr: "La star de la braise: grande cote de boeuf a partager, saveur profonde, gras noble et cuisson juteuse."
  },
  "Solomillo de vaca madurada": {
    es: "Solomillo tierno de vaca madurada, con sabor elegante y textura muy suave.",
    en: "Tender aged beef fillet with elegant flavor and a very soft texture.",
    fr: "Filet de boeuf mature tendre, saveur elegante et texture tres douce."
  },
  "Entrecot ahumado": {
    es: "Entrecot con toque ahumado, marcado a la brasa para potenciar su aroma.",
    en: "Entrecote with a smoky touch, grilled to enhance its aroma.",
    fr: "Entrecote au touche fume, grillee pour renforcer son arome."
  },
  "Melosos de carrilleras": {
    es: "Carrilleras cocinadas lentamente hasta quedar melosas, con salsa profunda.",
    en: "Beef cheeks slow-cooked until tender and silky, with a deep sauce.",
    fr: "Joues mijotees jusqu'a devenir fondantes, avec sauce profonde."
  },
  "Estofado de toro": {
    es: "Guiso de toro de cocción lenta, intenso y muy ligado a la fiesta.",
    en: "Slow-cooked bull stew, intense and closely tied to the festival.",
    fr: "Ragout de taureau mijote, intense et tres lie a la fete."
  },
  "Tarta de queso crema horneada": {
    es: "Tarta de queso cremosa y horneada, con centro suave y sabor lácteo elegante.",
    en: "Creamy baked cheesecake with a soft center and elegant dairy flavor.",
    fr: "Gateau au fromage cremeux et cuit, centre doux et saveur lactee elegante."
  },
  "Cuajada de leche de oveja con nueces y miel": {
    es: "Cuajada tradicional de leche de oveja, acompañada de nueces y miel.",
    en: "Traditional sheep milk curd served with walnuts and honey.",
    fr: "Caille traditionnelle de lait de brebis avec noix et miel."
  },
  "Torrija de pan brioche caramelizada": {
    es: "Brioche empapado, dorado y caramelizado, con textura jugosa.",
    en: "Soaked brioche, golden and caramelized, with a juicy texture.",
    fr: "Brioche imbibee, doree et caramelisee, texture moelleuse."
  },
  "Flan de huevo": {
    es: "Flan clásico de huevo con textura fina y caramelo.",
    en: "Classic egg flan with a smooth texture and caramel.",
    fr: "Flan classique aux oeufs, texture fine et caramel."
  }
};

const setLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;

  translatableElements.forEach((element) => {
    const value = element.dataset[language];
    if (value) {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("maitagarri-language", language);
  addInfoButtons();
};

const getDishKey = (element) => {
  if (element.dataset.infoKey) return element.dataset.infoKey;
  const textSource = element.matches("li") ? element : element.querySelector("h3");
  return textSource?.dataset.es || textSource?.textContent.trim();
};

const openInfo = (key, visibleTitle) => {
  const info = dishInfo[key];
  if (!info) return;

  infoTitle.textContent = visibleTitle || key;
  infoDescription.textContent = info[currentLanguage] || info.es;
  infoModal.classList.add("open");
  infoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeInfo = () => {
  infoModal.classList.remove("open");
  infoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const addInfoButtons = () => {
  document.querySelectorAll(".dish-card, .line-dish, .tile, .meat-hero, .menu-column li").forEach((element) => {
    const key = getDishKey(element);
    if (!dishInfo[key] || element.querySelector(".info-btn")) return;

    element.dataset.infoKey = key;
    const button = document.createElement("button");
    button.className = "info-btn";
    button.type = "button";
    button.textContent = "i";
    button.setAttribute("aria-label", "Información del plato");
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const textSource = element.matches("li") ? element : element.querySelector("h3");
      const visibleTitle = textSource?.childNodes[0]?.textContent.trim() || textSource?.textContent.trim();
      openInfo(key, visibleTitle);
    });
    element.appendChild(button);
  });
};

closeInfoButtons.forEach((button) => {
  button.addEventListener("click", closeInfo);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeInfo();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const toggleBackTop = () => {
  backTopButton.classList.toggle("visible", window.scrollY > 520);
};

window.addEventListener("scroll", toggleBackTop, { passive: true });

const showPanel = (panelName, shouldScroll = true) => {
  menuPanels.forEach((panel) => {
    panel.classList.toggle("panel-hidden", panel.dataset.panel !== panelName);
    panel.classList.toggle("active-panel", panel.dataset.panel === panelName);
  });

  panelButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.panelTarget === panelName);
  });

  localStorage.setItem("maitagarri-panel", panelName);

  if (shouldScroll) {
    document.querySelector(".qr-category-nav").scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

panelButtons.forEach((button) => {
  button.addEventListener("click", () => showPanel(button.dataset.panelTarget));
});

backTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

addInfoButtons();
setLanguage(currentLanguage);
showPanel(localStorage.getItem("maitagarri-panel") || "almuerzo", false);
toggleBackTop();
