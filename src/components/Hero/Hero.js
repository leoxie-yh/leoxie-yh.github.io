import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>        
        <SectionTitle main center>
          <b>Leo Xie</b> <br />
          Electrical and Robotics Engineer
        </SectionTitle>
        <SectionText>
        Avid robotics developer and control developer
        </SectionText>
        
        <Button onClick={()=> {window.location.href = 'https://drive.google.com/file/d/1dkJFg1Jc2smzwNi2h3MnAOUi1rgBlr8f/view?usp=sharing/'}}>Resume!</Button>
       
        <SectionDivider colorAlt />

      </LeftSection> 
      
    </Section>
    
  </>
);
//LEO upload the resume to a place and link it here!!!!!
export default Hero;