import dashboardTemplate from './dashboard.template.html';

class dashboardController {
    constructor(dashboardService) {
        //Stub
        this.dashboardService = dashboardService;
        this.campaigns = [];
        
        this.itemLimit = 7;
    }

    $onInit() {
        this.campaigns = this.dashboardService.getStubData(20);
    }

    showMore() {
        this.itemLimit += 7;
    } 

}

dashboardController.$inject = [ "dashboardService" ];

let dashboardComponent = {
    template: dashboardTemplate,
    controller: dashboardController
}

export default dashboardComponent;
