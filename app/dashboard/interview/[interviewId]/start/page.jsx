"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';

function startInterview({params}) {
    
    const [interViewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);

    useEffect(()=>{
        GetInterviewDetails();
    },[]);

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        const jsonMockResp=JSON.parse(result[0].jsonMockResp)
        console.log(jsonMockResp)
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);

        console.log('mockInterviewQuestion:', mockInterviewQuestion);
    };

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Questions */}
            <QuestionsSection mockInterviewQuestion={mockInterviewQuestion} />

            {/* video or audio recording */}

        </div>
    </div>
  )
}

export default startInterview