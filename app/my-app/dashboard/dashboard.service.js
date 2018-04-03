
function dashboardService () {

    this.types = [
        "Challenge",
        "Influencer campaign",
        "Giveaway"
    ];

    //By default return 7 itmes
    this.getStubData = (itmes_number = 7) => {
        let campaigns = [];
        while(itmes_number > 0) {
            campaigns.push(__generate_stub_data(itmes_number));
            itmes_number--;
        }
        //Fetch data from API
        return Promise.resolve(campaigns.sort((a,b) => a.id - b.id));
    };

    const __generate_stub_data = id => {
        let days_total = __random_numbers(100);
        let days_random = __random_numbers(100);
        let days_passed = days_random > days_total ? days_total : days_random;

        console.log( days_total, '/', days_random , '=', days_passed);

        return {
            id:                id,
            name:              `Random name ${id}`,
            type:              'Challenge',
            approved_comments: __random_numbers(10000),
            approved_likes:    __random_numbers(1000000),
            approved_posts:    __random_numbers(1000),
            influencers:       __random_numbers(100),
            days_passed:       days_passed,
            days_total:        days_total,
            is_featured:       true,
            num_of_artists:    __random_numbers(10),
            progress:          100,
            type:              this.types[__random_numbers(2)]
        };
    };

    const __random_numbers = (char) =>  Math.round(Math.random() * char);

    return this;
};

export default dashboardService;
