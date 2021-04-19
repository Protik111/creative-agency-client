import React, { useState, useEffect }  from 'react';
// import feedbackData from '../ServicesData/Feedback.json';
import FeedbackStyle from '../FeedbackStyle/FeedbackStyle';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Feedback = () => {
    // //inserting bulk data to Db
    // const handle = () =>{
    //     fetch('https://boiling-cove-02558.herokuapp.com/addFeedback', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(feedbackData)
    //     })
    // }
    const classes = useStyles();

    const [feedbackdb, setFeedback] = useState([]);
    useEffect(() => {
        fetch('https://boiling-cove-02558.herokuapp.com/showFeedbacks')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [])
    return (
        <div>
            <h5 className="text-center mt">Clients <span style={{color: '#7AB259'}}>Feedbacks</span></h5>
            <div className="row  d-flex justify-content-around hover">
                {
                    feedbackdb.length === 0 && <div className={classes.root}>
                    <LinearProgress />
                    <LinearProgress color="secondary" />
                  </div>
                }
                {
                    feedbackdb.map(feedback => <FeedbackStyle feedback={feedback}></FeedbackStyle>)
                }
                {/* <button onClick={handle}>add</button> */}
            </div>
        </div>
    );
};

export default Feedback;