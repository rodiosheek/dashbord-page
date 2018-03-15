
require('./dashboard-card-item.style.scss');

let dashboardCardItemComponent = {
    template: `
            <div flex layout="column" layout-align="center" class="card-item">
                <div class="md-body-1 description">{{ $ctrl.title }}</div>
                <div class="md-headline">{{ $ctrl.count }}</div>
            </div>
    `,
    bindings: {
        title: '<',
        count: '<'
    }
}

export default dashboardCardItemComponent;