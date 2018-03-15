import campaignsData from './compaigns-stub-data';


function campaignsService () {

    this.get = (id) => {
        //Fetch data from API with ID param
        return Promise.resolve(campaignsData);
    }

    return this;
};

export default campaignsService;



