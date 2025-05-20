import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProjectCard, { Project } from './ProjectCard';
import kkcImg from '../assets/kkc.jpeg';
import nutritionTrackerImg from '../assets/nutrition-tracker-thumbnail.jpeg';
import readSleepEatRepeatImg from '../assets/resp1.png';

const projects: Project[] = [
  {
    title: `Krazy Kats Club`,
    image: kkcImg,
    description: `KrazyKatsClub is your one place to mint your KrazyKats_NFT and join an amazing group of NFT and crypto enthusiasts.`,
    tech: [`Gatsby`, `JavaScript`, `Styled Components`, `Netlify`],
    url: `https://krazykatsclub.com/`,
  },
  {
    title: `Nutrition Tracker`,
    tech: [`React`, `TypeScript`, `Nodejs`, `Graphql`, `Apollo Graphql`, `Mongodb`, `Semantic UI`],
    source: `https://github.com/athomasjr/fitness-app`,
    description: `A Nutrition tracker built in TypeScript with MongoDb, Express, React, GraphQL and the Food Center API.`,
    image: nutritionTrackerImg,
  },
  {
    title: `Read Sleep Eat Repeat`,
    tech: [`Gatsby`, `JavaScript`, `Styled Components`, `Netlify`],
    description: `A blog to check out books that are worth reading and books to skip with honest feedback from Read Eat Sleep Repeat`,
    image: readSleepEatRepeatImg,
    url: `https://www.readsleepeatrepeat.com/`,
  },
];

export default function OtherProjects() {
  return (
    <Stack spacing={{ xs: 2, md: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          color: `primary.main`,
          fontWeight: 700,
          textAlign: `center`,
          fontSize: { xs: `2rem`, md: `2.5rem` },
        }}
      >
        Other Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid size={{ xs: 12, md: 6 }} key={project.title}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
