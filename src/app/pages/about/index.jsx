import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/layout/Container';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Subtitle from '../../components/typography/Subtitle';
import Title from '../../components/typography/Title';

const Hyperlink = styled.a`
  text-decoration: underline;
  display: inline-block;
`;

const About = () => {
  const navigate = useNavigate();

  function onBackHandler() {
    navigate('/');
  }

  return (
    <PageWrapper>
      <Container>
        <Title onBack={onBackHandler}>About</Title>
        <Subtitle>Info</Subtitle>
        <Description>An advent calendar with desert recipes.</Description>
        <Subtitle>Recipes</Subtitle>
        <Description>
          The recipes are not mine, I found them online in this site:&nbsp;
          <Hyperlink href="https://akispetretzikis.com/" target="_blank" rel="noreferrer">
            akispetretzikis.com
          </Hyperlink>
          . In each recipe, you will find the URL of the original recipe.
        </Description>
        <Subtitle>Privacy</Subtitle>
        <Description>This site does not use any kind of cookies or tracking.</Description>
        <Subtitle>Code</Subtitle>
        <Description>
          You can find the code of this website on my GitHub page. If you like it give the repository a star on&nbsp;
          <Hyperlink
            href="https://github.com/georgeroubie/sweets-advent-calendar-site"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Hyperlink>
          .
        </Description>
        <Subtitle>Creator</Subtitle>
        <Description>
          My name is George Roubie and you can follow me on&nbsp;
          <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank" rel="noreferrer">
            LinkedIn
          </Hyperlink>
          ,&nbsp;
          <Hyperlink href="https://george-roubie.medium.com" target="_blank" rel="noreferrer">
            Medium
          </Hyperlink>
          ,&nbsp;
          <Hyperlink href="https://codepen.io/georgeroubie" target="_blank" rel="noreferrer">
            Codepen
          </Hyperlink>
          &nbsp;and&nbsp;
          <Hyperlink href="https://github.com/georgeroubie" target="_blank" rel="noreferrer">
            GitHub
          </Hyperlink>
          .
        </Description>
      </Container>
    </PageWrapper>
  );
};

export default About;
