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
        
        <Button onClick={()=> window.location = '#projects'}>Resume</Button> 
        <SectionDivider colorAlt />
      </LeftSection>
      
    </Section>
    
  </>
);
//LEO upload the resume to a place and link it here!!!!!
export default Hero;