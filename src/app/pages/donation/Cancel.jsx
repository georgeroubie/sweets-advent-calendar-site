import { useNavigate } from 'react-router-dom';
import Container from '../../components/layout/Container';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Title from '../../components/typography/Title';

const CancelDonation = () => {
  const navigate = useNavigate();

  function onBackHandler() {
    navigate('/');
  }

  return (
    <PageWrapper>
      <Container>
        <Title onBack={onBackHandler}>No worries</Title>
        <Description>
          You changed your mind for the donation and that's fine. <br />
          Those who can’t change their minds can’t change anything.
        </Description>
      </Container>
    </PageWrapper>
  );
};

export default CancelDonation;
