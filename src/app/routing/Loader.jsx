import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Container from '../components/layout/Container';
import PageWrapper from '../components/layout/PageWrapper';
import Description from '../components/typography/Description';

const RoutingLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <PageWrapper>
          <Container>
            <Description>Loading...</Description>
          </Container>
        </PageWrapper>
      }
    >
      {children}
    </Suspense>
  );
};

RoutingLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoutingLoader;
