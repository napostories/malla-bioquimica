
function actualizarCursos() {
  const cursos = document.querySelectorAll(".curso");

  cursos.forEach(curso => {
    const prereq = curso.dataset.prerreq;
    if (prereq) {
      const prereqCurso = document.querySelector(`[data-curso="${prereq}"]`);
      if (prereqCurso && prereqCurso.checked) {
        curso.disabled = false;
        curso.classList.remove("bloqueado");
      } else {
        curso.disabled = true;
        curso.checked = false;
        curso.classList.add("bloqueado");
      }
    }
  });
}

document.querySelectorAll(".curso").forEach(c => {
  c.addEventListener("change", actualizarCursos);
});
