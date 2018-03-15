import dashboardTemplate from './dashboard.template.html';

class dashboardController {
    constructor(dashboardService) {
        //Stub service
        this.dashboardService = dashboardService;
        this.campaigns = [];
        //Show by itemLimit itmes
        this.itemLimit = 7;
    }

    $onInit() {
        this.dashboardService.getStubData(20).then(data => this.campaigns = data);
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
