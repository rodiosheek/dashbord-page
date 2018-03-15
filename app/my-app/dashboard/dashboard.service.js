
function dashboardService () {
    this.indexes = [0,1,2,3,4,5,6];

    this.getStubData = () => {
        let campaigns = [];
        this.indexes.forEach(index => campaigns.push(this.__generate_stub_data(index)))
        return campaigns;
    };

    this.__generate_stub_data = id => {
        return {
            id: id,
            name: `Random name ${id}`,
            type: 'Challenge'
        };
    };

    return this;
};

export default dashboardService;