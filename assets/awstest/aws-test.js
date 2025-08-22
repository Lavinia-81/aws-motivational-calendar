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
    q: "Which AWS service is used for object storage?",
    a: "c",
    options: ["Amazon EBS", "Amazon EC2", "Amazon S3", "Amazon RDS"]
  },
  {
    q: "Which responsibility model defines security in AWS?",
    a: "c",
    options: [
      "AWS is responsible for everything",
      "The customer is responsible for everything",
      "Shared responsibility",
      "None of the above"
    ]
  },
  {
    q: "Which service provides managed relational databases?",
    a: "b",
    options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon S3"]
  },
  {
    q: "Which tool helps estimate AWS costs?",
    a: "a",
    options: ["AWS Cost Explorer", "AWS CloudTrail", "AWS IAM", "AWS CloudWatch"]
  },
  {
    q: "Which service monitors AWS resources?",
    a: "b",
    options: ["AWS CloudFormation", "AWS CloudWatch", "AWS Config", "AWS Trusted Advisor"]
  },
  {
    q: "What type of cloud does AWS offer?",
    a: "a",
    options: ["Public", "Private", "Hybrid", "On-premises"]
  },
  {
    q: "Which service allows serverless code execution?",
    a: "b",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "AWS Elastic Beanstalk"]
  },
  {
    q: "Which service provides authentication and access control?",
    a: "a",
    options: ["AWS IAM", "AWS Shield", "AWS WAF", "AWS KMS"]
  },
  {
    q: "Which service delivers global content?",
    a: "b",
    options: ["Amazon S3", "Amazon CloudFront", "Amazon Route 53", "AWS Global Accelerator"]
  },
  {
    q: "Which service protects against DDoS attacks?",
    a: "a",
    options: ["AWS Shield", "AWS IAM", "AWS CloudTrail", "AWS Config"]
  },
  {
    q: "Which service automates infrastructure as code?",
    a: "a",
    options: ["AWS CloudFormation", "AWS CloudTrail", "AWS Config", "AWS CodeDeploy"]
  },
  {
    q: "Which service analyzes data at scale?",
    a: "b",
    options: ["Amazon Aurora", "Amazon Redshift", "Amazon RDS", "Amazon S3"]
  },
  {
    q: "Which service creates virtual networks?",
    a: "a",
    options: ["Amazon VPC", "Amazon EC2", "Amazon S3", "AWS IAM"]
  },
  {
    q: "Which service provides NoSQL databases?",
    a: "c",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"]
  },
  {
    q: "Which service offers best practice recommendations?",
    a: "a",
    options: ["AWS Trusted Advisor", "AWS CloudTrail", "AWS CloudWatch", "AWS Config"]
  }
]
  },

  ro: {
    button: "Trimite răspunsurile",
    feedback: [
      "🌟 Perfect! Ești gata de certificare!",
      "💪 Foarte bine! Mai exersează puțin!",
      "🔄 Ești pe drumul cel bun. Continuă!",
      "📚 Nu renunța! Reia conceptele și revino."
    ],
    questions: [
  {
    q: "Ce serviciu AWS este folosit pentru stocarea obiectelor?",
    a: "c",
    options: ["Amazon EBS", "Amazon EC2", "Amazon S3", "Amazon RDS"]
  },
  {
    q: "Ce model de responsabilitate definește securitatea în AWS?",
    a: "c",
    options: ["AWS este responsabil pentru tot", "Clientul este responsabil pentru tot",
      "Responsabilitate partajată", "Niciunul"]
  },
  {
    q: "Ce serviciu oferă baze de date relaționale gestionate?",
    a: "b",
    options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon S3"]
  },
  {
    q: "Ce instrument ajută la estimarea costurilor?",
    a: "a",
    options: ["AWS Cost Explorer", "AWS CloudTrail", "AWS IAM", "AWS CloudWatch"]
  },
  {
    q: "Ce serviciu monitorizează resursele AWS?",
    a: "b",
    options: ["AWS CloudFormation", "AWS CloudWatch", "AWS Config", "AWS Trusted Advisor"]
  },
  {
    q: "Ce tip de cloud oferă AWS?",
    a: "a",
    options: ["Public", "Privat", "Hibrid", "Local"]
  },
  {
    q: "Ce serviciu permite rularea codului fără servere?",
    a: "b",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "AWS Elastic Beanstalk"]
  },
  {
    q: "Ce serviciu oferă autentificare și control al accesului?",
    a: "a",
    options: ["AWS IAM", "AWS Shield", "AWS WAF", "AWS KMS"]
  },
  {
    q: "Ce serviciu livrează conținut global?",
    a: "b",
    options: ["Amazon S3", "Amazon CloudFront", "Amazon Route 53", "AWS Global Accelerator"]
  },
  {
    q: "Ce serviciu protejează împotriva atacurilor DDoS?",
    a: "a",
    options: ["AWS Shield", "AWS IAM", "AWS CloudTrail", "AWS Config"]
  },
  {
    q: "Ce serviciu automatizează infrastructura ca un cod?",
    a: "a",
    options: ["AWS CloudFormation", "AWS CloudTrail", "AWS Config", "AWS CodeDeploy"]
  },
  {
    q: "Ce serviciu analizează date la scară largă?",
    a: "b",
    options: ["Amazon Aurora", "Amazon Redshift", "Amazon RDS", "Amazon S3"]
  },
  {
    q: "Ce serviciu creează rețele virtuale?",
    a: "a",
    options: ["Amazon VPC", "Amazon EC2", "Amazon S3", "AWS IAM"]
  },
  {
    q: "Ce serviciu oferă baze de date NoSQL?",
    a: "c",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"]
  },
  {
    q: "Ce serviciu oferă recomandări de bune practici?",
    a: "a",
    options: ["AWS Trusted Advisor", "AWS CloudTrail", "AWS CloudWatch", "AWS Config"]
  }
]
  },

  es: {
    button: "Enviar respuestas",
    feedback: [
      "🌟 ¡Perfecto! ¡Estás listo para la certificación!",
      "💪 ¡Muy bien! ¡Solo un poco más de práctica!",
      "🔄 Vas por buen camino. ¡Sigue así!",
      "📚 ¡No te rindas! Revisa los conceptos y vuelve a intentarlo."
    ],
    questions: [
  {
    q: "¿Qué servicio de AWS se utiliza para el almacenamiento de objetos?",
    a: "c",
    options: ["Amazon EBS", "Amazon EC2", "Amazon S3", "Amazon RDS"]
  },
  {
    q: "¿Qué modelo de responsabilidad define la seguridad en AWS?",
    a: "c",
    options: [
      "AWS es responsable de todo",
      "El cliente es responsable de todo",
      "Responsabilidad compartida",
      "Ninguna de las anteriores"
    ]
  },
  {
    q: "¿Qué servicio proporciona bases de datos relacionales gestionadas?",
    a: "b",
    options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon S3"]
  },
  {
    q: "¿Qué herramienta ayuda a estimar los costos en AWS?",
    a: "a",
    options: ["AWS Cost Explorer", "AWS CloudTrail", "AWS IAM", "AWS CloudWatch"]
  },
  {
    q: "¿Qué servicio monitorea los recursos de AWS?",
    a: "b",
    options: ["AWS CloudFormation", "AWS CloudWatch", "AWS Config", "AWS Trusted Advisor"]
  },
  {
    q: "¿Qué tipo de nube ofrece AWS?",
    a: "a",
    options: ["Pública", "Privada", "Híbrida", "Local"]
  },
  {
    q: "¿Qué servicio permite ejecutar código sin servidores?",
    a: "b",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "AWS Elastic Beanstalk"]
  },
  {
    q: "¿Qué servicio proporciona autenticación y control de acceso?",
    a: "a",
    options: ["AWS IAM", "AWS Shield", "AWS WAF", "AWS KMS"]
  },
  {
    q: "¿Qué servicio distribuye contenido a nivel global?",
    a: "b",
    options: ["Amazon S3", "Amazon CloudFront", "Amazon Route 53", "AWS Global Accelerator"]
  },
  {
    q: "¿Qué servicio protege contra ataques DDoS?",
    a: "a",
    options: ["AWS Shield", "AWS IAM", "AWS CloudTrail", "AWS Config"]
  },
  {
    q: "¿Qué servicio automatiza la infraestructura como código?",
    a: "a",
    options: ["AWS CloudFormation", "AWS CloudTrail", "AWS Config", "AWS CodeDeploy"]
  },
  {
    q: "¿Qué servicio analiza datos a gran escala?",
    a: "b",
    options: ["Amazon Aurora", "Amazon Redshift", "Amazon RDS", "Amazon S3"]
  },
  {
    q: "¿Qué servicio crea redes virtuales?",
    a: "a",
    options: ["Amazon VPC", "Amazon EC2", "Amazon S3", "AWS IAM"]
  },
  {
    q: "¿Qué servicio proporciona bases de datos NoSQL?",
    a: "c",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"]
  },
  {
    q: "¿Qué servicio ofrece recomendaciones de buenas prácticas?",
    a: "a",
    options: ["AWS Trusted Advisor", "AWS CloudTrail", "AWS CloudWatch", "AWS Config"]
  }
]
  },

  fr: {
    button: "Soumettre les réponses",
    feedback: [
      "🌟 Parfait ! Tu es prêt pour la certification !",
      "💪 Très bien ! Encore un peu de pratique !",
      "🔄 Tu es sur la bonne voie. Continue !",
      "📚 Ne lâche pas ! Revois les concepts et réessaie."
    ],
    questions: [
  {
    q: "Quel service AWS est utilisé pour le stockage d'objets ?",
    a: "c",
    options: ["Amazon EBS", "Amazon EC2", "Amazon S3", "Amazon RDS"]
  },
  {
    q: "Quel modèle de responsabilité définit la sécurité dans AWS ?",
    a: "c",
    options: [
      "AWS est responsable de tout",
      "Le client est responsable de tout",
      "Responsabilité partagée",
      "Aucune des réponses"
    ]
  },
  {
    q: "Quel service fournit des bases de données relationnelles gérées ?",
    a: "b",
    options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon S3"]
  },
  {
    q: "Quel outil aide à estimer les coûts AWS ?",
    a: "a",
    options: ["AWS Cost Explorer", "AWS CloudTrail", "AWS IAM", "AWS CloudWatch"]
  },
  {
    q: "Quel service surveille les ressources AWS ?",
    a: "b",
    options: ["AWS CloudFormation", "AWS CloudWatch", "AWS Config", "AWS Trusted Advisor"]
  },
  {
    q: "Quel type de cloud AWS propose-t-il ?",
    a: "a",
    options: ["Public", "Privé", "Hybride", "Sur site"]
  },
  {
    q: "Quel service permet l'exécution de code sans serveur ?",
    a: "b",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "AWS Elastic Beanstalk"]
  },
  {
    q: "Quel service fournit l'authentification et le contrôle d'accès ?",
    a: "a",
    options: ["AWS IAM", "AWS Shield", "AWS WAF", "AWS KMS"]
  },
  {
    q: "Quel service distribue du contenu à l'échelle mondiale ?",
    a: "b",
    options: ["Amazon S3", "Amazon CloudFront", "Amazon Route 53", "AWS Global Accelerator"]
  },
  {
    q: "Quel service protège contre les attaques DDoS ?",
    a: "a",
    options: ["AWS Shield", "AWS IAM", "AWS CloudTrail", "AWS Config"]
  },
  {
    q: "Quel service automatise l'infrastructure en tant que code ?",
    a: "a",
    options: ["AWS CloudFormation", "AWS CloudTrail", "AWS Config", "AWS CodeDeploy"]
  },
  {
    q: "Quel service analyse les données à grande échelle ?",
    a: "b",
    options: ["Amazon Aurora", "Amazon Redshift", "Amazon RDS", "Amazon S3"]
  },
  {
    q: "Quel service crée des réseaux virtuels ?",
    a: "a",
    options: ["Amazon VPC", "Amazon EC2", "Amazon S3", "AWS IAM"]
  },
  {
    q: "Quel service fournit des bases de données NoSQL ?",
    a: "c",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"]
  },
  {
    q: "Quel service propose des recommandations de bonnes pratiques ?",
    a: "a",
    options: ["AWS Trusted Advisor", "AWS CloudTrail", "AWS CloudWatch", "AWS Config"]
  }
]
  }
};


// ✅ Timer
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

// ✅ Dark theme
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ✅ Change Language
document.getElementById("lang-select").addEventListener("change", (e) => {
  currentLang = e.target.value;
  generateQuiz(currentLang);
});

// ✅ Generate Quiz
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

// ✅ Initialize
generateQuiz(currentLang);
