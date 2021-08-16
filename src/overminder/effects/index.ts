import axios from 'axios';
import constants from '../../constants';
const getPushes = async (accessToken: string) => {
  const headers = {'Access-Token':accessToken}
  const res = await axios.get(`${constants.apiHost}/pushes`,{headers});
  return res.data
};
export {getPushes};
