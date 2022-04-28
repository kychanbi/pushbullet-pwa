import axios from 'axios';
import constants from '../../constants';
import {PushType} from '../../types/Push';

const getApi = async (accessToken: string, subPath: string) => {
  const headers = {'Access-Token': accessToken};
  try {
    const res = await axios.get(constants.apiHost + subPath, {headers});
    return res.data;
  } catch (error) {
    console.log(error.response);
    alert(error.response.data.error.message);
  }
};
// const postApi = async (accessToken: string, subPath : string) => {
//   const headers = {'Access-Token':accessToken}
//   try {
//     const res = await axios.get(constants.apiHost+subPath, {headers});
//     return res
//   }catch (error){
//     console.log(error.response)
//     alert(error.response.data.error.message)
//   }
// };

const getPushes = async (accessToken: string) => {
  return getApi(accessToken, '/pushes');
};

const getDevices = async (accessToken: string) => {
  return getApi(accessToken, '/devices');
};

const sendPush = async (
  accessToken: string,
  data: PushType,
  deviceIden: string,
) => {
  const subPath = '/pushes';
  const headers = {'Access-Token': accessToken};
  try {
    const res = await axios.post(
      constants.apiHost + subPath,
      {...data, device_iden: deviceIden},
      {headers},
    );
    return res;
  } catch (error) {
    console.log(error.response);
    alert(error.response.data.error.message);
  }
};
export {getPushes, getDevices, sendPush};
