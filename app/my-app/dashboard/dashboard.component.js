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

    deleteCard(cardToDelete) {
        let index = this.campaigns.indexOf(cardToDelete);
        this.campaigns.splice(index, 1);
    }

}

dashboardController.$inject = [ "dashboardService" ];

let dashboardComponent = {
    template: dashboardTemplate,
    controller: dashboardController
}

export default dashboardComponent;
