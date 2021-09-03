import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies, from developing robot control code to web development.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CAD</ListTitle>
          <ListParagraph>
            Experiece with <br />
            AutoCad, Inventor <br />
            Fusion360, and Solidworks
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Html, CSS, React.js <br />
            and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Vision</ListTitle>
          <ListParagraph>
            Experience with <br />
            OpenCV for C++ <br />
            and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Tensorflow for python
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Robot Control</ListTitle>
          <ListParagraph>
            Experiece with <br />
            C++ for VEX hardware
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Embedded Dev</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Arduino, Raspberry pi, Roborio
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
