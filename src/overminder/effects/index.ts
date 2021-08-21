import axios from 'axios';
import constants from '../../constants';
const getPushes = async (accessToken: string) => {
  const headers = {'Access-Token':accessToken}
  try {
    const res = await axios.get(`${constants.apiHost}/pushes`, {headers});
    return res.data
  }catch (error){
    console.log(error.response)
    alert(error.response.data.error.message)
  }

};
export {getPushes};
