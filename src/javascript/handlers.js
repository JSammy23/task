import dom from "./dom";

const handlers = (() => {
    function listenForClicks() {
        let projectIndex;
        let taskIndex;

        document.addEventListener('click', (event) => {
            const { target } = event;
            const modalMainTitle = document.querySelector('.modal-main-title');
            const selectedLink = document.querySelector('.selected-link');
            const linkIndex = parseInt(target.getAttribute('data-link-index'), 10);

            // Style selected link
            if (target.classList.contains('select')) {
                dom.selectLink(target, linkIndex)
                dom.changeMainTitle(target, linkIndex)
            };

        });

    };





    return {
        listenForClicks
    }

})();

export default handlers;