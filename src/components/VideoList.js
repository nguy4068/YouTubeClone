import React from "react";
import { Grid } from "@material-ui/core";
import VideoDetails from "./VideoDetails";
import VideoItem from "./VideoItem";
function VideoList({ listOfVideo, onVideoSelect }) {
  return (
    <Grid container>
      <VideoItem VideoSelect={onVideoSelect} video={listOfVideo[1]} />
      <VideoItem VideoSelect={onVideoSelect} video={listOfVideo[2]} />
      <VideoItem VideoSelect={onVideoSelect} video={listOfVideo[3]} />
      <VideoItem VideoSelect={onVideoSelect} video={listOfVideo[4]} />
    </Grid>
  );
}
export default VideoList;
