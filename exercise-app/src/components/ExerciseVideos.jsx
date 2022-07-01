import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#7C3AED", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise Videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flex-wrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            target="blank"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
