import dashboardCardTemplate from './dashboard-card.template.html';

require('./dashboard-card.style.scss');

let dashboardCardComponent = {
    template: dashboardCardTemplate,
    controller: function() {
        this.title = 'dashboardCardComponent --';
    }
}

export default dashboardCardComponent;