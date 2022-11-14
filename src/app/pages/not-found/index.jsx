import { useNavigate } from 'react-router-dom';
import Container from '../../components/layout/Container';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Title from '../../components/typography/Title';

const NotFound = () => {
  const navigate = useNavigate();

  function onBackHandler() {
    navigate('/');
  }

  return (
    <PageWrapper>
      <Container>
        <Title onBack={onBackHandler}>Oops :(</Title>
        <Description>The page you are looking for does not exist!</Description>
      </Container>
    </PageWrapper>
  );
};

export default NotFound;
