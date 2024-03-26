import Brief from "@components/Brief";
import { getQuestionList } from "@api/fastapi";
import React, { useState, useEffect } from 'react';


const Main = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestionList();
        setQuestions(res.data);
      } catch (error) {
        console.error("질문 목록을 가져오는 중 에러 발생:", error);
      }
    };
  
    fetchQuestions();
  }, []); 
  



  return (
    <>
      {/* <Brief/>
       */}
    </>
  );
};

export default Main;
