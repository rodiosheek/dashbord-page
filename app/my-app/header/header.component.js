import headerTemplate from './header.template.html';

let headerComponent = {
    template: headerTemplate,
    controller: function() {
        this.button = 'Dashboard';
    }
}

export default headerComponent;
