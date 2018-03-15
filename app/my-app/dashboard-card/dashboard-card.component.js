import dashboardCardTemplate from './dashboard-card.template.html';

require('./dashboard-card.style.scss');

class dashboardCardController {
    constructor() {
        
    }

    $onInit() {
        
    }
}

let dashboardCardComponent = {
    template: dashboardCardTemplate,
    controller: dashboardCardController,
    bindings: {
        campaign: '<'
    }
}

export default dashboardCardComponent;