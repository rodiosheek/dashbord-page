import socialNetFilterTemplate from './social-network-filter.template.html';

require('./social-network-filter.component.scss');

class socialNetFilterController {
    constructor() {
        this.networks = [
            {
                id: 0,
                active: true,
                title: 'instagram'
            },
            {
                id: 1,
                active: false,
                title: 'youtube'
            },
            {
                id:2,
                active: false,
                title: 'facebook'
            },
            {
                id:3,
                active: false,
                title: 'twitter'
            },
        ];
    }

    filterBy(network) {
        this.networks.map(net => net.active = net.id == network.id ? true : false);
    }
}


let socialNetFilterComponent = {
    template: socialNetFilterTemplate,
    controller: socialNetFilterController
}

export default socialNetFilterComponent;
