import Window from "./Window";
import useSWR from "swr";
import { useEffect, useState } from "react"
import { theme } from "../../tailwind.config";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function formatDuration(milliseconds) {
  let hours = 0,
    minutes = 0,
    seconds = 0;

  while (milliseconds >= 3600000) (milliseconds -= 3600000), hours++;
  while (milliseconds >= 60000) (milliseconds -= 60000), minutes++;
  while (milliseconds >= 1000) (milliseconds -= 1000), seconds++;

  return `${hours ? `${hours}:` : ""}${
    hours ? minutes.toString().padStart(2, "0") : minutes
  }:${seconds.toString().padStart(2, "0")}`;
}

export default function Spotify() {
  const { data, error } = useSWR(
    "https://api.lanyard.rest/v1/users/717991713695858719",
    fetcher,
    { refreshInterval: 1000 }
  );

  const spotify = data?.data.spotify;

  const colors = Object.keys(theme.colors.colors);

  const [timeElapsed, setTimeElapsed] = useState(spotify ? Date.now() - spotify.timestamps.start : 0);

  useEffect(() => {
    const interval = setInterval(() => setTimeElapsed(spotify ? Date.now() - spotify.timestamps.start : 0));
    return () => clearInterval(interval);
  })

  return (
    <Window
      title="Spotify"
      content={
        data && spotify ? (
          <div className="bg-Surface1 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 h-min">
            {spotify.album_art_url ? (
              <div className="w-24">
                <img src={spotify.album_art_url} className="rounded-lg" />
              </div>
            ) : (
              ""
            )}
            <div className="flex flex-col gap-3 justify-center sm:truncate">
              <div className="flex flex-col">
                <p className="">{spotify.song}</p>
                <p className="text-sm text-Subtext1 sm:truncate">{`${spotify.artist} on ${spotify.album}`}</p>
              </div>
              {spotify.timestamps ? (
                <div className="flex flex-row items-center text-sm text-Subtext0 gap-4">
                  <p>{formatDuration(timeElapsed)}</p>
                  <div className="h-2 rounded-full bg-colors-Lavender w-full sm:w-56 bg-opacity-30 relative">
                    <div
                      className="h-2 rounded-full bg-colors-Lavender w-[10%] relative"
                      style={{
                        width: `${Math.max(timeElapsed / (spotify.timestamps.end - spotify.timestamps.start) * 100, 4)}%`
                      }}
                    />
                  </div>
                  <p>{formatDuration(spotify.timestamps.end - spotify.timestamps.start)}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-Surface1 rounded-lg">
            Not listening to anything.
          </div>
        )
      }
    />
  );
}
