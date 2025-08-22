const weeks = {
  en: {
    1: [
      { name: "Monday", activity: "Write in a journal: 'Why do I want AWS certification?'", quote: "Failure does not define us..." },
      { name: "Tuesday", activity: "Watch a motivational video about failure", quote: "Those who succeeded..." },
      { name: "Wednesday", activity: "Listen to a podcast about cloud computing", quote: "The mind is like a muscle..." },
      { name: "Thursday", activity: "Read an article about S3", quote: "Curiosity is the fuel..." },
      { name: "Friday", activity: "Take a simple quiz", quote: "You don't have to be great..." },
      { name: "Saturday", activity: "Write a personal prayer", quote: "When you pray..." },
      { name: "Sunday", activity: "Weekly reflection", quote: "Celebrate every step..." }
    ],
    2: [
      { name: "Monday", activity: "Recap: What is cloud computing?", quote: "Knowledge is power..." },
      { name: "Tuesday", activity: "Study EC2, S3, IAM", quote: "Every small step..." },
      {
        name: "Wednesday",
        activity: "Mini-test on services",
        quote: "Success is the sum...",
        button: {
          label: "🧪 Try the test",
          link: "assets/test1/test.html"
        }
      },
      { name: "Thursday", activity: "Create a mindmap", quote: "Organization is not limitation..." },
      { name: "Friday", activity: "Real AWS scenario", quote: "Learning is an adventure..." },
      { name: "Saturday", activity: "Reward + log your progress", quote: "Celebrate every step..." },
      { name: "Sunday", activity: "Rest + reflection", quote: "You're closer than you think..." }
    ],
    3: [
      { name: "Monday", activity: "Redo your study plan", quote: "A dream written down becomes a plan..." },
      { name: "Tuesday", activity: "Study module 1", quote: "Don't wait for motivation..." },
      { name: "Wednesday", activity: "Partial evaluation test", quote: "Don't fear mistakes..." },
      { name: "Thursday", activity: "Review your mistakes", quote: "Every error is a lesson..." },
      { name: "Friday", activity: "Create a motivational poster", quote: "You are the architect..." },
      {
        name: "Saturday", activity: "Mini-test on services", quote: "Keep moving forward...",  button: {
          label: "🧪 Try the test",
          link: "assets/test2/test2.html"
        }
      },
      { name: "Sunday", activity: "Celebration 🎉", quote: "You've survived 100% of your hardest days..."}
    ]
  },

  ro: {
    1: [
      { name: "Luni", activity: "Scrie în jurnal: 'De ce vreau certificarea AWS?'", quote: "Eșecul nu ne definește..." },
      { name: "Marți", activity: "Urmărește un videoclip motivațional despre eșec", quote: "Cei care au reușit..." },
      { name: "Miercuri", activity: "Ascultă un podcast despre cloud computing", quote: "Mintea este ca un mușchi..." },
      { name: "Joi", activity: "Citește un articol despre S3", quote: "Curiozitatea este combustibilul..." },
      { name: "Vineri", activity: "Fă un test simplu", quote: "Nu trebuie să fii grozav ca să începi..." },
      { name: "Sâmbătă", activity: "Scrie o rugăciune personală", quote: "Când te rogi..." },
      { name: "Duminică", activity: "Reflecție săptămânală", quote: "Celebrează fiecare pas..." }
    ],
    2: [
      { name: "Luni", activity: "Recapitulare: Ce este cloud computing?", quote: "Cunoașterea este putere..." },
      { name: "Marți", activity: "Studiază EC2, S3, IAM", quote: "Fiecare pas mic contează..." },
      {
        name: "Miercuri",
        activity: "Mini-test despre servicii",
        quote: "Succesul este suma...",
        button: {
          label: "🧪 Încearcă testul",
          link: "assets/test1/test.html"
        }
      },
      { name: "Joi", activity: "Creează o hartă mentală", quote: "Organizarea nu este o limitare..." },
      { name: "Vineri", activity: "Scenariu real AWS", quote: "Învățarea este o aventură..." },
      { name: "Sâmbătă", activity: "Recompensă + notează progresul", quote: "Celebrează fiecare pas..." },
      { name: "Duminică", activity: "Odihnă + reflecție", quote: "Ești mai aproape decât crezi..." }
    ],
    3: [
      { name: "Luni", activity: "Refă planul de studiu", quote: "Un vis scris devine un plan..." },
      { name: "Marți", activity: "Studiază modulul 1", quote: "Nu aștepta motivația..." },
      { name: "Miercuri", activity: "Test de evaluare parțială", quote: "Nu te teme de greșeli..." },
      { name: "Joi", activity: "Revizuiește greșelile", quote: "Fiecare eroare este o lecție..." },
      { name: "Vineri", activity: "Creează un poster motivațional", quote: "Ești arhitectul propriei tale vieți..." },
      {
        name: "Sâmbătă", activity: "Mini-test despre servicii", quote: "Continuă să mergi înainte...",
        button: {
          label: "🧪 Încearcă testul",
          link: "assets/test2/test2.html"
        } },
      { name: "Duminică", activity: "Sărbătoare 🎉", quote: "Ai supraviețuit 100% din cele mai grele zile..." }
    ]
  },
  
  es: {
    1: [
      { name: "Lunes", activity: "Escribe en un diario: '¿Por qué quiero la certificación AWS?'", quote: "El fracaso no nos define..." },
      { name: "Martes", activity: "Mira un video motivacional sobre el fracaso", quote: "Aquellos que tuvieron éxito..." },
      { name: "Miércoles", activity: "Escucha un pódcast sobre computación en la nube", quote: "La mente es como un músculo..." },
      { name: "Jueves", activity: "Lee un artículo sobre S3", quote: "La curiosidad es el combustible..." },
      { name: "Viernes", activity: "Haz un cuestionario sencillo", quote: "No tienes que ser genial para empezar..." },
      { name: "Sábado", activity: "Escribe una oración personal", quote: "Cuando rezas..." },
      { name: "Domingo", activity: "Reflexión semanal", quote: "Celebra cada paso..." }
    ],
    2: [
      { name: "Lunes", activity: "Resumen: ¿Qué es la computación en la nube?", quote: "El conocimiento es poder..." },
      { name: "Martes", activity: "Estudia EC2, S3, IAM", quote: "Cada pequeño paso cuenta..." },
      {
        name: "Miércoles",
        activity: "Mini test sobre servicios",
        quote: "El éxito es la suma...",
        button: {
          label: "🧪 Prueba el test",
          llink: "assets/test1/test.html"
        }
      },
      { name: "Jueves", activity: "Crea un mapa mental", quote: "La organización no es una limitación..." },
      { name: "Viernes", activity: "Escenario real de AWS", quote: "Aprender es una aventura..." },
      { name: "Sábado", activity: "Recompensa + registra tu progreso", quote: "Celebra cada paso..." },
      { name: "Domingo", activity: "Descanso + reflexión", quote: "Estás más cerca de lo que crees..." }
    ],
    3: [
      { name: "Lunes", activity: "Rehaz tu plan de estudio", quote: "Un sueño escrito se convierte en un plan..." },
      { name: "Martes", activity: "Estudia el módulo 1", quote: "No esperes motivación..." },
      { name: "Miércoles", activity: "Evaluación parcial", quote: "No temas cometer errores..." },
      { name: "Jueves", activity: "Revisa tus errores", quote: "Cada error es una lección..." },
      { name: "Viernes", activity: "Crea un cartel motivacional", quote: "Eres el arquitecto de tu propia vida..." },
      { name: "Sábado", activity: "Mini test sobre servicios", quote: "Sigue avanzando...", button: {
          label: "🧪 Prueba el test",
          llink: "assets/test2/test2.html"
        } },
      { name: "Domingo", activity: "Celebración 🎉", quote: "Has sobrevivido al 100% de tus días más difíciles..." }
    ]
  },
  
  fr: {
    1: [
      { name: "Lundi", activity: "Écris dans un journal : 'Pourquoi est-ce que je veux la certification AWS ?'", quote: "L’échec ne nous définit pas..." },
      { name: "Mardi", activity: "Regarde une vidéo motivationnelle sur l’échec", quote: "Ceux qui ont réussi..." },
      { name: "Mercredi", activity: "Écoute un podcast sur le cloud computing", quote: "L’esprit est comme un muscle..." },
      { name: "Jeudi", activity: "Lis un article sur S3", quote: "La curiosité est le carburant..." },
      { name: "Vendredi", activity: "Fais un quiz simple", quote: "Tu n’as pas besoin d’être génial pour commencer..." },
      { name: "Samedi", activity: "Écris une prière personnelle", quote: "Quand tu pries..." },
      { name: "Dimanche", activity: "Réflexion hebdomadaire", quote: "Célèbre chaque étape..." }
    ],
    2: [
      { name: "Lundi", activity: "Récapitulatif : Qu’est-ce que le cloud computing ?", quote: "Le savoir est le pouvoir..." },
      { name: "Mardi", activity: "Étudie EC2, S3, IAM", quote: "Chaque petit pas compte..." },
      {
        name: "Mercredi",
        activity: "Mini-test sur les services",
        quote: "Le succès est la somme...",
        button: {
          label: "🧪 Essaye le test",
          link: "assets/test1/test.html"
        }
      },
      { name: "Jeudi", activity: "Crée une carte mentale", quote: "L’organisation n’est pas une limitation..." },
      { name: "Vendredi", activity: "Scénario réel AWS", quote: "Apprendre est une aventure..." },
      { name: "Samedi", activity: "Récompense + note tes progrès", quote: "Célèbre chaque étape..." },
      { name: "Dimanche", activity: "Repos + réflexion", quote: "Tu es plus proche que tu ne le crois..." }
    ],
    3: [
      { name: "Lundi", activity: "Refais ton plan d’étude", quote: "Un rêve écrit devient un plan..." },
      { name: "Mardi", activity: "Étudie le module 1", quote: "N’attends pas la motivation..." },
      { name: "Mercredi", activity: "Test d’évaluation partielle", quote: "N’aie pas peur des erreurs..." },
      { name: "Jeudi", activity: "Revois tes erreurs", quote: "Chaque erreur est une leçon..." },
      { name: "Vendredi", activity: "Crée une affiche motivationnelle", quote: "Tu es l’architecte de ta propre vie..." },
      { name: "Samedi", activity: "Mini-test sur les services", quote: "Continue d’avancer...", button: {
          label: "🧪 Essaye le test",
          link: "assets/test2/test2.html"
        } },
      { name: "Dimanche", activity: "Célébration 🎉", quote: "Tu as survécu à 100% de tes jours les plus difficiles..." }
    ]
  }
};

const languageSelect = document.getElementById("language-select");
const weekSelect = document.getElementById("week-select");
const calendar = document.getElementById("calendar");
const dailyQuote = document.getElementById("daily-quote");

// Multilingual motivational quotes
const motivationalQuotes = {
  en: [
    "You don't have to be great to start, but you have to start to be great.",
    "Success is the sum of small efforts repeated day by day.",
    "You've survived 100% of your hardest days. Keep going!",
    "Every small step brings you closer to your dream.",
    "Don't wait for motivation. Create it.",
    "You are the architect of your own life.",
    "Mistakes are lessons in disguise.",
    "Courage is not the absence of fear, but action despite it.",
    "Start where you are. Use what you have. Do what you can.",
    "Failure is just a temporary stop on the road to success."
  ],
  ro: [
    "Nu trebuie să fii grozav ca să începi, dar trebuie să începi ca să devii grozav.",
    "Succesul este suma eforturilor mici repetate zi de zi.",
    "Ai supraviețuit 100% din cele mai grele zile. Continuă!",
    "Fiecare pas mic te apropie de visul tău.",
    "Nu aștepta motivația. Creeaz-o.",
    "Ești arhitectul propriei tale vieți.",
    "Greșelile sunt lecții deghizate.",
    "Curajul nu înseamnă absența fricii, ci acțiunea în ciuda ei.",
    "Începe de unde ești. Folosește ce ai. Fă ce poți.",
    "Eșecul este doar o oprire temporară pe drumul către succes."
  ],
  es: [
    "No tienes que ser genial para empezar, pero tienes que empezar para ser genial.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Has sobrevivido el 100% de tus días más difíciles. ¡Sigue adelante!",
    "Cada pequeño paso te acerca a tu sueño.",
    "No esperes motivación. Créala.",
    "Eres el arquitecto de tu propia vida.",
    "Los errores son lecciones disfrazadas.",
    "El coraje no es la ausencia de miedo, sino la acción a pesar de él.",
    "Empieza donde estás. Usa lo que tienes. Haz lo que puedas.",
    "El fracaso es solo una parada temporal en el camino al éxito."
  ],
  fr: [
    "Tu n'as pas besoin d'être génial pour commencer, mais tu dois commencer pour être génial.",
    "Le succès est la somme de petits efforts répétés jour après jour.",
    "Tu as survécu à 100% de tes jours les plus difficiles. Continue !",
    "Chaque petit pas te rapproche de ton rêve.",
    "N'attends pas la motivation. Crée-la.",
    "Tu es l'architecte de ta propre vie.",
    "Les erreurs sont des leçons déguisées.",
    "Le courage n'est pas l'absence de peur, mais l'action malgré elle.",
    "Commence là où tu es. Utilise ce que tu as. Fais ce que tu peux.",
    "L'échec n'est qu'une étape temporaire sur la route du succès."
  ]
};

// Display a random quote in the selected language
function showRandomQuote() {
  const selectedLang = languageSelect.value;
  const quotes = motivationalQuotes[selectedLang] || motivationalQuotes.en;
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  dailyQuote.textContent = `"${quote}"`;
}

// Button for a new quote
document.querySelector(".controls").appendChild(Object.assign(
  document.createElement("button"),
  {
    textContent: "🔁 New Quote",
    onclick: showRandomQuote
  }
));

// Display the week in the selected language
function renderWeek(weekNum) {
  const lang = languageSelect.value;
  const weekData = weeks[lang]?.[weekNum] || weeks["en"]?.[weekNum];

  calendar.innerHTML = "";
  if (!Array.isArray(weekData)) {
    calendar.innerHTML = "<p>No data available for this week.</p>";
    return;
  }

  // Citatul zilei curente
  const todayIndex = new Date().getDay(); // 0 = Sunday
  const todayQuote = weekData[todayIndex === 0 ? 6 : todayIndex - 1]?.quote || "";
  dailyQuote.textContent = `"${todayQuote}"`;

  weekData.forEach((day, index) => {
    const card = document.createElement("div");
    card.className = "day-card";
    card.innerHTML = `
      <h3>${day.name}</h3>
      <p><strong>Activity:</strong> ${day.activity}</p>
      <label>
        <input type="checkbox" id="check${lang}-${weekNum}-${index}">
        Marked as completed
      </label>
      <textarea id="note${lang}-${weekNum}-${index}" placeholder="Write what you felt today..."></textarea>
    `;

    if (day.button) {
      const testBtn = document.createElement("button");
      testBtn.textContent = day.button.label;
      testBtn.onclick = () => window.location.href = day.button.link;
      card.appendChild(testBtn);
    }

    calendar.appendChild(card);

    const noteEl = document.getElementById(`note${lang}-${weekNum}-${index}`);
    const checkEl = document.getElementById(`check${lang}-${weekNum}-${index}`);

    noteEl.value = localStorage.getItem(`note${lang}-${weekNum}-${index}`) || "";
    checkEl.checked = localStorage.getItem(`check${lang}-${weekNum}-${index}`) === "true";

    noteEl.addEventListener("input", e => {
      localStorage.setItem(`note${lang}-${weekNum}-${index}`, e.target.value);
    });

    checkEl.addEventListener("change", e => {
      localStorage.setItem(`check${lang}-${weekNum}-${index}`, e.target.checked);
    });
  });
}

// SWeek selection
weekSelect.addEventListener("change", () => {
  renderWeek(weekSelect.value);
  showRandomQuote();
});

// Language selection
document.getElementById("language-select").addEventListener("click", () => {
  renderWeek(weekSelect.value);
  showRandomQuote();
});

// Dark theme
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Reset progress
function resetProgress() {
  Object.keys(weeks).forEach(lang => {
    Object.keys(weeks[lang]).forEach(weekNum => {
      weeks[lang][weekNum].forEach((_, i) => {
        localStorage.removeItem(`note${lang}-${weekNum}-${i}`);
        localStorage.removeItem(`check${lang}-${weekNum}-${i}`);
      });
    });
  });
  renderWeek(weekSelect.value);
  showRandomQuote();
}


// Export PDF
document.getElementById("export-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const lang = languageSelect.value;
  const weekNum = weekSelect.value;
  const days = weeks[lang]?.[weekNum] || weeks["en"]?.[weekNum];

  doc.setFontSize(16);
  doc.text(`The Rise Calendar – Week ${weekNum}`, 10, 20);

  let y = 30;
  days.forEach((day, i) => {
    const note = localStorage.getItem(`note${lang}-${weekNum}-${i}`) || "—";
    const checked = localStorage.getItem(`check${lang}-${weekNum}-${i}`) === "true" ? "✔️" : "❌";

    doc.setFontSize(12);
    doc.text(`${day.name} (${checked})`, 10, y);
    y += 6;
    doc.text(`Activity: ${day.activity}`, 10, y);
    y += 6;
    doc.text(`Note: ${note}`, 10, y);
    y += 10;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save(`rise_calendar_week_${weekNum}_${lang}.pdf`);
});

// Ininialization
renderWeek(weekSelect.value);
showRandomQuote();



const translations = {
  en: {
    title: "AWS Cloud Practitioner Motivation Calendar",
    subtitle: "Your daily guide to stay motivated and pass the AWS exam",
    footer: "“You survived yesterday. Today is a new chance.”",
    quotes: [
      "Failure is just the first step to mastery.",
      "You are capable of more than you know.",
      "Every setback is a setup for a comeback.",
      "Small progress is still progress.",
      "Your effort today builds your success tomorrow.",
      "Keep going. You're closer than you think.",
      "Believe in your ability to grow."
    ]
  },
  ro: {
    title: "Calendar Motivațional AWS Cloud Practitioner",
    subtitle: "Ghidul tău zilnic pentru a rămâne motivat și a promova examenul AWS",
    footer: "„Ai supraviețuit ieri. Azi e o nouă șansă.”",
    quotes: [
      "Eșecul este doar primul pas spre măiestrie.",
      "Ești capabil de mai mult decât crezi.",
      "Fiecare obstacol e o rampă pentru revenire.",
      "Progresul mic e tot progres.",
      "Efortul de azi construiește succesul de mâine.",
      "Continuă. Ești mai aproape decât crezi.",
      "Crede în capacitatea ta de a evolua."
    ]
  },
  es: {
    title: "Calendario Motivacional AWS Cloud Practitioner",
    subtitle: "Tu guía diaria para mantenerte motivado y aprobar el examen AWS",
    footer: "“Sobreviviste ayer. Hoy es una nueva oportunidad.”",
    quotes: [
      "El fracaso es solo el primer paso hacia el dominio.",
      "Eres capaz de más de lo que crees.",
      "Cada revés es una preparación para el regreso.",
      "El progreso pequeño sigue siendo progreso.",
      "Tu esfuerzo hoy construye tu éxito mañana.",
      "Sigue adelante. Estás más cerca de lo que crees.",
      "Cree en tu capacidad de crecer."
    ]
  },
  fr: {
    title: "Calendrier de Motivation AWS Cloud Practitioner",
    subtitle: "Votre guide quotidien pour rester motivé et réussir l'examen AWS",
    footer: "“Tu as survécu hier. Aujourd'hui est une nouvelle chance.”",
    quotes: [
      "L'échec est juste le premier pas vers la maîtrise.",
      "Tu es capable de plus que tu ne le crois.",
      "Chaque revers prépare un retour.",
      "Un petit progrès est toujours un progrès.",
      "Ton effort aujourd'hui construit ton succès de demain.",
      "Continue. Tu es plus proche que tu ne le penses.",
      "Crois en ta capacité à évoluer."
    ]
  }
};

let currentLang = "en";

function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  document.querySelector("h1").textContent = t.title;
  document.querySelector(".subtitle").textContent = t.subtitle;
  document.querySelector(".footer-note").textContent = t.footer;

   // Show today’s quote
  const dayIndex = new Date().getDay() - 1;
  document.getElementById("daily-quote").textContent = t.quotes[dayIndex] || "";

  // Redisplay the current week with the new language
  const selectedWeek = document.getElementById("week-select").value;
  renderWeek(selectedWeek);

}

const availableLangs = ["en", "ro", "es", "fr"];
let langIndex = 0;

document.getElementById("language-select").addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  updateLanguage(selectedLang);
});

document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);
});
