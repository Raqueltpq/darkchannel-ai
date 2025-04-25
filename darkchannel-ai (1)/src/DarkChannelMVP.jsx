import { useState } from 'react';

export default function DarkChannelMVP() {
  const [niche, setNiche] = useState('Curiosidades');
  const [keywords, setKeywords] = useState('mente humana, curiosidades, fatos incríveis');
  const [scripts, setScripts] = useState([]);

  const generateScripts = () => {
    setScripts([
      '5 curiosidades incríveis sobre o cérebro humano...',
      'Você sabia que seu cérebro consome 20% da sua energia total?',
      'O lado esquerdo do cérebro é responsável pela lógica e linguagem...'
    ]);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>DarkChannel AI - MVP</h1>
      <div style={{ marginBottom: 20 }}>
        <label>Escolha o Nicho:</label><br />
        <select value={niche} onChange={(e) => setNiche(e.target.value)}>
          <option>Curiosidades</option>
          <option>Saúde e Bem-estar</option>
          <option>Histórias Reais</option>
          <option>Terror e Mistérios</option>
        </select>
      </div>
      <div style={{ marginBottom: 20 }}>
        <label>Palavras-chave:</label><br />
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </div>
      <button onClick={generateScripts}>Gerar Roteiros</button>

      {scripts.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h2>Roteiros Gerados:</h2>
          <ul>
            {scripts.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}