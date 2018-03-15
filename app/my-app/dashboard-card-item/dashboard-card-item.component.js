
require('./dashboard-card-item.style.scss');

let dashboardCardItemComponent = {
    template: `
            <div flex layout="column" layout-align="center" class="card-item">
                <div class="md-caption description">{{ $ctrl.title }}</div>
                <div class="md-title card-item__count">{{ $ctrl.count }}</div>
            </div>
    `,
    bindings: {
        title: '<',
        count: '<'
    }
}

export default dashboardCardItemComponent;