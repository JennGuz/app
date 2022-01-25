import axios from '../../axios';

const host = `${process.env.BREATHECODE_HOST}/v1`;
const breathecode = {
  auth: () => {
    const url = `${host}/auth`;
    return {
      login: (payload) => axios.post(`${url}/login/`, { ...payload, user_agent: 'bc/student' }),
      me: () => axios.get(`${url}/user/me`),
      isValidToken: (token) => axios.get(`${url}/token/${token}`),
      register: (payload) => axios.post(`${url}/user/register`, payload),
    };
  },
  admissions: () => {
    const url = `${host}/admissions`;
    return {
      me: () => axios.get(`${url}/user/me`),
    };
  },

  syllabus: () => {
    const url = `${host}/admissions`;
    return {
      get: (academyVersion = '4', slug, version = '1') => {
        if (!slug) throw new Error('Missing slug');
        else return axios.get(`${url}/academy/${academyVersion}/syllabus/${slug}/version/${version}`);
      },
    };
  },

  todo: () => {
    const url = `${host}/assignment`;
    return {
      getTaskByStudent: () => axios.get(`${url}/user/me/task`),
      // add: (id, args) => axios.post(url+'/user/'+id+'/task', args);
      // delete: (args) => axios.delete(`${url}/user/${user_id}/task/${args.id}`, args);
      update: (args) => axios.put(`${url}/task/${args.id}`, args),
    };
  },

  cohort: () => {
    const url = `${host}/admissions/academy`;
    return {
      getStudents: (cohortId) => axios.get(`${url}/cohort/user?role=STUDENT&cohorts=${cohortId}`),
    };
  },

  // Error 404: "Missing academy_id parameter expected for the endpoint url or 'Academy' header"
  // assignments: () => {
  //   const url = `${host}/assignment`;
  //   return {
  //     get: () => axios.get(`${url}/user/me/task`),
  //   };
  // },
};

export default breathecode;
