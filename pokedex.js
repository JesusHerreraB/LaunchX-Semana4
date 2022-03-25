const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value;
  pokeInput = pokeInput.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  fetch(url).then((res) => {
      if (res.status != "200") {
        pokeImg("img/system-message.jpg");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let pokeImage = data.sprites.other.home.front_default;
      pokeImg(pokeImage);
      console.log(data);    
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("ID1").innerHTML = `<b>Id</b>:`;
      document.getElementById("ID").innerHTML = data.id;
      document.getElementById("type").innerHTML = `<b>Tipo:</b> ${data.types[0].type.name}`;
      document.getElementById("height").innerHTML = `<b>Altura:</b> ${data.height*10} cm s`;
      document.getElementById("weight").innerHTML = `<b>Peso:</b> ${data.weight/10} kg s`;
      document.getElementById("vida").innerHTML = `<b>Vida:</b> ${data.stats[0].base_stat} `;
      document.getElementById("Ataque").innerHTML = `<b>Ataque:</b> ${data.stats[1].base_stat}`;
      document.getElementById("Defensa").innerHTML = `<b>Defensa:</b> ${data.stats[2].base_stat} `;
      document.getElementById("AtaqueS").innerHTML = `<b>Special Ataque:</b> ${data.stats[3].base_stat}`;
      document.getElementById("DefensaS").innerHTML = `<b>Special Defensa:</b> ${data.stats[4].base_stat} `;
      document.getElementById("Velocidad").innerHTML = `<b>Velocidad:</b> ${data.stats[5].base_stat}`;
      document.getElementById("habilidad").innerHTML = `<b>Habilidad:</b> ${data.abilities[0].ability.name}`; 
      document.getElementById("move").innerHTML = `<b>Movimiento:</b> ${data.moves[0].move.name}`;
    });
};

const nextPokemon = () => {
  const pokeNext = document.getElementById("ID").innerText;
  let pokeI = parseInt(pokeNext) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeI}`;
  fetch(url).then((res) => {
      if (res.status != "200") {
        pokeImg("img/system-message.jpg");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let pokeImage = data.sprites.other.home.front_default;;
      pokeImg(pokeImage);
      console.log(data);    
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("ID1").innerHTML = `<b>Id</b>:`;
      document.getElementById("ID").innerHTML = data.id;
      document.getElementById("type").innerHTML = `<b>Tipo:</b> ${data.types[0].type.name}`;
      document.getElementById("height").innerHTML = `<b>Altura:</b> ${data.height*10} cm s`;
      document.getElementById("weight").innerHTML = `<b>Peso:</b> ${data.weight/10} kg s`;
      document.getElementById("vida").innerHTML = `<b>Vida:</b> ${data.stats[0].base_stat} `;
      document.getElementById("Ataque").innerHTML = `<b>Ataque:</b> ${data.stats[1].base_stat}`;
      document.getElementById("Defensa").innerHTML = `<b>Defensa:</b> ${data.stats[2].base_stat} `;
      document.getElementById("AtaqueS").innerHTML = `<b>Special Ataque:</b> ${data.stats[3].base_stat}`;
      document.getElementById("DefensaS").innerHTML = `<b>Special Defensa:</b> ${data.stats[4].base_stat} `;
      document.getElementById("Velocidad").innerHTML = `<b>Velocidad:</b> ${data.stats[5].base_stat}`;
      document.getElementById("habilidad").innerHTML = `<b>Habilidad:</b> ${data.abilities[0].ability.name}`; 
      document.getElementById("move").innerHTML = `<b>Movimiento:</b> ${data.moves[0].move.name}`;
    });
};
const prevPokemon = () => {
  const pokeNext = document.getElementById("ID").innerText;
  let pokeI = parseInt(pokeNext) - 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeI}`;
  fetch(url).then((res) => {
      if (res.status != "200") {
        pokeImg("img/system-message.jpg");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let pokeImage = data.sprites.other.home.front_default;;
      pokeImg(pokeImage);
      console.log(data);    
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("ID1").innerHTML = `<b>Id</b>:`;
      document.getElementById("ID").innerHTML = data.id;
      document.getElementById("type").innerHTML = `<b>Tipo:</b> ${data.types[0].type.name}`;
      document.getElementById("height").innerHTML = `<b>Altura:</b> ${data.height*10} cm s`;
      document.getElementById("weight").innerHTML = `<b>Peso:</b> ${data.weight/10} kg s`;
      document.getElementById("vida").innerHTML = `<b>Vida:</b> ${data.stats[0].base_stat} `;
      document.getElementById("Ataque").innerHTML = `<b>Ataque:</b> ${data.stats[1].base_stat}`;
      document.getElementById("Defensa").innerHTML = `<b>Defensa:</b> ${data.stats[2].base_stat} `;
      document.getElementById("AtaqueS").innerHTML = `<b>Special Ataque:</b> ${data.stats[3].base_stat}`;
      document.getElementById("DefensaS").innerHTML = `<b>Special Defensa:</b> ${data.stats[4].base_stat} `;
      document.getElementById("Velocidad").innerHTML = `<b>Velocidad:</b> ${data.stats[5].base_stat}`;
      document.getElementById("habilidad").innerHTML = `<b>Habilidad:</b> ${data.abilities[0].ability.name}`; 
      document.getElementById("move").innerHTML = `<b>Movimiento:</b> ${data.moves[0].move.name}`;
    });
};
const pokeImg = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};

