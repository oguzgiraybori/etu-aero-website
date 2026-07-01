const teamMembers = [
  {
    name: "Üye Adı",
    role: "Takım Lideri",
    focus: "Sistem mimarisi, yarışma stratejisi ve ekip koordinasyonu.",
    initials: "TL",
    links: {
      in: "#",
      ig: "#",
      mail: "mailto:contact@etuaero.org",
    },
  },
  {
    name: "Üye Adı",
    role: "Aviyonik",
    focus: "Uçuş bilgisayarı, sensör füzyonu ve güvenilir elektronik altyapı.",
    initials: "AV",
    links: {
      in: "#",
      gh: "#",
      mail: "mailto:contact@etuaero.org",
    },
  },
  {
    name: "Üye Adı",
    role: "Mekanik Tasarım",
    focus: "Gövde, üretilebilirlik, ağırlık optimizasyonu ve yapısal testler.",
    initials: "MK",
    links: {
      in: "#",
      ig: "#",
      mail: "mailto:contact@etuaero.org",
    },
  },
  {
    name: "Üye Adı",
    role: "Yazılım ve Otonomi",
    focus: "Görev yazılımı, görüntü işleme ve simülasyon akışları.",
    initials: "YZ",
    links: {
      in: "#",
      gh: "#",
      mail: "mailto:contact@etuaero.org",
    },
  },
  {
    name: "Üye Adı",
    role: "Haberleşme",
    focus: "Telemetri, yer istasyonu ve görev sırasında güvenli veri akışı.",
    initials: "HB",
    links: {
      in: "#",
      gh: "#",
      mail: "mailto:contact@etuaero.org",
    },
  },
  {
    name: "Üye Adı",
    role: "Operasyon ve Test",
    focus: "Yer testleri, uçuş emniyeti, kontrol listeleri ve saha hazırlığı.",
    initials: "OP",
    links: {
      in: "#",
      ig: "#",
      mail: "mailto:contact@etuaero.org",
    },
  },
];

const linkLabels = {
  in: "LinkedIn",
  gh: "GitHub",
  ig: "Instagram",
  mail: "E-posta",
};

function renderTeam() {
  const teamGrid = document.querySelector("#teamGrid");

  if (!teamGrid) {
    return;
  }

  teamGrid.innerHTML = teamMembers
    .map((member) => {
      const imageMarkup = member.image
        ? `<img src="${member.image}" alt="${member.name} fotoğrafı" />`
        : `<span class="member-initials" aria-hidden="true">${member.initials}</span>`;

      const socialMarkup = Object.entries(member.links)
        .map(
          ([key, href]) =>
            `<a href="${href}" aria-label="${member.name} ${linkLabels[key] || key}" target="${
              href.startsWith("http") ? "_blank" : "_self"
            }" rel="noreferrer">${key}</a>`,
        )
        .join("");

      return `
        <article class="team-card">
          <div class="member-photo">${imageMarkup}</div>
          <div class="member-body">
            <h3>${member.name}</h3>
            <span class="member-role">${member.role}</span>
            <p>${member.focus}</p>
            <div class="social-links">${socialMarkup}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setConcept(concept) {
  document.body.dataset.concept = concept;
  localStorage.setItem("etu-aero-concept", concept);

  document.querySelectorAll("[data-set-concept]").forEach((button) => {
    const isActive = button.dataset.setConcept === concept;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function wireConceptSwitch() {
  const savedConcept = localStorage.getItem("etu-aero-concept");
  const initialConcept = savedConcept === "atelier" ? "atelier" : "hangar";
  setConcept(initialConcept);

  document.querySelectorAll("[data-set-concept]").forEach((button) => {
    button.addEventListener("click", () => setConcept(button.dataset.setConcept));
  });
}

function startTeaserCanvas() {
  const canvas = document.querySelector("#teaserCanvas");

  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  const points = Array.from({ length: 38 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    speed: 0.00022 + (index % 7) * 0.000035,
    size: 1 + (index % 3),
  }));

  let width = 0;
  let height = 0;
  let previousTime = performance.now();

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(time) {
    const delta = Math.min(42, time - previousTime);
    previousTime = time;
    context.clearRect(0, 0, width, height);

    const scan = (time * 0.035) % height;
    const gradient = context.createLinearGradient(0, scan - 80, 0, scan + 80);
    gradient.addColorStop(0, "rgba(131, 217, 255, 0)");
    gradient.addColorStop(0.5, "rgba(131, 217, 255, 0.14)");
    gradient.addColorStop(1, "rgba(131, 217, 255, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, scan - 80, width, 160);

    points.forEach((point, index) => {
      point.x += point.speed * delta;

      if (point.x > 1.05) {
        point.x = -0.05;
        point.y = Math.random();
      }

      const x = point.x * width;
      const y = point.y * height;

      context.beginPath();
      context.arc(x, y, point.size, 0, Math.PI * 2);
      context.fillStyle = index % 5 === 0 ? "rgba(242, 165, 31, 0.55)" : "rgba(255, 255, 255, 0.45)";
      context.fill();

      const next = points[(index + 9) % points.length];
      const nx = next.x * width;
      const ny = next.y * height;
      const distance = Math.hypot(nx - x, ny - y);

      if (distance < 190) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(nx, ny);
        context.strokeStyle = `rgba(131, 217, 255, ${0.18 - distance / 1300})`;
        context.lineWidth = 1;
        context.stroke();
      }
    });

    context.strokeStyle = "rgba(255, 255, 255, 0.06)";
    context.lineWidth = 1;

    for (let x = 0; x < width; x += 56) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x + height * 0.26, height);
      context.stroke();
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

renderTeam();
wireConceptSwitch();
startTeaserCanvas();
