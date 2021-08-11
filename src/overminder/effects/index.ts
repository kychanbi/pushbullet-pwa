import axios from 'axios';
import constants from '../../constants';
const getPushes = async (accessToken: string) => {
  const headers = {'Access-Token':accessToken}
  await axios.get(`${constants.apiHost}/pushes`,{headers});
};
export {getPushes};
