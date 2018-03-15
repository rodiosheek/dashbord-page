import campaignsTemplate from './campaigns.template.html';

class campaignsController {
    constructor(campaignsService) {
        //Stub
        this.campaignsService = campaignsService;
    }

    $onInit() {
        
    }

}

campaignsController.$inject = ["campaignsService"];

let campaignsComponent = {
    template: campaignsTemplate,
    controller: campaignsController
}

export default campaignsComponent;
