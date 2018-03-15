
function dashboardService () {
    this.indexes = [0,1,2,3,4,5,6];

    this.getStubData = () => {
        let campaigns = [];
        this.indexes.forEach(index => campaigns.push(__generate_stub_data(index)))
        return campaigns;
    };

    const __generate_stub_data = id => {
        return {
            id: id,
            name: `Random name ${id}`,
            type: 'Challenge',
            test: __random_numbers(1000)
        };
    };

    const __random_numbers = (char) =>  Math.round(Math.random() * char);

    return this;
};

export default dashboardService;
