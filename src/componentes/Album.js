import { useState } from 'react';
import './Album.css';

// 🔥 função pra importar
function importarMidias(r) {
  return r.keys().map(r);
}

// 🔥 pega tudo de uma vez (SEM quebrar build)
const arquivos = importarMidias(
  require.context('../imgs', true, /\.(png|jpe?g|mp4)$/)
);

// 🔥 organiza por pasta (2024, 2025...)
const album = {};

arquivos.forEach((file) => {
  const path = file;

  const partes = path.split('/');
  const pastaOriginal = partes[partes.length - 2];

  // pega só número (ex: img2024 → 2024)
  const pasta = pastaOriginal.replace(/[^\d]/g, '');

  if (!album[pasta]) {
    album[pasta] = [];
  }

  const tipo = path.includes('.mp4') ? 'video' : 'img';

  album[pasta].push({
    tipo,
    src: file,
    pasta,
  });
});

function Album() {
  const [filtro, setFiltro] = useState('todos');
  const pastas = Object.keys(album);

  return (
    <div className="album">

      {/* 🔥 FILTROS */}
      <div className="filtros">
        <button onClick={() => setFiltro('todos')}>Todos</button>

        {pastas.map((pasta) => (
          <button key={pasta} onClick={() => setFiltro(pasta)}>
            {pasta}
          </button>
        ))}
      </div>

      {/* 🔥 GALERIA */}
      {Object.entries(album).map(([pasta, midias]) => {
        if (filtro !== 'todos' && filtro !== pasta) return null;

        return (
          <div key={pasta} className="secao">
            <h2>{pasta}</h2>

            <div className="galeria">
              {midias.map((item, i) => (
                <div className="card" key={i}>
                  {item.tipo === 'img' ? (
                    <img src={item.src} alt="" />
                  ) : (
                    <video src={item.src} controls />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Album;