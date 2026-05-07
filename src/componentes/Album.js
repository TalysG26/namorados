import { useState } from 'react';
import './Album.css';

// 🔥 função pra importar
function importarMidias(r) {
  return r.keys().map(r);
}

// 🔥 pega tudo de uma vez
const arquivos = importarMidias(
  require.context('../imgs', true, /\.(png|jpe?g|mp4)$/)
);

// 🔥 organiza por pasta
const album = {};

arquivos.forEach((file) => {
  const partes = file.split('/');
  const pastaOriginal = partes[partes.length - 2];

  // pega só números
  const pasta = pastaOriginal.replace(/[^\d]/g, '');

  if (!album[pasta]) {
    album[pasta] = [];
  }

  const tipo = file.includes('.mp4') ? 'video' : 'img';

  album[pasta].push({
    tipo,
    src: file,
    pasta,
  });
});

function Album() {
  const [filtro, setFiltro] = useState('todos');
  const [tipoFiltro, setTipoFiltro] = useState('todos');

  const pastas = Object.keys(album);

  return (
    <div className="album">

      {/* FILTROS */}
      <div className="filtros">

        <button onClick={() => {
          setFiltro('todos');
          setTipoFiltro('todos');
        }}>
          Todos
        </button>

        <button onClick={() => setTipoFiltro('img')}>
          Imagens
        </button>

        <button onClick={() => setTipoFiltro('video')}>
          Vídeos
        </button>

       
      </div>

      {/* GALERIA */}
      {Object.entries(album).map(([pasta, midias]) => {

        // filtro por pasta
        if (filtro !== 'todos' && filtro !== pasta) {
          return null;
        }

        // filtro por tipo
        const midiasFiltradas = midias.filter((item) => {
          if (tipoFiltro === 'todos') return true;
          return item.tipo === tipoFiltro;
        });

        // se não tiver nada
        if (midiasFiltradas.length === 0) {
          return null;
        }

        return (
          <div key={pasta} className="secao">
            <h2>{pasta}</h2>

            <div className="galeria">
              {midiasFiltradas.map((item, i) => (
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