import React from 'react';


const ParagraphList = ({list}) => {
    const pList = list.map( (elem, index) => { return <p key={index}> {elem}</p> });
    return pList;
}

export default ParagraphList;