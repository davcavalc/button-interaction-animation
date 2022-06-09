const criaBotao = () => {
    let botao = document.querySelector('.button');
    botao.innerHTML = `
    
        <span class="text">Submit</span>
        <i class="las la-check"></i>
    
    `;
};

criaBotao();