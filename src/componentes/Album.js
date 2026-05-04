import { useState } from 'react';
import './Album.css';

// 🔥 função pra importar
function importarMidias(r) {
  return r.keys().map(r);
}

// 🔥 pega tudo
const arquivos = importarMidias(
  require.context('../imgs', true, /\.(png|jpe?g|mp4)$/)
);

// 🔥 organiza
const album = {};

arquivos.forEach((file) => {
  const path = file;

  const partes = path.split('/');
  const pastaOriginal = partes[partes.length - 2];
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
  const [filtro, setFiltro] = useState('todos');     // pasta
  const [tipoFiltro, setTipoFiltro] = useState('todos'); // tipo

  const pastas = Object.keys(album);

  return (
    <div className="album">

      {/* 🔥 FILTRO POR PASTA */}
      <div className="filtros"></div>

      {/* 🔥 FILTRO POR TIPO */}
      <div className="filtros">
        <button onClick={() => setTipoFiltro('todos')}>Tudo</button>
        <button onClick={() => setTipoFiltro('img')}>Fotos</button>
        <button onClick={() => setTipoFiltro('video')}>Vídeos</button>
      </div>

      {/* 🔥 GALERIA */}
      {Object.entries(album).map(([pasta, midias]) => {
        // filtro por pasta
        if (filtro !== 'todos' && filtro !== pasta) return null;

        // filtro por tipo
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