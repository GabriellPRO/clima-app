async function buscarClima() {
  const cidade = document.getElementById('cidade').value;
  const apiKey = 'e7324f75c18c8ca60c7613e60fca9b60';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&appid=${apiKey}&lang=pt_br&units=metric`;

  try {
    const res = await fetch(url);
    const dados = await res.json();

    if (res.ok) {
      const temp = dados.main.temp;
      const descricao = dados.weather[0].description;
      const icone = dados.weather[0].icon;
      const iconeUrl = `https://openweathermap.org/img/wn/${icone}.png`;

      document.getElementById('resultado').innerHTML = `
        <p><strong>Temperatura:</strong> ${temp}°C</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <img src="${iconeUrl}" alt="Ícone do clima" />
      `;
    } else {
      document.getElementById('resultado').innerHTML = `<p>Erro: ${dados.message}</p>`;
    }
  } catch (erro) {
    document.getElementById('resultado').innerHTML = `<p>Erro de conexão: ${erro}</p>`;
  }
}
