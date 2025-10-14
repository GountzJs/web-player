// const BUTTON_PLAY = document.getElementById("play-button");
// const OVERLAY_PLAY = document.getElementById("overlay-play");
// const ID_MAIN = "UCvqRdlKsE5Q8mf8YXbdIJLw";
// const ID_CAM = "UCy7lny2Flbq6FAb7cv8eG0Q";

// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var players = {};
// var isPlaying = false;

// function onYouTubeIframeAPIReady() {
//   // players["main"] = new YT.Player("main-player", {
//   //   height: "100%",
//   //   width: "100%",
//   //   videoId: "",
//   //   playerVars: {
//   //     autoplay: 0,
//   //     controls: 0,
//   //     disablekb: 1,
//   //     enablejsapi: 1,
//   //     fs: 0,
//   //     iv_load_policy: 3,
//   //     modestbranding: 1,
//   //     playsinline: 1,
//   //     rel: 0,
//   //     showinfo: 0,
//   //   },
//   //   events: {
//   //     onReady: onMainReady,
//   //     onStateChange: onMainStateChange,
//   //   },
//   // });

//   // players["cam"] = new YT.Player("cam-player", {
//   //   height: "150",
//   //   width: "250",
//   //   videoId: "",
//   //   playerVars: {
//   //     autoplay: 1,
//   //     controls: 0,
//   //     disablekb: 1,
//   //     enablejsapi: 1,
//   //     fs: 0,
//   //     iv_load_policy: 3,
//   //     modestbranding: 1,
//   //     playsinline: 1,
//   //     rel: 0,
//   //     showinfo: 0,
//   //   },
//   //   events: {
//   //     onReady: onCamReady,
//   //     onStateChange: onCamStateChange,
//   //   },
//   // });
// }

// const onMainReady = () => {
//   console.log("Reproductor principal listo");

//   // players["main"].loadVideoByUrl({
//   //   mediaContentUrl:
//   //     "https://www.youtube.com/embed/live_stream?channel=" + ID_MAIN,
//   // });
// };

// const onMainStateChange = (event) => {
//   console.log("Estado del reproductor:", event.data);
// };

// const onCamReady = () => {
//   console.log("Reproductor de cámara listo");

//   if (
//     !players["cam"].getVideoData() ||
//     !players["cam"].getVideoData().video_id
//   ) {
//     const iframe = players["cam"].getIframe();
//     iframe.src =
//       "https://www.youtube.com/embed/live_stream?channel=" +
//       ID_CAM +
//       "&enablejsapi=1";
//   }
// };

// const onCamStateChange = (event) => {
//   console.log("Estado del reproductor:", event.data);
// };

// const validatePlayerMain = () => {
//   // if (!players["main"]) return;
//   // if (isPlaying) {
//   //   players["main"].pauseVideo();
//   //   OVERLAY_PLAY.classList.remove("none");
//   // } else {
//   //   players["main"].unMute();
//   //   players["main"].setVolume(10);
//   //   if (
//   //     !(
//   //       !players["main"].getVideoData() ||
//   //       !players["main"].getVideoData().video_id
//   //     )
//   //   ) {
//   //     players["main"].playVideo();
//   //     OVERLAY_PLAY.style.display = "none";
//   //   }
//   // }
// };

// const validatePlayerCam = () => {
//   if (!players["cam"]) return;

//   if (isPlaying) {
//     players["cam"].pauseVideo();
//     OVERLAY_PLAY.classList.remove("none");
//   } else {
//     players["cam"].unMute();
//     players["cam"].setVolume(100);
//     if (
//       !(
//         !players["cam"].getVideoData() ||
//         !players["cam"].getVideoData().video_id
//       )
//     ) {
//       players["cam"].playVideo();
//       OVERLAY_PLAY.style.display = "none";
//     }
//   }
// };

// BUTTON_PLAY.addEventListener("click", () => {
//   // validatePlayerMain();
//   validatePlayerCam();
// });
