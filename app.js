const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const canvas = document.querySelector("#uav-canvas");

if (canvas) {
  import("https://unpkg.com/three@0.165.0/build/three.module.js")
    .then((THREE) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      });

      camera.position.set(0, 2.4, 9.2);
      camera.lookAt(0, 0, 0);

      const group = new THREE.Group();
      scene.add(group);

      const darkMaterial = new THREE.MeshStandardMaterial({
        color: 0x050914,
        roughness: 0.58,
        metalness: 0.74,
        transparent: true,
        opacity: 0.82,
      });

      const redMaterial = new THREE.MeshStandardMaterial({
        color: 0xd70f22,
        roughness: 0.4,
        metalness: 0.6,
        transparent: true,
        opacity: 0.38,
      });

      const blueMaterial = new THREE.MeshStandardMaterial({
        color: 0x1b57c7,
        roughness: 0.42,
        metalness: 0.68,
        transparent: true,
        opacity: 0.46,
      });

      const body = new THREE.Mesh(new THREE.ConeGeometry(0.48, 4.8, 4), darkMaterial);
      body.rotation.x = Math.PI / 2;
      body.scale.set(1, 0.72, 1);
      group.add(body);

      const wingGeometry = new THREE.BoxGeometry(5.8, 0.045, 1.18);
      const wing = new THREE.Mesh(wingGeometry, darkMaterial);
      wing.position.z = 0.26;
      group.add(wing);

      const leftTip = new THREE.Mesh(new THREE.ConeGeometry(0.24, 1.2, 4), blueMaterial);
      leftTip.position.set(-3.15, 0, 0.26);
      leftTip.rotation.z = Math.PI / 2;
      group.add(leftTip);

      const rightTip = leftTip.clone();
      rightTip.position.x = 3.15;
      rightTip.rotation.z = -Math.PI / 2;
      group.add(rightTip);

      const tail = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.045, 0.62), redMaterial);
      tail.position.z = -1.72;
      group.add(tail);

      const veilGeometry = new THREE.CylinderGeometry(3.3, 3.8, 0.02, 96, 1, true);
      const veilMaterial = new THREE.MeshBasicMaterial({
        color: 0x020612,
        transparent: true,
        opacity: 0.42,
        side: THREE.DoubleSide,
      });
      const veil = new THREE.Mesh(veilGeometry, veilMaterial);
      veil.rotation.x = Math.PI / 2;
      veil.position.y = 0.04;
      group.add(veil);

      const platform = new THREE.Mesh(
        new THREE.CylinderGeometry(3.8, 4.2, 0.2, 96),
        new THREE.MeshStandardMaterial({
          color: 0x071226,
          roughness: 0.64,
          metalness: 0.5,
        })
      );
      platform.position.y = -1.38;
      scene.add(platform);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(3.62, 0.018, 8, 120),
        new THREE.MeshBasicMaterial({ color: 0xffb13c, transparent: true, opacity: 0.52 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.24;
      scene.add(ring);

      const ambient = new THREE.AmbientLight(0x8ea8ff, 1.2);
      scene.add(ambient);

      const key = new THREE.DirectionalLight(0xffffff, 2.4);
      key.position.set(4, 6, 5);
      scene.add(key);

      const red = new THREE.PointLight(0xd70f22, 12, 16);
      red.position.set(-4, 1.5, 3);
      scene.add(red);

      const blue = new THREE.PointLight(0x1c5eff, 14, 18);
      blue.position.set(4, 1.8, -2);
      scene.add(blue);

      function resize() {
        const rect = canvas.getBoundingClientRect();
        const width = Math.max(1, rect.width);
        const height = Math.max(1, rect.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }

      let targetX = 0;
      let targetY = 0;
      window.addEventListener("pointermove", (event) => {
        targetX = (event.clientX / window.innerWidth - 0.5) * 0.36;
        targetY = (event.clientY / window.innerHeight - 0.5) * 0.22;
      });

      window.addEventListener("resize", resize);
      resize();

      function animate(time) {
        const t = time * 0.001;
        group.rotation.y += (targetX + Math.sin(t * 0.42) * 0.08 - group.rotation.y) * 0.035;
        group.rotation.x += (targetY - 0.12 - group.rotation.x) * 0.035;
        group.position.y = Math.sin(t * 1.2) * 0.08;
        ring.rotation.z = t * 0.22;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    })
    .catch(() => {
      canvas.replaceWith(Object.assign(document.createElement("div"), { className: "canvas-fallback" }));
    });
}
