import dashboardCardTemplate from './dashboard-card.template.html';

require('./dashboard-card.style.scss');

class dashboardCardController {
    constructor() {
        this.dividerColor = false;
    }

    $onInit() {
        this.__getDividerColor(this.campaign.type);
    }

    delete() {
        this.onDelete();
    }

    __getDividerColor(type) {
        if(!type) return;
        let style = type.split(' ')[0].toLowerCase();
        this.dividerColor = 'dashboard-card__divider--' + style;
    }
}


let dashboardCardComponent = {
    template: dashboardCardTemplate,
    controller: dashboardCardController,
    bindings: {
        campaign: '<',
        onDelete: '&',
    }
}

export default dashboardCardComponent;