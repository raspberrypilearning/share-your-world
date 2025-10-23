// 色彩模式
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // 检查颜色模式偏好设置是否存储在本地存储中
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // 根据存储的偏好设置初始颜色模式状态
  document.body.classList.toggle("dark-mode", isDarkMode);
  darkModeToggle.checked = isDarkMode;

  darkModeToggle.addEventListener("change", function () {
    const isDarkMode = darkModeToggle.checked;

  // 检查颜色模式是否已激活
  if (isDarkMode !== document.body.classList.contains("dark-mode")) {
    // 更新 body 类并将用户的偏好存储在本地存储中
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }
  });
});

// 视差滚动
const allParallax = document.querySelectorAll(".parallax");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1; // 淡入效果
        observer.unobserve(entry.target); // 当该部分可见时停止观察
      }
    }
  );
},
{ threshold: 0.5}
);
allParallax.forEach((parallax) => observer.observe(parallax));