"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

interface Item {
  icon: JSX.Element;
  title: string;
  link: string;
  description: string;
  imageLight: string;
}

const items: Item[] = [
  {
    icon: <HealthAndSafetyIcon />,
    title: 'Flow AI: Your Personalized Period Tracker',
    link: '/flow-ai',
    description:
      'Flow AI helps you track your cycle with precision, marking key dates and phases based on your inputs like last period date, cycle length, and PCOS/PCOD conditions. Receive tailored care suggestions for each phase to support your well-being throughout your menstrual journey.',
    imageLight: 'url("https://i.postimg.cc/sDJStL2d/International-Menstrual-Hygiene-Day-Instagram-Post.png")',
  },
  {
    icon: <MedicalInformationIcon />,
    title: 'Maitri AI: Your Menstrual Health Expert',
    link: '/maitri-ai',
    description:
      'Maitri AI offers expert guidance on female menstrual health, including periods, symptoms, solutions, related diseases like PCOS/PCOD, and debunking common myths. Ask Maitri anything about menstruation and receive reliable, professional advice tailored to your needs.',
    imageLight: 'url("https://i.postimg.cc/PxbQc8x7/Marketing-Promotions-Flyer-in-Pink-Red-White-Minimal-Illustration-Style.png")',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid size={{ xs:12, md:6}} >
          <div>
            <Typography
              variant="h4"
              style={{
                margin: '10px',
                color: '#242424',
                fontSize: '32px',
                fontFamily: 'Pacifico, cursive',
                fontWeight: 600,
                textTransform: 'capitalize',
                lineHeight: 1.5,
                letterSpacing: '0.13',
              }}
            >
              Your Helping Tools during Menstruation
            </Typography>
            <Typography
              variant="h6"
              style={{
                margin: '20px',
                color: '#242424',
                fontSize: '16px',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 400,
                letterSpacing: 0.32,
                wordWrap: 'break-word',
              }}
            >
               Flow AI and Maitri AI at your Service Madam!
            </Typography>
          </div>
          <Grid container  gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: selectedItemIndex === index ? 'primary.light' : '',
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: items[selectedItemIndex].imageLight,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                variant="h6"
                style={{
                  margin: '10px',
                  color: '#242424',
                  fontSize: '32px',
                  fontFamily: 'Pacifico, cursive',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  lineHeight: 1.5,
                  letterSpacing: '0.13',
                }}
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: '10px',
                  color: '#242424',
                  fontSize: '14px',
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 400,
                  letterSpacing: 0.32,
                  wordWrap: 'break-word',
                }}
              >
                {selectedFeature.description}
              </Typography>
              <Link
                href={selectedFeature.link}
                target="_blank"
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  margin: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description, link }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  backgroundColor: selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: selectedItemIndex === index ? 'white' : 'fuchsia',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box sx={{ color: 'fuchsia' }}>{icon}</Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography color="text.primary" variant="body2" fontWeight="bold">
                      {title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                      {description}
                    </Typography>
                    <Link
                      href={link}
                      target="_blank"
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          size={{ xs:12, md:6}}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 600,
                height: 500,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: items[selectedItemIndex].imageLight,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
