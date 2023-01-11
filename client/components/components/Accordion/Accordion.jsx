import React, { useState } from 'react';

import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { chapters } from "../../../utils/chapters";
import Link from "next/link";




const Wrap = styled.div`

  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  text-align: center;
  cursor: pointer;
  h5 {
font-weight: 500;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
    color: #fff;

  }

`;

const Dropdown = styled.div`
  background:#FFB100;
//   color: #00ffb9;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
//   border-bottom: 1px solid #fff;
//   border-top: 1px solid #fff;
& a{
padding: 5px;
}
`;

const Accordion = ({title, duration, descr}) => {
  const [clicked, setClicked] = useState(false);
  

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: '18px' }}>
      {/* <AccordionSection> */}
        {/* <Container> */}
        {chapters.map((item, index) => {
                        return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h5>{title} - ({duration})</h5>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <Link href="#">{description}</Link>

                  </Dropdown>
                ) : null}
              </>
            );
          })}
        {/* </Container> */}
      {/* </AccordionSection> */}
    </IconContext.Provider>
  );
};

export default Accordion;