import campaignsTemplate from './campaigns.template.html';

class campaignsController {
    constructor(campaignsService) {
        //Stub
        this.campaignsService = campaignsService;
    }

    $onInit() {
        //get stub data form service
        this.campaignsService.get().then(data => this.data = data);
    }

}

campaignsController.$inject = ["campaignsService"];

let campaignsComponent = {
    template: campaignsTemplate,
    controller: campaignsController
}

export default campaignsComponent;
