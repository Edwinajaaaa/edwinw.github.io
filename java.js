// Contoh fungsi JavaScript untuk menambahkan interaktivitas

// Fungsi untuk menampilkan pesan saat gambar di klik
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('click', () => {
    alert(`Anda mengklik proyek: ${project.querySelector('h3').textContent}`);
  });
});
