let currentLang = "en";
let seconds = 0;
const timeLimit = 600;
const timerDisplay = document.getElementById("timer");
const form = document.getElementById("quizForm");
const resultBox = document.getElementById("result"); 

const translations = {
   en: {
    button: "Submit Answers",
    feedback: [
      "🌟 Perfect! You're ready for certification!",
      "💪 Great job! Just a bit more practice!",
      "🔄 You're on the right track. Keep going!",
      "📚 Don't give up! Review and try again."
    ],
    questions: [
       
      {
        q: "Which AWS service helps you monitor and collect log files from EC2 instances and on-premises servers?",
        a: "b",
        options: ["AWS CloudTrail", "Amazon CloudWatch Logs", "AWS Config", "AWS Trusted Advisor"]
      },
      {
        q: "What is the primary benefit of using Amazon S3 Intelligent-Tiering?",
        a: "c",
        options: ["It automatically encrypts data", "It replicates data across regions", "It optimizes storage costs by moving data between tiers", "It provides unlimited storage"]
      },
      {
        q: "Which AWS service allows you to define permissions using JSON-based policy documents?",
        a: "b",
        options: ["Amazon EC2", "AWS IAM", "AWS Lambda", "Amazon RDS"]
      },
      {
        q: "What is the purpose of an AWS Availability Zone?",
        a: "b",
        options: ["To provide global content delivery", "To isolate failures within a region", "To manage billing and cost allocation", "To monitor application performance"]
      },
      {
        q: "Which service would you use to decouple components of a microservices architecture?",
        a: "a",
        options: ["Amazon SQS", "Amazon EC2", "Amazon VPC", "AWS CloudFormation"]
      },
      {
        q: "What does the AWS Shared Responsibility Model state about customer responsibilities?",
        a: "c",
        options: ["AWS manages all aspects of security", "Customers are responsible for physical security", "Customers manage security 'in' the cloud", "Customers manage security 'of' the cloud"]
      },
      {
        q: "Which AWS service provides a managed NoSQL database?",
        a: "c",
        options: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"]
      },
      {
        q: "What is the benefit of using AWS Auto Scaling?",
        a: "b",
        options: ["It reduces storage costs", "It automatically adjusts compute capacity based on demand", "It encrypts data at rest", "It provides real-time monitoring"]
      },
      {
        q: "Which AWS service helps you define infrastructure as code?",
        a: "b",
        options: ["AWS CloudTrail", "AWS CloudFormation", "AWS Config", "Amazon Inspector"]
      },
      {
        q: "What is the main purpose of Amazon Route 53?",
        a: "c",
        options: ["To manage IAM roles", "To monitor network traffic", "To provide DNS and domain registration", "To host web applications"]
      },
      {
        q: "Which AWS service allows you to run containerized applications without managing servers?",
        a: "b",
        options: ["Amazon EC2", "Amazon ECS with Fargate", "AWS Lambda", "Amazon S3"]
      },
      {
        q: "What feature of Amazon RDS helps improve availability and fault tolerance?",
        a: "a",
        options: ["Multi-AZ deployments", "Elastic Load Balancing", "Auto Scaling", "CloudFront caching"]
      },
      {
        q: "Which AWS service helps you detect security vulnerabilities automatically?",
        a: "b",
        options: ["AWS Shield", "Amazon Inspector", "AWS WAF", "AWS Config"]
      },
      {
        q: "What is the purpose of AWS Organizations?",
        a: "b",
        options: ["To manage EC2 instances", "To consolidate billing and apply policies across accounts", "To monitor application performance", "To encrypt data at rest"]
      },
      {
        q: "Which service would you use to securely store and retrieve secrets like API keys?",
        a: "b",
        options: ["Amazon S3", "AWS Secrets Manager", "AWS IAM", "Amazon CloudWatch"]
      }
  ]
  },

  ro: {
    button: "Trimite răspunsurile",
    feedback: [
      "🌟 Perfect! Ești pregătită pentru certificare!",
      "💪 Foarte bine! Mai ai nevoie doar de puțin exercițiu!",
      "🔄 Ești pe drumul cel bun. Continuă!",
      "📚 Nu renunța! Recitește și încearcă din nou."
    ],
    questions: [
      {
        q: "Ce serviciu AWS te ajută să monitorizezi și să colectezi fișiere de log de la instanțe EC2 și servere locale?",
        a: "b",
        options: ["AWS CloudTrail", "Amazon CloudWatch Logs", "AWS Config", "AWS Trusted Advisor"]
      },
      {
        q: "Care este principalul beneficiu al utilizării Amazon S3 Intelligent-Tiering?",
        a: "c",
        options: ["Criptează automat datele", "Replică datele între regiuni", "Optimizează costurile de stocare mutând datele între niveluri", "Oferă stocare nelimitată"]
      },
      {
        q: "Ce serviciu AWS îți permite să definești permisiuni folosind documente JSON?",
        a: "b",
        options: ["Amazon EC2", "AWS IAM", "AWS Lambda", "Amazon RDS"]
      },
      {
        q: "Care este scopul unei zone de disponibilitate AWS (Availability Zone)?",
        a: "b",
        options: ["Pentru livrare globală de conținut", "Pentru a izola defecțiunile într-o regiune", "Pentru a gestiona facturarea și costurile", "Pentru a monitoriza performanța aplicației"]
      },
      {
        q: "Ce serviciu ai folosi pentru a decupla componentele unei arhitecturi de microservicii?",
        a: "a",
        options: ["Amazon SQS", "Amazon EC2", "Amazon VPC", "AWS CloudFormation"]
      },
      {
        q: "Ce afirmă modelul de responsabilitate partajată AWS despre responsabilitățile clientului?",
        a: "c",
        options: ["AWS gestionează toate aspectele securității", "Clientul este responsabil pentru securitatea fizică", "Clientul gestionează securitatea 'în' cloud", "Clientul gestionează securitatea 'a' cloudului"]
      },
      {
        q: "Ce serviciu AWS oferă o bază de date NoSQL gestionată?",
        a: "c",
        options: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"]
      },
      {
        q: "Care este beneficiul utilizării AWS Auto Scaling?",
        a: "b",
        options: ["Reduce costurile de stocare", "Ajustează automat capacitatea de calcul în funcție de cerere", "Criptează datele în repaus", "Oferă monitorizare în timp real"]
      },
      {
        q: "Ce serviciu AWS te ajută să definești infrastructura ca și cod?",
        a: "b",
        options: ["AWS CloudTrail", "AWS CloudFormation", "AWS Config", "Amazon Inspector"]
      },
      {
        q: "Care este scopul principal al Amazon Route 53?",
        a: "c",
        options: ["Pentru a gestiona rolurile IAM", "Pentru a monitoriza traficul de rețea", "Pentru a oferi DNS și înregistrare de domenii", "Pentru a găzdui aplicații web"]
      },
      {
        q: "Ce serviciu AWS îți permite să rulezi aplicații containerizate fără să gestionezi servere?",
        a: "b",
        options: ["Amazon EC2", "Amazon ECS cu Fargate", "AWS Lambda", "Amazon S3"]
      },
      {
        q: "Ce caracteristică a Amazon RDS îmbunătățește disponibilitatea și toleranța la erori?",
        a: "a",
        options: ["Implementări Multi-AZ", "Elastic Load Balancing", "Auto Scaling", "Caching cu CloudFront"]
      },
      {
        q: "Ce serviciu AWS te ajută să detectezi automat vulnerabilități de securitate?",
        a: "b",
        options: ["AWS Shield", "Amazon Inspector", "AWS WAF", "AWS Config"]
      },
      {
        q: "Care este scopul AWS Organizations?",
        a: "b",
        options: ["Pentru a gestiona instanțele EC2", "Pentru a consolida facturarea și a aplica politici între conturi", "Pentru a monitoriza performanța aplicației", "Pentru a cripta datele în repaus"]
      },
      {
        q: "Ce serviciu ai folosi pentru a stoca și accesa în siguranță secrete precum chei API?",
        a: "b",
        options: ["Amazon S3", "AWS Secrets Manager", "AWS IAM", "Amazon CloudWatch"]
      }
    ]
  },

  es: {
     button: "Enviar respuestas",
  feedback: [
    "🌟 ¡Perfecto! ¡Estás lista para la certificación!",
    "💪 ¡Buen trabajo! Solo necesitas un poco más de práctica.",
    "🔄 Vas por buen camino. ¡Sigue así!",
    "📚 ¡No te rindas! Revisa y vuelve a intentarlo."
  ],
  questions: [
    {
      q: "¿Qué servicio de AWS te ayuda a monitorear y recopilar archivos de registro de instancias EC2 y servidores locales?",
      a: "b",
      options: ["AWS CloudTrail", "Amazon CloudWatch Logs", "AWS Config", "AWS Trusted Advisor"]
    },
    {
      q: "¿Cuál es el beneficio principal de usar Amazon S3 Intelligent-Tiering?",
      a: "c",
      options: ["Encripta automáticamente los datos", "Replica datos entre regiones", "Optimiza los costos de almacenamiento moviendo datos entre niveles", "Proporciona almacenamiento ilimitado"]
    },
    {
      q: "¿Qué servicio de AWS te permite definir permisos usando documentos JSON?",
      a: "b",
      options: ["Amazon EC2", "AWS IAM", "AWS Lambda", "Amazon RDS"]
    },
    {
      q: "¿Cuál es el propósito de una zona de disponibilidad de AWS?",
      a: "b",
      options: ["Proporcionar entrega global de contenido", "Aislar fallos dentro de una región", "Gestionar facturación y costos", "Monitorear el rendimiento de aplicaciones"]
    },
    {
      q: "¿Qué servicio usarías para desacoplar componentes de una arquitectura de microservicios?",
      a: "a",
      options: ["Amazon SQS", "Amazon EC2", "Amazon VPC", "AWS CloudFormation"]
    },
    {
      q: "¿Qué establece el modelo de responsabilidad compartida de AWS sobre las responsabilidades del cliente?",
      a: "c",
      options: ["AWS gestiona todos los aspectos de seguridad", "El cliente es responsable de la seguridad física", "El cliente gestiona la seguridad 'en' la nube", "El cliente gestiona la seguridad 'de' la nube"]
    },
     {
      q: "¿Qué servicio de AWS proporciona una base de datos NoSQL gestionada?",
      a: "c",
      options: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"]
    },
    {
      q: "¿Cuál es el beneficio de usar AWS Auto Scaling?",
      a: "b",
      options: ["Reduce los costos de almacenamiento", "Ajusta automáticamente la capacidad de cómputo según la demanda", "Encripta datos en reposo", "Proporciona monitoreo en tiempo real"]
    },
    {
      q: "¿Qué servicio de AWS te ayuda a definir infraestructura como código?",
      a: "b",
      options: ["AWS CloudTrail", "AWS CloudFormation", "AWS Config", "Amazon Inspector"]
    },
    {
      q: "¿Cuál es el propósito principal de Amazon Route 53?",
      a: "c",
      options: ["Gestionar roles IAM", "Monitorear tráfico de red", "Proporcionar DNS y registro de dominios", "Alojar aplicaciones web"]
    },
    {
      q: "¿Qué servicio de AWS te permite ejecutar aplicaciones en contenedores sin gestionar servidores?",
      a: "b",
      options: ["Amazon EC2", "Amazon ECS con Fargate", "AWS Lambda", "Amazon S3"]
    },
    {
      q: "¿Qué característica de Amazon RDS mejora la disponibilidad y tolerancia a fallos?",
      a: "a",
      options: ["Implementaciones Multi-AZ", "Elastic Load Balancing", "Auto Scaling", "Caché con CloudFront"]
    },
    {
      q: "¿Qué servicio de AWS te ayuda a detectar vulnerabilidades de seguridad automáticamente?",
      a: "b",
      options: ["AWS Shield", "Amazon Inspector", "AWS WAF", "AWS Config"]
    },
    {
      q: "¿Cuál es el propósito de AWS Organizations?",
      a: "b",
      options: ["Gestionar instancias EC2", "Consolidar facturación y aplicar políticas entre cuentas", "Monitorear rendimiento de aplicaciones", "Encriptar datos en reposo"]
    },
    {
      q: "¿Qué servicio usarías para almacenar y recuperar secretos como claves API de forma segura?",
      a: "b",
      options: ["Amazon S3", "AWS Secrets Manager", "AWS IAM", "Amazon CloudWatch"]
    }  
   ]
 },

  fr: {
     button: "Soumettre les réponses",
  feedback: [
    "🌟 Parfait ! Tu es prête pour la certification !",
    "💪 Très bon travail ! Encore un peu de pratique !",
    "🔄 Tu es sur la bonne voie. Continue comme ça !",
    "📚 Ne baisse pas les bras ! Révise et réessaie."
  ],
  questions: [
    {
      q: "Quel service AWS vous aide à surveiller et à collecter les fichiers journaux des instances EC2 et des serveurs sur site ?",
      a: "b",
      options: ["AWS CloudTrail", "Amazon CloudWatch Logs", "AWS Config", "AWS Trusted Advisor"]
    },
    {
      q: "Quel est le principal avantage d'utiliser Amazon S3 Intelligent-Tiering ?",
      a: "c",
      options: ["Il chiffre automatiquement les données", "Il réplique les données entre les régions", "Il optimise les coûts de stockage en déplaçant les données entre les niveaux", "Il offre un stockage illimité"]
    },
    {
      q: "Quel service AWS permet de définir des autorisations à l'aide de documents JSON ?",
      a: "b",
      options: ["Amazon EC2", "AWS IAM", "AWS Lambda", "Amazon RDS"]
    },
    {
      q: "Quel est le but d'une zone de disponibilité AWS ?",
      a: "b",
      options: ["Fournir une diffusion mondiale de contenu", "Isoler les pannes dans une région", "Gérer la facturation et les coûts", "Surveiller les performances des applications"]
    },
    {
      q: "Quel service utiliseriez-vous pour découpler les composants d'une architecture de microservices ?",
      a: "a",
      options: ["Amazon SQS", "Amazon EC2", "Amazon VPC", "AWS CloudFormation"]
    },
    {
      q: "Que dit le modèle de responsabilité partagée d'AWS concernant les responsabilités du client ?",
      a: "c",
      options: ["AWS gère tous les aspects de la sécurité", "Le client est responsable de la sécurité physique", "Le client gère la sécurité 'dans' le cloud", "Le client gère la sécurité 'du' cloud"]
    },
    {
      q: "Quel service AWS fournit une base de données NoSQL gérée ?",
      a: "c",
      options: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"]
    },
    {
      q: "Quel est l'avantage d'utiliser AWS Auto Scaling ?",
      a: "b",
      options: ["Il réduit les coûts de stockage", "Il ajuste automatiquement la capacité de calcul en fonction de la demande", "Il chiffre les données au repos", "Il fournit une surveillance en temps réel"]
    },
    {
      q: "Quel service AWS vous aide à définir l'infrastructure en tant que code ?",
      a: "b",
      options: ["AWS CloudTrail", "AWS CloudFormation", "AWS Config", "Amazon Inspector"]
    },
    {
      q: "Quel est le but principal d'Amazon Route 53 ?",
      a: "c",
      options: ["Gérer les rôles IAM", "Surveiller le trafic réseau", "Fournir DNS et enregistrement de domaine", "Héberger des applications web"]
    },
    {
      q: "Quel service AWS permet d'exécuter des applications conteneurisées sans gérer de serveurs ?",
      a: "b",
      options: ["Amazon EC2", "Amazon ECS avec Fargate", "AWS Lambda", "Amazon S3"]
    },
    {
      q: "Quelle fonctionnalité d'Amazon RDS améliore la disponibilité et la tolérance aux pannes ?",
      a: "a",
      options: ["Déploiements Multi-AZ", "Elastic Load Balancing", "Auto Scaling", "Mise en cache avec CloudFront"]
    },
    {
      q: "Quel service AWS vous aide à détecter automatiquement les vulnérabilités de sécurité ?",
      a: "b",
      options: ["AWS Shield", "Amazon Inspector", "AWS WAF", "AWS Config"]
    },
    {
      q: "Quel est le but d'AWS Organizations ?",
      a: "b",
      options: ["Gérer les instances EC2", "Consolider la facturation et appliquer des politiques entre comptes", "Surveiller les performances des applications", "Chiffrer les données au repos"]
    },
    {
      q: "Quel service utiliseriez-vous pour stocker et récupérer en toute sécurité des secrets comme des clés API ?",
      a: "b",
      options: ["Amazon S3", "AWS Secrets Manager", "AWS IAM", "Amazon CloudWatch"]
    }
   ]
  }
};


// ✅ Cronometru
function updateTimer() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerDisplay.textContent = `⏱️ ${mins}:${secs}`;

  if (seconds >= timeLimit) {
    clearInterval(timerInterval);
    form.querySelectorAll("input").forEach(i => i.disabled = true);
    document.getElementById("submitBtn").disabled = true;
    resultBox.textContent = "⏳ Time's up! You didn't finish in time.";
    resultBox.style.background = "linear-gradient(135deg, #ff6b6b, #c0392b)";
    resultBox.style.color = "#fff";
    return;
  }

  seconds++;
}

let timerInterval = setInterval(updateTimer, 1000);

// ✅ Schimbare temă
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ✅ Schimbare limbă
document.getElementById("lang-select").addEventListener("change", (e) => {
  currentLang = e.target.value;
  generateQuiz(currentLang);
});

// ✅ Generare quiz
function generateQuiz(lang) {
  const t = translations[lang] || translations.en;
  form.innerHTML = "";

  t.questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML =
      `<p>${index + 1}. ${item.q}</p>` +
      item.options.map((opt, i) =>
        `<label><input type="radio" name="q${index}" value="${String.fromCharCode(97 + i)}"> ${opt}</label><br>`
      ).join("");
    form.appendChild(div);
  });

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.textContent = t.button;
  submitBtn.disabled = false;
}

// ✅ Submit
document.getElementById("submitBtn").addEventListener("click", () => {
  const t = translations[currentLang];
  let score = 0;

  t.questions.forEach((item, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === item.a) score++;
  });

  let feedback = "";
  if (score === t.questions.length) feedback = t.feedback[0];
  else if (score >= 12) feedback = t.feedback[1];
  else if (score >= 8) feedback = t.feedback[2];
  else feedback = t.feedback[3];

  resultBox.textContent = `You scored ${score}/${t.questions.length}. ${feedback}`;
  clearInterval(timerInterval);
});

// ✅ Export PDF
document.getElementById("export-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const t = translations[currentLang];

  doc.setFontSize(16);
  doc.text("AWS Quiz Results", 10, 20);

  let y = 30;
  t.questions.forEach((item, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const answer = selected ? selected.value : "—";
    const correct = item.a === answer ? "✔️" : "❌";

    doc.setFontSize(12);
    doc.text(`${i + 1}. ${item.q}`, 10, y);
    y += 6;
    doc.text(`Your answer: ${answer} ${correct}`, 10, y);
    y += 10;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save(`aws_quiz_${currentLang}.pdf`);
});

// ✅ Inițializare
generateQuiz(currentLang);