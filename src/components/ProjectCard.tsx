import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Chip } from '@mui/material';
import { Typography } from '@mui/material';

import { Card, CardContent, CardMedia } from '@mui/material';
export type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  source?: string;
  url?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={`Project ${project.title} Thumbnail`}
        sx={{
          height: 200,
          objectFit: `cover`,
        }}
      />
      <CardContent sx={{ flexGrow: 1, display: `flex`, flexDirection: `column`, gap: 2 }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ color: `primary.main`, fontWeight: 700, lineHeight: 1.2 }}
        >
          {project.title}
        </Typography>
        <Typography component="p" variant="body1" sx={{ flexGrow: 1, lineHeight: 1.6 }}>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={2}>
          {project.tech.map(tech => (
            <Chip
              key={tech}
              label={tech}
              variant="outlined"
              size="small"
              color="primary"
              sx={{
                textTransform: `none`,
                borderColor: `primary.main`,
                color: `primary.main`,
              }}
            />
          ))}
        </Stack>
        <>
          {project.source && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: `none`,
                alignSelf: `flex-start`,
                px: 3,
                py: 1,
              }}
            >
              Source Code
            </Button>
          )}
          {project.url && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: `none`,
                alignSelf: `flex-start`,
                px: 3,
                py: 1,
              }}
            >
              Visit Site
            </Button>
          )}
        </>
      </CardContent>
    </Card>
  );
}
