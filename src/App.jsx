import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ButtonSection from './components/sections/button-section';

/** 네비게이션 없이 UI 섹션들을 순차적으로 쌓아 보여주는 기본 레이아웃 */
function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 2, md: 4 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, md: 6 },
          py: 4,
        }}
      >
        <ButtonSection />
      </Container>
    </Box>
  );
}

export default App;
