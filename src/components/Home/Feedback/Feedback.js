import React from 'react';
import feedbackData from '../ServicesData/Feedback.json';
import FeedbackStyle from '../FeedbackStyle/FeedbackStyle';

const Feedback = () => {
    return (
        <div>
            <h5 className="text-center mt">Clients <span style={{color: '#7AB259'}}>Feedbacks</span></h5>
            <div className="row  d-flex justify-content-around hover">
                {
                    feedbackData.map(feedback => <FeedbackStyle feedback={feedback}></FeedbackStyle>)
                }
            </div>
        </div>
    );
};

export default Feedback;