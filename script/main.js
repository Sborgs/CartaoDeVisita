// executa após carregar toda a página
window.onload = () => {
    // ativa o modo estrito do javascript
    'use strict';

    // verifica se o navegador suporta o Service Worker
    if ('serviceWorker' in navigator) {

        // registra o Service Worker no navegador
        navigator.serviceWorker
            .register('./sw.js');
    }

}