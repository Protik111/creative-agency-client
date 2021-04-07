import React, { useState, useEffect }  from 'react';
// import feedbackData from '../ServicesData/Feedback.json';
import FeedbackStyle from '../FeedbackStyle/FeedbackStyle';

const Feedback = () => {
    // //inserting bulk data to Db
    // const handle = () =>{
    //     fetch('http://localhost:5000/addFeedback', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(feedbackData)
    //     })
    // }

    const [feedbackdb, setFeedback] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/showFeedbacks')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [])
    return (
        <div>
            <h5 className="text-center mt">Clients <span style={{color: '#7AB259'}}>Feedbacks</span></h5>
            <div className="row  d-flex justify-content-around hover">
                {
                    feedbackdb.map(feedback => <FeedbackStyle feedback={feedback}></FeedbackStyle>)
                }
                {/* <button onClick={handle}>add</button> */}
            </div>
        </div>
    );
};

export default Feedback;