import axios from 'axios';

const createApiCall = async (url) => {
  let cancelToken;

  if (cancelToken) {
    cancelToken.cancel('Duplicate request detected');
  }

  cancelToken = axios.CancelToken.source();

  try {
    const response = await axios.get(url, {
      cancelToken: cancelToken.token,
    });
    console.log(response);
    return response;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request Cancle', error.message);
    }
    console.log(error);
  }
};

export const testApiCall = async (url) => {
  const resp = await axios.get(url);
  console.log(resp);
};

export default createApiCall;
