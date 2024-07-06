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
    url : 'https://www.polestar.com/'
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
    await expect(response.status).toEqual(304)
}

async validateBackendURLServiceStatusCode() {
    let response = await this.getAPIGlobalResponse();
    await expect(response.status).toEqual(200)
}
async getBackendURLResponse() {
    let response : any ;
    let config : {} = {
      method : 'get',
      httpsAgent : agent ,
      url : 'https://reqres.in/api/users?page=2'
      headers : {
        'access-control-allow-origin':' * ',
        'age': '5817',
        'cache-control': 'max-age=14400',
        'cf-cache-status': 'HIT',
        'cf-ray': '89edb37f1899a902-MAA'
        'content-encoding': 'br',
        'date': 'Sat, 06 Jul 2024 06:57:32 GMT '
      },
      data : DataTransfer
  };
     response = await axios.get(config.url, data, config)
      return response;
   }






}


export default new getGlobalResponse_Service ();
