import headerTemplate from './header.template.html';

class headerController {
    constructor() {
        this.button = 'Dashboard';
    }
}


let headerComponent = {
    template: headerTemplate,
    controller: headerController
}

export default headerComponent;
