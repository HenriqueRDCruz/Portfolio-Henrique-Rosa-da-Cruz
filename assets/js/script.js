// Update current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Navbar scroll effect
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse")
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show")
      }
    }
  })
})

// Active navigation link on scroll
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

function activateNavLink() {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", activateNavLink)

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all fade-in elements
document.querySelectorAll(".fade-in-up").forEach((el) => {
  el.style.animationPlayState = "paused"
  observer.observe(el)
})

// Parallax effect for gradient orbs
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const orbs = document.querySelectorAll(".gradient-orb")

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.1
    orb.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add hover effect to project cards
const projectCards = document.querySelectorAll(".project-card")

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.zIndex = "10"
  })

  card.addEventListener("mouseleave", function () {
    this.style.zIndex = "1"
  })
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize animations when page loads
window.addEventListener("load", () => {
  // Trigger initial animations
  document.body.classList.add("loaded")

  // Activate first nav link
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active")
  }
})

// Add loading state
window.addEventListener("beforeunload", () => {
  document.body.classList.add("loading")
})

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll handlers
window.addEventListener(
  "scroll",
  debounce(() => {
    activateNavLink()
  }, 10),
)

// Console message for developers
console.log("%c👋 Olá, desenvolvedor!", "font-size: 20px; font-weight: bold; color: #6366f1;")
console.log("%cGostou do código? Entre em contato!", "font-size: 14px; color: #64748b;")
console.log("%c📧 h903711@gmail.com", "font-size: 14px; color: #10b981;")
