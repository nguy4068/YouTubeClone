import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import VideoDetails from "./components/VideoDetails";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  handleSubmit = async (searchTerm) => {
    const respond = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyA82Hd2ZvvpGYnIAKHmpYA65Ki0Y2cTUuY",
        q: searchTerm,
      },
    });
    this.setState({
      video: respond.data.items,
      selectedVideo: respond.data.items[0],
    });
    console.log(this.state.selectedVideo);
  };
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList
                listOfVideo={this.state.video}
                onVideoSelect={this.onVideoSelect}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
