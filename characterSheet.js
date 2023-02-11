const data = {
   name: 'Yume Otomo ',
  player: 'Zen',
  occupation: 'Ronin',
  age: 26,
  sex: 'female',
  birthplace: 'Hanagatami, Clã Otomo',
  points: 1,
  energy: 16,
  season: 12,
  focus: 1,

  life: {
    current: 12,
    max: 37,
  },

  sanity: {
    current: 12,
    max: 23,
  },

  stamina: {
    current: 0,
    max: 11,
  },

   mana: {
    current: 12,
    max: 22,
  },

  weapons: [
    {
      name: 'Katana',
      type: 'Katana',
      damage: '2d6+2',
      attack: 'Dex-3',
    },
    {
      name: 'Arco e Flecha',
      type: 'Arco e Flecha',
      damage: '3d6',
      attack: 'Dex',
    },
  ],

  attributes: [
    {
      type: 'Força',
      amount: 12,
    },
    {
      type: 'Dextreza',
      amount: 11,
    },
    {
      type: 'Inteligência',
      amount: 11,
    },
    {
      type: 'Saúde',
      amount: 11,
    },
    {
      type: 'Vontade',
      amount: 11,
    },
    {
      type: 'Percepção',
      amount: 11,
    },
    {
      type: 'Carisma',
      amount: 10,
    },
    {
      type: 'Intimidação',
      amount: 12,
    },
    {
      type: 'Parry',
      amount: 12,
    },
    {
      type: 'Bloqueio',
      amount: 13,
    },
    {
      type: 'Esquiva',
      amount: 10,
    },
  ],

    expertise: [
    {
      name: 'Reflexos de Combate',
      cost: 5,
      description: '+1 em jogadas de Parry, Esquiva e Bloqueio, +6 para testes de vontade para acordar',
    },
      {
      name: 'Visão Aguçada (+1)',
      cost: 3,
      description: '+1 em testes que envolvam a visão',
    },
      {
      name: 'Empatia',
      cost: 4,
      description: 'Ao encontrar uma pessoa pela primeira vez, o Yama poderá te dizer o que este personagem sente por você',
    },
      {
      name: 'Bloqueio Ampliado',
      cost: 5,
      description: '+1 em testes de bloqueio com escudo ou parry',
    },
      {
      name: 'Flexibilidade',
      cost: 4,
      description: '+3 para testes de escalada e fuga',
    },
      {
      name: 'Brachiator',
      cost: 5,
      description: '+1 para testes de escalada em fios, paredes e cordas',
    },
      {
      name: 'Kyujutsu',
      cost: 0,
      description: '+1 em testes com o arco, pode disparar mais de uma flecha, +1 em testes de controle de respiração, meditação e filosofia shintoista',
    },
      {
      name: 'Hipoalgia',
      cost: 6,
      description: '+3 para evitar quedas e resistir a dor física',
    },
      {
      name: 'Clarissenciência',
      cost: 15,
      description: 'Você pode projetar seus sentidos para fora do seu corpo, escolha um ponto qualquer que você consiga enxergar com clareza e você poderá fazer um teste de PER como se estivesse lá',
    },
       {
      name: 'Empatia com Animais',
      cost: 4,
      description: 'Suceda em um teste de IQ e você poderá saber o que um animal sente, seu estado emocional ou se está sob algum tipo de possessão',
    },
  ],
        expertise2: [
    {
      name: '永夜抄 ~ Galáxia dentro de uma jarra',
      type: 'Esoterica',
      cost: '3 por hora',
      damage: 0,
      time: '1 turno',
      duration: '24 horas',
      description: 'Forma um domo ao redor de você onde uma lua ilusória aparece no céu, esta lua permanece imóvel e completamente, se feito durante o escuro, aumente em 2 o modificador de escuridão da área',
    },
    {
      name: '魔操 ~ Retornar Inanimidade',
      type: 'Esoterica',
      cost: 6,
      damage: '0',
      time: '1 turno',
      duration: 'Enquanto possuirem vida',
      description: 'Ao suceder em um teste de VON, o kunekune irá se moldar em 1d10 bonecas, elas terão iniciativa própria e obedecerão seus comandos exceto aqueles que possam levar a sua morte ou a morte do organismo',
    },
    {
      name: '狂夢 ~ Impureza Interna',
      type: 'Esoterica',
      cost: 3,
      damage: '(+2d6)',
      time: '1 turno',
      duration: '1d6+1 turnos',
      description: 'O kunekune penetra sua arma, suas raízes a distorcem, gerando uma nova arma no processo, esta arma nova estará embutida com aura negra e dará 2d6 de dano a mais',
    },
   {
      name: '狂夢 ~ Reino de Yamato',
      type: 'Esoterica',
      cost: 2,
      damage: 0,
      time: '1 turno',
      duration: 'indefinido',
      description: 'Escolha uma criatura qualquer, ela deve fazer um teste de VON-2 ou será submetida a uma ilusão a partir de um haiku de sua autoria. Ela poderá repetir o teste no fim de cada turno',
    },
   {
      name: '山怪 ~ Usuyukisou, a aparição lunar',
      type: 'Esoterica',
      cost: 5,
      damage: 0,
      time: '1 turno',
      duration: 'Enquanto estiver viva',
      description: 'Quando você utilizar sua projeção astral sob a luz da lua, você pode manifestar ela como uma criatura de aparência aterrorizante, a criatura possuirá todas as suas habilidades mas apenas metade de sua vida e esotérica',
    },
      {
      name: '裏冬 ~ Montanha de Prata',
      type: 'Sazonal',
      cost: 2,
      damage: '2d6 + 2d8',
      time: '1 turno',
      duration: '2 turnos',
      description: 'Uma coluna de frio irá consumir os alvos que estiverem em uma área de 5ft onde o ataque for ativado, eles ficarão paralisados durante 2 turnos, tomando dano no processo',
    },
       {
      name: '裏冬 ~ Sino de Avicci',
      type: 'Sazonal',
      cost: 1,
      damage: '1d6',
      time: '1 turno',
      duration: '2 turnos',
      description: 'Uma nevasca irá se iniciar, a neve preta irá cobrir os olhos de todos os alvos que você escolher, eles devem suceder em um teste de dificuldade 12 ou ficarão 2 turnos cegados, eles tomarão 1d6 de dano. Durante as estações frias, a nevasca irá persistir por mais um turno e o dano irá aumentar para 2d6+2, durante as estações quentes, a nevasca não dará dano',
    },
      {
      name: '裏冬 ~ Frio Perdurante',
      type: 'Sazonal',
      cost: 3,
      damage: '4d6',
      time: '1 turno',
      duration: '1 turno',
      description: 'Uma figura feita de neve com aparência similar a sua aparece, ao seu comando, a figura de neve irá se desmanchar e uma faca pontuda de neve sairá dela. A faca dará 4d6 de dano. Durante as estações frias, ambos os danos aumentarão para 3d6, durante as estações quentes, apenas o dano de corte irá ocorrer',
    },
     {
      name: '裏冬 ~ Percepção Vazia',
      type: 'Sazonal',
      cost: 4,
      damage: '1d4',
      time: '1 turno',
      duration: '1d6 turnos',
      description: 'O Kune-Kune forma um leque de braços pretos em suas costas, estes braços podem se juntar formando 5 braços maiores que podem dar 1d4 de dano cada. Durante as estações frias, os braços podem formar um par de asas que permite que você possa voar, durante as estações quentes, os braços irão durar por 1d4 turnos',
    },
  ],
   
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.expertise.map((expertise, index) => {
   addExpertiseToTable(expertise, index)
})

data.expertise2.map((expertise2, index) => {
   addExpertise2ToTable(expertise2, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#points').val(data.points)
$('#energy').val(data.energy)
$('#season').val(data.season)
$('#focus').val(data.focus)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css('width', `${calculateBar(data.sanity.current, data.sanity.max)}%`)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)

$('.staminaBar').css('width', `${calculateBar(data.stamina.current, data.stamina.max)}%`)
$('#staminaCount').text(`${data.stamina.current}/${data.stamina.max}`)
$('#staminaCurrent').val(data.stamina.current)
$('#staminaMax').val(data.stamina.max)

$('.manaBar').css('width', `${calculateBar(data.mana.current, data.mana.max)}%`)
$('#manaCount').text(`${data.mana.current}/${data.mana.max}`)
$('#manaCurrent').val(data.mana.current)
$('#manaMax').val(data.mana.max)

const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')
const staminaModal = $('#staminaModal')
const manaModal = $('#manaModal')

const input = document.querySelector("input");
input.addEventListener("input", function(event) {
  console.log(event.target.value);
});


$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  } else if (event.target.id == 'addExpertiseModal') {
     closeModal('#addExpertiseModal')
  } else if (event.target.id == 'addExpertise2Modal') {
     closeModal('#addExpertise2Modal')
  } 
})

function rollAtribute(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('3d6')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('.staminaBar').click(function () {
  console.log(this)
  staminaModal.css('display', 'block')
})

$('.manaBar').click(function () {
  console.log(this)
  manaModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})

$('#addExpertise').click(function() {
   openModal('#addExpertiseModal')
})

$('#addExpertise2').click(function() {
   openModal('#addExpertise2Modal')
})

$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#possession').change(function () {
  if (this.checked) {
    console.log('Modo possessão ativado!')
  } else {
    console.log('Modo possessão desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fogo'
  } else if ($('#weaponType').val() == 'arch') {
    weaponType = 'Arco'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Briga'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weapondamage').val(),
    attack: $('#weaponAttack').val(),
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#addExpertiseForm').submit(function (event) {
  var expertiseCost = ''

  if ($('#expertiseCost').val() == 1) {
    expertiseCost = 1
  } else if ($('#expertiseCost').val() == 2) {
    expertiseCost = 2
  } else if ($('#expertiseCost').val() == 3) {
    expertiseCost = 3
  }

  const expertise = {
    name: $('#expertiseName').val(),
    cost: $('#expertiseCost').val(),
    description: $('#expertiseDescription').val(),
  }

  data.expertise.push(expertise)
  const id = data.expertise.length - 1
  addExpertiseToTable(expertise, id)

  closeModal('#addExpertiseModal')
  event.preventDefault()
})

$('#addExpertise2Form').submit(function (event) {
  var expertise2Type = ''

  if ($('#expertise2Type').val() == 'seasonal') {
    expertise2Type = 'Sazonal'
  } else if ($('#expertise2Type').val() == 'esoterica') {
    expertise2Type = 'Esoterica'
  } else if ($('#expertise2Type').val() == 'youjutsu') {
    expertise2Type = 'Youjutsu'
  }

  const expertise2 = {
    name: $('#expertise2Name').val(),
    type: $('#expertise2Type').val(),
    cost: $('#expertise2Cost').val(),
    damage: $('#expertise2Damage').val(),
    time: $('#expertise2Time').val(),
    duration: $('#expertise2Duration').val(),
    description: $('#expertise2Description').val(),
    
  }

  data.expertise2.push(expertise2)
  const id = data.expertise2.length - 1
  addExpertise2ToTable(expertise2, id)

  closeModal('#addExpertise2Modal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

  $('#changeStamina').submit(function (event) {
  let current = Number($('#staminaCurrent').val())
  const max = Number($('#staminaMax').val())

  if (current > max) {
    alert('A stamina atual não pode ser maior que a maxima!')
    current = max
  }

  data.stamina.current = current
  data.stamina.max = max
  $('.staminaBar').css('width', `${calculateBar(current, max)}%`)
  $('#staminaCount').text(`${current}/${max}`)

  closeModal('#staminaModal')
  event.preventDefault()
})

$('#changeMana').submit(function (event) {
  let current = Number($('#manaCurrent').val())
  const max = Number($('#manaMax').val())

  if (current > max) {
    alert('A mana atual não pode ser maior que a maxima!')
    current = max
  }

  data.mana.current = current
  data.mana.max = max
  $('.manaBar').css('width', `${calculateBar(current, max)}%`)
  $('#manaCount').text(`${current}/${max}`)

  closeModal('#manaModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {

  const table = [
    { normal: 18 },
    { normal: 17, good: 18 },
    { normal: 16, good: 18 },
    { normal: 15, good: 17 },
    { normal: 14, good: 17, extreme: 18 },
    { normal: 13, good: 16, extreme: 18 },
    { normal: 12, good: 16, extreme: 36 },
    { normal: 11, good: 15, extreme: 34 },
    { normal: 10, good: 15, extreme: 34 },
    { normal: 9, good: 14, extreme: 34 },
    { normal: 9, good: 14, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 6, good: 11, extreme: 30 },
    { normal: 6, good: 11, extreme: 28 },
    { normal: 5, good: 10, extreme: 28 },
    { normal: 5, good: 10, extreme: 26 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Falha Crítica'
    if (dice >= type.good) return 'Falha Normal'
    return 'Sucesso Normal'
  } else if (type.good) {
    if (dice >= type.good) return 'Falha'
    return 'Sucesso Normal'
  } 
  return 'Sucesso Crítico'
}

function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
        <td>
            <button onclick="deleteWeapon(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td>${weapon.damage}</td>
        <td>${weapon.attack}</td>
    </tr>`)
  $('table#weapons').append(newWeapon)
}

function addExpertiseToTable(expertise, id) {
  const newexpertise = $(`<tr id="expertise_${id}">
        <td>
            <button onclick="deleteExpertise(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise.name}
        </td>
        <td>${expertise.cost}</td>
        <td>${expertise.description}</td>
    </tr>`)
  $('table#expertise').append(newexpertise)
}

function addExpertise2ToTable(expertise2, id) {
  const newexpertise2 = $(`<tr id="expertise2_${id}">
        <td>
            <button onclick="deleteExpertise2(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise2.name}
        </td>
        <td>${expertise2.type}</td>
        <td>${expertise2.cost}</td>
        <td>${expertise2.damage}</td>
        <td>${expertise2.time}</td>
        <td>${expertise2.duration}</td>
        <td>${expertise2.description}</td>
    </tr>`)
  $('table#expertise2').append(newexpertise2)
}

function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise2(id) {
  $(`tr#${id}`).remove()
}

/// Árvore de Foco

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});

 function convertNumber() {
      // Get the input value
      var input = document.getElementById("input").value;
      // Perform the conversion
      var output = input / 3;
      // Display the results
      document.getElementById("outputDisplay").innerHTML = "Output: " + output;
    }


function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

   const areas = document.querySelectorAll("area");
  const sidebar = document.getElementById("mySidebar");

  for (let area of areas) {
    area.addEventListener("click", function() {
      toggleNav();
      updateSidebarContent(area.title);
    });
  }

  function toggleNav() {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }

  function updateSidebarContent(title) {
    let content;
    switch (title) {
      case "A Lenda da Guerreira que Celebra a Maidono":
        content = "This is some custom content for the 'A Lenda da Guerreira que Celebra a Maidono' section.";
        break;
      case "A Verdadeira Face do Deus Secreto":
        content = "This is some custom content for the 'A Verdadeira Face do Deus Secreto' section.";
        break;
      case "Fé Nativa em meio a terra morta":
        content = "This is some custom content for the 'Fé Nativa em meio a terra morta' section.";
        break;
      default:
        content = "This is some default content for an undefined section.";
    }
    sidebar.innerHTML = `
      <a href="#" class="closebtn" onclick="toggleNav()">&times;</a>
      <br></br>
      <br></br>
      <h3>${title}</h3>
      <p>${content}</p>
    `;
  }
