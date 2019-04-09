import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// const address = 'TBA';
const instnace = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), address);

export default instnace;
