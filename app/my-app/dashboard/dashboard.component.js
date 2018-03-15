import dashboardTemplate from './dashboard.template.html';

class dashboardController {
    constructor(dashboardService) {
        //Stub
        
        this.dashboardService = dashboardService;
        this.campaigns = [];
    }

    $onInit() {
        this.campaigns = this.dashboardService.getStubData();
    }

}

dashboardController.$inject = [ "dashboardService" ];

let dashboardComponent = {
    template: dashboardTemplate,
    controller: dashboardController
}

export default dashboardComponent;
