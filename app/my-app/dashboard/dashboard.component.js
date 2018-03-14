import dashboardTemplate from './dashboard.template.html';

let dashboardComponent = {
    template: dashboardTemplate,
    controller: function() {
        this.title = 'Dashbord';
    }
}

export default dashboardComponent;
