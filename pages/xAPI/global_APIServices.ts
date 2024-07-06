import { config } from "dotenv";
import * as https from "https";
//import axios from "axios"; //download axios package 

const agent : https.Agent = new https.Agent({reject : false});

class getGlobalResponse_Service {

async getAPIGlobalResponse() {
  let response : any ;
  let config : {} = {
    method : 'get',
    httpsAgent : agent ,
    url : https://www.polestar.com/
    headers : {
        'age': '18334' ,
        'cache-control': 'public, s-maxage=86400, max-age=0, must-revalidate',
        'cf-cache-status': 'HIT',
        'cf-ray': '89eaa23cc8ed936d-MAA',
        'date': 'Fri, 05 Jul 2024 22:01:27 GMT' ,
        'x-cache': 'Miss from cloudfront',
        'x-polestar-worker': '2'
    },
    data : DataTransfer
};
   response = await axios.get(config.url, data, config)
    return response;
 }

async validateGlobalServiceStatusCode() {
    let response = await this.getAPIGlobalResponse();
    await expect(response.status).toEqual(200)
}




}


export default new getGlobalResponse_Service ();
