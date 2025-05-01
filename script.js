const seletorCurriculo = document.getElementById('seletor-curriculo');
const curriculoDiv = document.getElementById('curriculo');

/* json */
fetch('idioma.json')
    .then(response => response.json())
    .then(data => {
        /* apresentação */
        const apresentacao = document.querySelector('.apresentacao');
        apresentacao.innerHTML = "Me chamo <span class='nome'></span> e sou movido pela transformação que a tecnologia é capaz de gerar no mundo real. Atualmente, com <span class='idade'></span> anos, estou cursando <span class='curso'></span> na <span class='ensino-superior'></span>, em <span class='local'></span>. Desde o primeiro contato com a programação, enxerguei mais do que uma habilidade técnica: encontrei uma forma concreta de resolver problemas de forma criativa e eficiente. Minha trajetória é marcada pela busca incessante por domínio técnico pensamento crítico e entrega de soluções práticas. Tenho experiência sólida no desenvolvimento web, onde aprofundei habilidades em estruturação de interfaces, integração de sistemas e otimização de aplicações. Atualmente atuo como <span class='cargo'>desenvolvedor front-end</span>, com uma transição planejada e estratégica para o fullstack, ampliando minha atuação para o back-end e arquitetura de sistemas. Minha missão é evoluir como um profissional completo, pronto para construir produtos de alto impacto e entrega resultados que façam diferença de verdade no mercado de trabalho.";

        /* idioma */
        const imagemBandeira = document.querySelector('.flag-icon');
        const seletorSite = document.getElementById('idiomaSite');

        /* options idioma */
        const seletorBr = document.querySelector('.site-seletor-br');
        const seletorUs = document.querySelector('.site-seletor-us');
        const seletorEs = document.querySelector('.site-seletor-es');

        /* options curriculo idioma */
        const curriculoPt = document.querySelector('.seletor-pt');
        const curriculoEn = document.querySelector('.seletor-en');
        const curriculoEs = document.querySelector('.seletor-es');

        /* nav */
        const navSobre = document.querySelector('.nav-sobre')
        const navExp = document.querySelector('.nav-exp')
        const navContato = document.querySelector('.nav-contato')

        /* títulos */
        const bemVindoTitulo = document.querySelector('.bem-vindo');
        const quemTitulo = document.querySelector('.quem-sou');
        const objetivoTitulo = document.querySelector('.objetivo-principal');
        const experienciaTitulo = document.querySelector('.experiencias');
        const projetosTitulo = document.querySelector('.projetos');
        const tecnologiasTitulo = document.querySelector('.tecnologias');
        const curriculoTitulo = document.querySelector('.curriculo-titulo');
        const contatoTitulo = document.querySelector('.contatos');
        const aprendendoTitulo = document.querySelector('.aprendendo-titulo');

        /* sobre */
        const foto = document.querySelector('.foto-apresentacao');

        /* experiência */
        const exp = document.querySelector('.experience');

        /* projetos */
        const projetos = document.querySelector('.projeto');

        /* objetivos */
        const objetivo = document.querySelector('.objetivo');

        /* tecnologias */
        const skills = document.querySelector('.skills');

        /* aprendendo */
        const aprendizado = document.querySelector('.learning');

        /* desenvolvido por */
        const desenvolvedor = document.querySelector('.desenvolvido');

        function idiomaDoSite(site) {
            switch (site) {

                /* Português */
                case 'br':

                    /* nav*/
                    imagemBandeira.src = data.portugues.bandeira.brasil;
                    navSobre.innerHTML = "Sobre";
                    navExp.innerHTML = "Experiência";
                    navContato.innerHTML = "Contato";

                    /* opções de idioma */
                    seletorBr.innerHTML = "Português";
                    seletorUs.innerHTML = "Inglês";
                    seletorEs.innerHTML = "Espanhol";

                    /* opcões de idioma do curriculo*/
                    curriculoPt.innerHTML = "Português";
                    curriculoEn.innerHTML = "Inglês";
                    curriculoEs.innerHTML = "Espanhol";

                    /* títulos */
                    bemVindoTitulo.innerHTML = data.portugues.titulos.bemVindo;
                    quemTitulo.innerHTML = data.portugues.titulos.quemSou;
                    objetivoTitulo.innerHTML = data.portugues.titulos.objetivo;
                    experienciaTitulo.innerHTML = data.portugues.titulos.experiencia;
                    projetosTitulo.innerHTML = data.portugues.titulos.projetos;
                    tecnologiasTitulo.innerHTML = data.portugues.titulos.tecnologias;
                    curriculoTitulo.innerHTML = data.portugues.titulos.curriculo;
                    contatoTitulo.innerHTML = data.portugues.titulos.contato;
                    aprendendoTitulo.innerHTML = data.portugues.titulos.learning;

                    /* sobre */
                    foto.src = data.portugues.imagem;
                    apresentacao.innerHTML = `Meu nome é <span>${data.portugues.nome}</span> e sou movido pela transformação que a tecnologia é capaz de gerar no mundo real. Atualmente, com <span>${data.portugues.age}</span> anos, estou cursando <span>${data.portugues.curso}</span> na <span>${data.portugues.faculdade}</span>, em <span>${data.portugues.location}</span>. Desde o meu primeiro contato com programação, vislumbrei mais do que uma habilidade técnica: encontrei uma forma concreta de resolver problemas de forma criativa e eficiente. Minha trajetória é marcada pela busca incessante por domínio técnico, pensamento crítico e entrega de soluções práticas. Possuo sólida experiência em desenvolvimento web, onde aprofundei habilidades em estruturação de interfaces, integração de sistemas e otimização de aplicações. Atualmente, atuo como <span>${data.portugues.cargo}</span>, com uma transição planejada e estratégica para fullstack, expandindo minha atuação para back-end e arquitetura de sistemas. Minha missão é evoluir como um profissional completo, pronto para construir produtos de alto impacto e entregar resultados que façam a diferença no mercado de trabalho.`;

                    /* experiência */
                    exp.innerHTML = data.portugues.experiences.join("<br>");

                    /* objetivos */
                    objetivo.innerHTML = data.portugues.goals;

                    /* tecnologias */
                    skills.innerHTML = data.portugues.skills.join("<br>");

                    /* projetos */
                    projetos.innerHTML = data.portugues.projects.join("<br>");

                    /* aprendendo */
                    aprendizado.innerHTML = data.portugues.learning.join("<br>");

                    /* desenvolvido por */
                    desenvolvedor.innerHTML = data.portugues.titulos.desenvolvido;
                    break;

                /* inglês */
                case 'us':

                    /* nav */
                    imagemBandeira.src = data.portugues.bandeira.eua;
                    navSobre.innerHTML = "About";
                    navExp.innerHTML = "Experience";
                    navContato.innerHTML = "Contact";

                    /* opções de idioma */
                    seletorBr.innerHTML = "Portuguese";
                    seletorUs.innerHTML = "English";
                    seletorEs.innerHTML = "Spanish";

                    /* opcões de idioma do curriculo*/
                    curriculoPt.innerHTML = "Portuguese";
                    curriculoEn.innerHTML = "English";
                    curriculoEs.innerHTML = "Spanish";

                    /* títulos */
                    bemVindoTitulo.innerHTML = data.ingles.titles.welcome;
                    quemTitulo.innerHTML = data.ingles.titles.whoamI;
                    objetivoTitulo.innerHTML = data.ingles.titles.objective;
                    experienciaTitulo.innerHTML = data.ingles.titles.experience;
                    projetosTitulo.innerHTML = data.ingles.titles.projects;
                    tecnologiasTitulo.innerHTML = data.ingles.titles.technologies;
                    curriculoTitulo.innerHTML = data.ingles.titles.resume;
                    contatoTitulo.innerHTML = data.ingles.titles.contact;
                    aprendendoTitulo.innerHTML = data.ingles.titles.learning;

                    /* sobre */
                    foto.src = data.portugues.imagem;
                    apresentacao.innerHTML = `My name is <span>${data.ingles.name}</span> and I am driven by the transformation that technology can generate in the real world. Currently, at <span>${data.ingles.age}</span> years old, I am studying <span>${data.ingles.major}</span> at <span>${data.ingles.university}</span>, in <span>${data.ingles.location}</span>. Since my first contact with programming, I envisioned more than a technical skill: I found a concrete way to solve problems in a creative and efficient way. My trajectory is marked by the relentless search for technical mastery, critical thinking and delivery of practical solutions. I have solid experience in web development, where I deepened my skills in interface structuring, systems integration and application optimization. I currently work as a <span>${data.ingles.position}</span>, with a planned and strategic transition to fullstack, expanding my work to back-end and systems architecture. My mission is to evolve as a complete professional, ready to build high-impact products and deliver results that make a difference in the job market.`;

                    /* objetivos */
                    objetivo.innerHTML = data.ingles.goals;

                    /* experiência */
                    exp.innerHTML = data.ingles.experiences.join("<br>");

                    /* projetos */
                    projetos.innerHTML = data.ingles.projects.join("<br>");

                    /* tecnologias */
                    skills.innerHTML = data.ingles.skills.join("<br>");

                    /* aprendendo */
                    aprendizado.innerHTML = data.ingles.learning.join("<br>");

                    /* desenvolvedor */
                    desenvolvedor.innerHTML = data.ingles.titles.developed;
                    break;

                /* Espanhol */
                case 'es':

                    /* nav */
                    imagemBandeira.src = data.portugues.bandeira.espanha;
                    navSobre.innerHTML = "Bio";
                    navExp.innerHTML = "Experiencia";
                    navContato.innerHTML = "Contacto";

                    /* opções de idioma */
                    seletorBr.innerHTML = "Portugués";
                    seletorUs.innerHTML = "Inglés";
                    seletorEs.innerHTML = "Español";

                    /* opcões de idioma do curriculo*/
                    curriculoPt.innerHTML = "Portugués";
                    curriculoEn.innerHTML = "Inglés";
                    curriculoEs.innerHTML = "Español";

                    /* Títulos */
                    bemVindoTitulo.innerHTML = data.espanhol.titulos.bienvenido;
                    quemTitulo.innerHTML = data.espanhol.titulos.quienSoy;
                    objetivoTitulo.innerHTML = data.espanhol.titulos.objetivo;
                    experienciaTitulo.innerHTML = data.espanhol.titulos.experiencia;
                    projetosTitulo.innerHTML = data.espanhol.titulos.proyectos;
                    tecnologiasTitulo.innerHTML = data.espanhol.titulos.tecnologías;
                    curriculoTitulo.innerHTML = data.espanhol.titulos.curriculum;
                    contatoTitulo.innerHTML = data.espanhol.titulos.contacto;
                    aprendendoTitulo.innerHTML = data.espanhol.titulos.aprendiendo;

                    /* sobre */
                    foto.src = data.portugues.imagem;
                    apresentacao.innerHTML = `Mi nombre es <span>${data.espanhol.nombre}</span> y me impulsa la transformación que la tecnología es capaz de generar en el mundo real. Actualmente, con <span>${data.espanhol.edad}</span> años, estoy estudiando <span>${data.espanhol.carrera}</span> en la <span>${data.espanhol.facultad}</span>, en <span>${data.espanhol.ubicacion}</span>. Desde mi primer contacto con la programación, vi más que una habilidad técnica: encontré una forma concreta de resolver problemas de forma creativa y eficiente. Mi carrera está marcada por la búsqueda incansable del dominio técnico, el pensamiento crítico y la entrega de soluciones prácticas. Tengo una sólida experiencia en desarrollo web, donde he profundizado mis habilidades en estructuración de interfaces, integración de sistemas y optimización de aplicaciones. Actualmente trabajo como <span>${data.espanhol.rol}</span>, con una transición planificada y estratégica a fullstack, ampliando mi trabajo a back-end y arquitectura de sistemas. Mi misión es evolucionar como un profesional completo, listo para construir productos de alto impacto y entregar resultados que marquen la diferencia en el mercado laboral.`;

                    /* objetivos */
                    objetivo.innerHTML = data.espanhol.objetivos;

                    /* experiência */
                    exp.innerHTML = data.espanhol.experiencias.join("<br>");

                    /* projetos */
                    projetos.innerHTML = data.espanhol.proyectos.join("<br>");

                    /* tecnologias */
                    skills.innerHTML = data.espanhol.habilidades.join("<br>");

                    /* aprendendo */
                    aprendizado.innerHTML = data.espanhol.aprendiendo.join("<br>");

                    /*desenvolvido por */
                    desenvolvedor.innerHTML = data.espanhol.titulos.desarrollado;
                    break;

                /* Padrão --- Português */
                default:

                    /* nav*/
                    imagemBandeira.src = data.portugues.bandeira.brasil;
                    navSobre.innerHTML = "Sobre";
                    navExp.innerHTML = "Experiência";
                    navContato.innerHTML = "Contato";

                    /* opções de idioma */
                    seletorBr.innerHTML = "Português";
                    seletorUs.innerHTML = "Inglês";
                    seletorEs.innerHTML = "Espanhol";

                    /* opcões de idioma do curriculo*/
                    curriculoPt.innerHTML = "Português";
                    curriculoEn.innerHTML = "Inglês";
                    curriculoEs.innerHTML = "Espanhol";

                    /* títulos */
                    bemVindoTitulo.innerHTML = data.portugues.titulos.bemVindo;
                    quemTitulo.innerHTML = data.portugues.titulos.quemSou;
                    objetivoTitulo.innerHTML = data.portugues.titulos.objetivo;
                    experienciaTitulo.innerHTML = data.portugues.titulos.experiencia;
                    projetosTitulo.innerHTML = data.portugues.titulos.projetos;
                    tecnologiasTitulo.innerHTML = data.portugues.titulos.tecnologias;
                    curriculoTitulo.innerHTML = data.portugues.titulos.curriculo;
                    contatoTitulo.innerHTML = data.portugues.titulos.contato;

                    /* sobre */
                    foto.src = data.portugues.imagem;
                    apresentacao.innerHTML = `Meu nome é <span>${data.portugues.nome}</span> e sou movido pela transformação que a tecnologia é capaz de gerar no mundo real. Atualmente, com <span>${data.portugues.age}</span> anos, estou cursando <span>${data.portugues.curso}</span> na <span>${data.portugues.faculdade}</span>, em <span>${data.portugues.location}</span>. Desde o meu primeiro contato com programação, vislumbrei mais do que uma habilidade técnica: encontrei uma forma concreta de resolver problemas de forma criativa e eficiente. Minha trajetória é marcada pela busca incessante por domínio técnico, pensamento crítico e entrega de soluções práticas. Possuo sólida experiência em desenvolvimento web, onde aprofundei habilidades em estruturação de interfaces, integração de sistemas e otimização de aplicações. Atualmente, atuo como <span>${data.portugues.cargo}</span>, com uma transição planejada e estratégica para fullstack, expandindo minha atuação para back-end e arquitetura de sistemas. Minha missão é evoluir como um profissional completo, pronto para construir produtos de alto impacto e entregar resultados que façam a diferença no mercado de trabalho.`;

                    /* experiência */
                    exp.innerHTML = data.portugues.experiences.join("<br>");

                    /* objetivos */
                    objetivo.innerHTML = data.portugues.goals;

                    /* tecnologias */
                    skills.innerHTML = data.portugues.skills.join("<br>");

                    /* projetos */
                    projetos.innerHTML = data.portugues.projects.join("<br>");

                    /* aprendendo */
                    aprendizado.innerHTML = data.portugues.learning.join("<br>");

                    /* desenvolvido por */
                    desenvolvedor.innerHTML = data.portugues.titulos.desenvolvido;
            }
        }

        seletorSite.addEventListener('change', () => {
            idiomaDoSite(seletorSite.value);
        });
        idiomaDoSite(seletorCurriculo.value);
    });

function idiomaDoCurriculo(idioma) {
    let nomeArquivo = '';
    let idiomaTexto = '';
    // Decidir o nome do arquivo com base no idioma selecionado
    switch (idioma) {
        case 'pt':
            nomeArquivo = 'curriculos/português/CV_Bryan-M-Almeida_Dev_PT.pdf';
            idiomaTexto = `Currículo (PT)`;
            break;
        case 'en':
            nomeArquivo = 'curriculos/inglês/CV_Bryan-M-Almeida_Dev_EN.pdf';
            idiomaTexto = 'resume (EN)';
            break;
        case 'es':
            nomeArquivo = 'curriculos/espanhol/CV_Bryan-M-Almeida_Dev_ES.pdf';
            idiomaTexto = 'Curriculum (ES)';
            break;
        default:
            nomeArquivo = 'curriculo-pt.pdf'; // Default para português
            idiomaTexto = `Currículo (PT)`;
    }
    // Inserir o link de download no div
    curriculoDiv.innerHTML = `
            <a href="${nomeArquivo}"  class="botao-curriculo">
                📄 ${idiomaTexto}
            </a>
        `;
}
seletorCurriculo.addEventListener('change', (e) => {
    idiomaDoCurriculo(e.target.value);
});
idiomaDoCurriculo(seletorCurriculo.value);