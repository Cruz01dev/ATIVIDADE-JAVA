document.getElementById('ano').textContent = new Date().getFullYear();
const busca = document.getElementById('busca');
if (busca) {
  const linhas = document.querySelectorAll('#jogos tbody tr');
  const aviso = document.getElementById('aviso');
  busca.addEventListener('input', () => {
    const q = busca.value.trim().toLowerCase();
    let n = 0;
    linhas.forEach(tr => {
      const ok = tr.textContent.toLowerCase().includes(q);
      tr.hidden = !ok;
      if (ok) n++;
    });
    aviso.textContent = n ? n + ' jogo(s) encontrado(s).' : 'Nenhum jogo encontrado. Tente outro nome de time.';
  });
}
