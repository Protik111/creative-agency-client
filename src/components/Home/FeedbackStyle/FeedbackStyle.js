import React from 'react';

const FeedbackStyle = (props) => {
    const {id, name, designation, description, image} = props.feedback;
    return (
        <div class="card col-md-3 mt-5 pt-3">
        <div class="d-flex">
            <div>
                <img class="mt-2 rounded mx-auto d-block" style={{width: '100px', height: '100px'}} src={image} alt="Card image cap"></img>
            </div>
            <div class="card-title mt-4 ml-4">
                <h6 class="card-title"><strong>{name}</strong></h6>
                <p>{designation}</p>
            </div>
        </div>
        <div class="card-body text-center">
           <p class="card-text">{description}</p>
       </div>
   </div>
    );
};

export default FeedbackStyle;