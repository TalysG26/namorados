import { useState } from 'react';
import './Album.css';

// 🔥 importar arquivos (CRA)
function importarMidias(r) {
  return r.keys().map(r);
}

const imagens = importarMidias(
  require.context('../assets/album', true, /\.(png|jpe?g)$/)
);

const videos = importarMidias(
  require.context('../assets/album', true, /\.(mp4)$/)
);
// 🔥 organiza
const album = {};

[...imagens, ...videos].forEach((file) => {
  const path = file;

  const partes = path.split('/');
  const pasta = partes[partes.length - 2];

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

// 🔥 pega nomes das pastas
const pastas = Object.keys(album);

function Album() {
  const [filtro, setFiltro] = useState('todos');
  const [tipoFiltro, setTipoFiltro] = useState('todos');

  return (
    <div className="album">

   

      {/* 🔥 FILTRO POR TIPO */}
      <div className="filtros">
        <button onClick={() => setTipoFiltro('todos')}>Tudo</button>
        <button onClick={() => setTipoFiltro('img')}>Fotos</button>
        <button onClick={() => setTipoFiltro('video')}>Vídeos</button>
        <button onClick={() => setTipoFiltro('video')}>Vídeos 2024</button>
        <button onClick={() => setTipoFiltro('video')}>Vídeos 2025</button>
        <button onClick={() => setTipoFiltro('video')}>Vídeos 2026</button>
        <button onClick={() => setTipoFiltro('video')}>Fotos 2024</button>
        <button onClick={() => setTipoFiltro('video')}>Fotos 2025</button>
        <button onClick={() => setTipoFiltro('video')}>Fotos 2026</button>
        
      </div>

      {/* 🔥 GALERIA */}
      {Object.entries(album).map(([pasta, midias]) => {
        if (filtro !== 'todos' && filtro !== pasta) return null;

        const filtradas = midias.filter((item) => {
          if (tipoFiltro === 'todos') return true;
          return item.tipo === tipoFiltro;
        });

        if (filtradas.length === 0) return null;

        return (
          <div key={pasta} className="secao">
            <h2>{pasta}</h2>

            <div className="galeria">
              {filtradas.map((item, i) => (
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