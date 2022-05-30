import { Container } from '@mui/material';

type ContainerProps = {
  children: React.ReactNode;
};

export const ContentContainer = ({ children }: ContainerProps) => (
  <Container
    maxWidth={false}
    sx={({ palette }) => ({
      backgroundColor: palette.background.default,
      minHeight: 'calc(100vh - 4rem)',
    })}
  >
    <Container maxWidth="xl" sx={{ padding: '1rem 0' }}>
      {children}
    </Container>
  </Container>
);
