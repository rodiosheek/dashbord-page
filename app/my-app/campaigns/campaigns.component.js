import campaignsTemplate from './campaigns.template.html';

class campaignsController {
    constructor(campaignsService, $stateParams, dashboardService) {
        //Stub
        this.campaignsService = campaignsService;
        this.dashboardService = dashboardService;
        this.campaign_id = $stateParams.id;
        //Name params not need, we can take compaign data from dashboardService 
        this.campaign_name = $stateParams.name;
    }

    $onInit() {
        this.campaignsService.get(this.campaign_id).then(data => this.data = data);
    }

}

campaignsController.$inject = ["campaignsService", "$stateParams", "dashboardService"];

let campaignsComponent = {
    template: campaignsTemplate,
    controller: campaignsController
}

export default campaignsComponent;
