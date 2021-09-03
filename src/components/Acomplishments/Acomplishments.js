import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2021, text: 'VRC World Champion'},
  { number: 20, text: 'Robotics Related Awards', },
  { number: 4, text: 'International Worlds Qualified Events', },
  { number: 1, text: 'Github Stars', },
];

//the last one we gotta add something 




const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
          

        </Box>
      ))}
    </Boxes>
   



 
  </Section>

        



);

export default Acomplishments;
