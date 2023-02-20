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
        <td>
            <button onclick="showExpertise2Description(${id})">
                <i class="fa fa-info-circle"></i>
            </button>
        </td>
    </tr>`)
  $('table#expertise2').append(newexpertise2)
}

function showExpertise2Description(id) {
  const expertise2 = data.expertise2[id]
  $('#expertise2DescriptionTitle').text(expertise2.name)
  $('#expertise2DescriptionText').text(expertise2.description)
  $('#expertise2DescriptionModal').modal('show')
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
      case "Lenda da herdeira do reino lunar":
        content = "Gasto: Livre <br> Requisito: Nenhum <br><br><br> A névoa se tornava mais espessa ao pé da montanha e o frio só aumentava, os 3 guerreiros se encostavam, virados de costas um para o outro para conseguirem se defender dos ataques, a escuridão era impiedosa e as marcas no chão eram a unica trilha. Em cima de uma árvore nas proximidades, a besta preparava seu ataque, ela lambia seu beiços, limpando o resto de carne de seus dentes e afiando suas unhas contra a madeira molhada e podre, o animal prepara uma parte lisa da árvore e começa a escrever com suas unhas meladas de sangue: Era uma vez <br><br> em uma terra dos sonhos <br><br> eu pensei que poderia ser livre <br><br> mas agora a fome nunca dorme <br><br> Um lapso subito de memória faz a criatura perder a noção por um tempo. Ela logo volta para terminar o serviço";
        break;
      case "Verdadeira face do deus secreto":
        content = "Gasto: Livre <br> Requisito: Nenhum <br><br><br> No antigo Mausoléu Umebachi-Goryo, na vila destruída de Taishi, vocês fizeram uma descoberta incrivel, vocês libertaram uma nova força ao mundo, o Deus Secreto, absoluto em seu poder e supremo em sua sagacidade estará cada vez mais próximo de vocês, sintam seu poder correndo por tuas veias e vejam a natureza respirar e a energia se movimentar ";
        break;
      case "Vida resplendente de hinarashi-hime":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br><br><br> Existe muita especulação sobre a verdadeira localização do palácio do Dragão-Rei, alguns acreditam que o palácio fique em Munetsuchi, um lago localizado no centro do mundo, outros acreditam que o palácio fique localizado no litoral da fantástica ilha de Hourai, mas a verdade é que o palácio do Dragão-Rei sempre ficou na lua e aqueles que lá habitam são principes e princesas do nobre dragão <br><br> Ao comprar este foco, você ganha 5 pontos sazonais ";
        break;
      case "Koshi-Musume":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br><br><br> Usuyukisou (薄雪草) ou erva/grama de neve fina é o nome tipico para a flor Leontopodium japonicum, é uma flor tradicionalmente encontrada em montanhas, ela resiste ao frio intenso e retem sua água criando uma fina capa de gelo em volta de si. Algumas lendas contam que essa flor teria sido plantada originalmente por Tsukuyomi-no-Mikoto na terra como uma forma de simbolizar a conexão eterna entre a terra e a capital lunar <br><br> Ao comprar este foco, você se aproximará mais de sua forma alternativa, você estará no controle de suas ações enquanto a estiver controlando porém, você terá que escolher entre controlar os instintos animalescos ou deixar acontecer ";
        break;
      case "Contos de Niigata":
        content = "Gasto: 4 PF  <br> Requisito: Nenhum <br><br><br> Na província de Niigata, é dito que a Yuki Onna aparece como uma vampira da neve, assombrando as florestas nevadas e buscando se alimentar. Ela sobrevive sugando a energia vital do corpo humano. Onde ela então consegue extrair um composto chamado de seiki, para fazer isso, primeiro ela congela suas vitimas e então suga o seiki através da boca delas. <br><br> Ao comprar este foco, você poderá ganhar certos traços desta Yuki Onna, você se torna uma vampira capaz de drenar a energia vital latente dos outros, você consegue drenar stamina das pessoas e transformar em energia sazonal e mana ";
        break;
      case "Contos de Aomori":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br><br><br> Na província de Aomori, existe uma história de quando uma mulher vagava pela cidade no meio de uma nevasca, um casal viu sua pele pálida e gelada e então a chamou para entrar e ficar na frente da fogueira. Depois de um tempo a mulher queria sair de volta para continuar sua jornada, porém o homem não queria a deixar ir, ele pegou sua mão para que ela não abrisse a porta. Sua pele era gélida, calafrios percorreram o corpo do homem quando de repente a mulher se tornou um redemoinho de neve e fugiu da casa. <br><br> Ao comprar este foco, você adquire algumas característica desta Yuki Onna, sua pele passa a atingir tons de azul e ficar gélida, você ganha um modificador de +2 para se defender de ataques corpo a corpo e pode viajar distâncias curtas como um redemoinho de neve ";
        break;
      case "Contos de Yamagata":
        content = "Gasto: 4 <br> Requisito: Nenhum <br><br><br> Na província de Yamagata, existem histórias que contam que a Yuki-onna é uma princesa lunar, a história conta que a vida dela na capital lunar era cheia de luxurias, porém era muito entediante. Ela era fascinada pelo planeta terra, então, um dia ela fugiu da lua e caiu na terra viajando usando neve. Porém, ela ficou presa na terra, agora ela aparece em noites de lua cheia, tentando achar alguma forma de voltar. <br><br> Ao comprar este foco, você poderá adquirir certas características desta Yuki Onna, suas habilidades com o elemento lunar, mesmo aquelas possibilitadas pelo Kune-Kune ganharão ações bônus com componente sazonais ";
        break;
      case "Contos de Ibaraki":
        content = "Gasto: 4 <br> Requisito: Nenhum <br><br><br> Na província de Ibaraki, é dito que a Yuki-Onna busca travar uma conversa com suas vítimas, aqueles que ignorarem seu chamado serão arremessados de um penhasco enquanto aqueles que conversarem com ela serão congelados e depois mortos. <br><br> Ao comprar este foco, você poderá adquirir características dessa Yuki-Onna, seus dedos se tornarão gélidos e você conseguirá ver as pontas ficando cada vez mais pretas, você poderá congelar objetos pequenos apenas tocando neles, se você decidir usar esta habilidade gastando mana, você poderá congelar coisas maiores ";
        break;
      case "Contos de Tottori":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br><br><br> Na província de Tottori, é dito que a Yuki-Onna viaja usando o vento e aparece em dias onde a neve é mais leve, ela aparece balançando um gohei branco, quando ela vê alguém, ela chega para a pessoa pedindo água, se a pessoa oferecer água gelada, ela aumenta de tamanho, se a pessoa oferecer água quente, ela derrete e some. Ao comprar este foco, você consegue algumas características desta Yuki-Onna, você pode gerar cristais de gelo a partir das chamas em suas costas, estes cristais de gelo podem então ser transformados para formar qualquer coisa que você quiser e conseguir produzir desde armas até armaduras. ";
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
