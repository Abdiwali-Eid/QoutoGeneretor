import React from 'react'

const quetoe = ({content, date,author}) => {
  return (
    <div>
        {/* <h1>{props.content}</h1> 
        <span>{props.date}</span><br/>
        <span>{props.author}</span> */}
         <h1>{content}</h1> 
        <span>{date}</span><br/>
        <span>{author}</span>
       

    </div>
  )
}

export default quetoe