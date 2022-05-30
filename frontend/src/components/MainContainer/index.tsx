import { ContentContainer } from '../ContentContainer';
import { Header } from '../Header';

type ContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: ContainerProps) => (
  <>
    <Header />
    <ContentContainer>{children}</ContentContainer>
  </>
);
