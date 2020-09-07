import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

function VideoItem({ VideoSelect, video }) {
  if (!video) return <h4>loading....</h4>;
  return (
    <Grid item xs={12} style={{ padding: "10px" }}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => VideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.default.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}
export default VideoItem;
