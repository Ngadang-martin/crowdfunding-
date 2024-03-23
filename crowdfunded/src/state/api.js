import axios from 'axios'

axios.interceptors.request.use(function (config) {

    const token = window.localStorage.getItem('access_token')
    if (token && token !== '') {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  axios.defaults.baseURL = "http://localhost:8080/api"

  const api = {
      loginUser: (data) => axios.post('/signin',data),
      register: (account) => axios.post('/signup', account),
      catetgory: () => axios.get('/category'),
      projectBasic: (data) => axios.post('/project', data),
      projectReward: (data) => axios.post('/reward',data),
      userInfo:(id) => axios.get(`/singleUser/${id}`),
      team:(id,data) => axios.post(`/users/${id}`, data),
      userProject:(id) => axios.get(`/getUserProject/${id}`),
      projectFunding:(id, data) => axios.post(`projectfunding/${id}`,data),
      getUserProject:(id) => axios.get(`/getUserProject/${id}`),
      getProjectReward:(id) => axios.get(`/projectReward/${id}`),
      updatereward:(id, data) => axios.post(`/updateReward/${id}`, data),
      getProjectFunding:(id) => axios.get(`/getProjectFunding/${id}`),
      completeProjectData:() => axios.get('/getFundingAndProject'),
      SingleGetFundingAndProject:(id) => axios.get(`/SingleGetFundingAndProject/${id}`),
      insertProjectContent:(id, data) => axios.post(`/projectAsset/${id}`, data),
      getProjectContent: (id) => axios.get(`/projectAsset/${id}`)
  }

  export default api;