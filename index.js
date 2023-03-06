function darkMode () {
    const body = document.querySelector('body');
    body.classList.toggle('dark-body'); 
}

function darkModeTitle () {
    const title = document.querySelector('.container-head');
    title.classList.toggle('dark-title');

    const h1 = document.querySelector('h1');
    h1.classList.toggle('dark-title');

    const h2 = document.querySelectorAll('p, h2');
    h2.forEach((h2) => {
        h2.classList.toggle('dark-paragraph');
    })
}

function darkModeItem () {
    const item = [...document.querySelectorAll('.item')];
    item.map((item) => {
        item.classList.toggle('dark-item');
    })
    
    // const paragraph = [...document.querySelectorAll('p')];
    // paragraph.map((paragraph) => {
    //     paragraph.classList.toggle('dark-paragraph');
    // })
}




const contentRef = document.querySelector('.container');


const animalInformation = [

    {
        img: './imagens/tiger.jpg',
        title: 'O tigre',
        content: `O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)
        pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador
        carnívoro e
        é a maior espécie de felino do mundo junto com o leão.`  
    },
    {
        img: './imagens/leon.jpg',
        title: 'O leão',
        content: `O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero
        gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África
        subsahariana
        (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da
        Índia.`
    },
    {
        img: './imagens/leopardo.jpg',
        title: 'O leopardo',
        content: `O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros
        felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso
        hióide que lhes permite rugir.
        É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra
        (melanista).`
    },
    {
        img: './imagens/pantera-negra.jpg',
        title: 'A pantera negra',
        content: `A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o
        leopardo (Panthera pardus) e a onça-pintada (Panthera onca).
        Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma
        variação negra destes animais.`
    },
    {
        img: './imagens/jaguar.jpg',
        title: 'O jaguar',
        content: `O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do
        gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também
        é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera
        leo).`
    },
    {
        img: './imagens/chita.jpg',
        title: 'O guepardo',
        content: `O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único
        representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre
        mais rápido
        do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.`
    }
]

animalInformation.forEach((animal) => {
    contentRef.innerHTML += `
        <div class="item">
            <img src="${animal.img}">
            <h2>${animal.title}</h2>
            <p>
                ${animal.content}
            </p>
        </div>    
    `
})

document.querySelector('#switchTheme').addEventListener('click', darkMode);
document.querySelector('#switchTheme').addEventListener('click', darkModeTitle);
document.querySelector('#switchTheme').addEventListener('click', darkModeItem);