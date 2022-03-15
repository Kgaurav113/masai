import styled from "styled-components";

const Button = styled.button
`
   font-size:18px;
   padding:9px;
   margin: 25px;
   margin-top: 10%;
      background-color:${props=>
       props.id==="primary" ? "blue" : "white"
   };
   border:${props=>
    props.id==="default" ? "1px solid grey" : "none"
};
border:${props=>
    props.id==="dashed" ? "4px dotted grey" : ""
};
color:${props=>
    props.id==="link" ? "blue" : "black"
};
color:${props=>
    props.id==="primary" ? "white" : ""
};
`;
export {Button}