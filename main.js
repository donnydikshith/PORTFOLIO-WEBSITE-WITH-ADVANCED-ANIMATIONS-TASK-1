// Animate the header when the page loads
gsap.from("header", { duration: 1, y: -50, opacity: 0 });

// Animate sections as they appear
gsap.from("#about", { duration: 1, x: -100, opacity: 0 });
gsap.from("#projects", { duration: 1, x: 100, opacity: 0, delay: 1 });
gsap.from("#contact", { duration: 1, y: 100, opacity: 0, delay: 2 });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
// Animate the header
gsap.from("header", { duration: 1, y: -50, opacity: 0 });

// Animate sections on scroll
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about", {
    scrollTrigger: "#about",
    duration: 1,
    x: -100,
    opacity: 0,
});

gsap.from("#projects", {
    scrollTrigger: "#projects",
    duration: 1,
    x: 100,
    opacity: 0,
});

gsap.from("#contact", {
    scrollTrigger: "#contact",
    duration: 1,
    y: 100,
    opacity: 0,
});
// Animate the header (fade in from the top)
gsap.from("header", { duration: 1, y: -50, opacity: 0 });

// Animate sections on scroll
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about", {
    scrollTrigger: "#about",
    duration: 1,
    x: -200,
    opacity: 0,
});

gsap.from("#projects", {
    scrollTrigger: "#projects",
    duration: 1,
    x: 200,
    opacity: 0,
});

gsap.from("#contact", {
    scrollTrigger: "#contact",
    duration: 1,
    y: 100,
    opacity: 0,
});
// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth",
        });
    });
});
