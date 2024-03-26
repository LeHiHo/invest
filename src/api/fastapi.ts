import client from './client';


export const getQuestionList = async () => {
  const res = await client.get(`/api/question/list`);
  return res;
};