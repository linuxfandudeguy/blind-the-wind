import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 text-black">
      <div className="mb-4">
        <Link href="/" className="text-black font-bold hover:underline">Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-4"> The Most Mysterious Song on the Internet</h1>

      <h2 className="text-2xl font-semibold mt-6">Origins (1984)</h2>
      <p>
        Around the year 1984, a German teenager named Darius S. recorded a song onto a BASF Chromdioxid II 90 cassette tape from the German radio station Norddeutscher Rundfunk (NDR). This song appeared on a tracklist alongside other songs but was labeled &quot;Blind the Wind,&quot; with a &quot;?&quot; indicating the artist was unknown.
      </p>

      <h2 className="text-2xl font-semibold mt-6">2004-2017: Beginnings on the Internet</h2>
      <h3 className="text-xl font-semibold mt-4">Unknown Pleasures</h3>
      <p>
        For his birthday in 2004, Darius&apos;s sister, Lydia, purchased him a website domain named Unknown Pleasures, inspired by the Joy Division album of the same name. Darius digitized his old radio recordings and used the website to aid in his search for several mysterious songs, including &quot;Old Ned&quot; by Blue in Heaven.
      </p>

      <h3 className="text-xl font-semibold mt-4">bluuue/Anton Riedel Era</h3>
      <p>
        On March 18, 2007, Lydia uploaded the first 1:15 seconds of the song to the Usenet group de.rec.musik.recherche. She continued her search on spiritofradio.ca and best-of-80s.de under the pseudonym Anton Riedel and the username bluuue. The snippet gradually spread across the internet, reaching WatZatSong in 2009 and YouTube in 2011.
      </p>

      <h2 className="text-2xl font-semibold mt-6">2017-Spring 2019: Gabriel Vieira Expands the Search</h2>
      <p>
        On September 20, 2017, the Spanish independent record label Dead Wax Records uploaded Anton&apos;s snippet of the song to YouTube. In early 2019, it caught the attention of Gabriel Vieira, a friend of Nicolás Zúñiga (the owner of Dead Wax), who shared the snippet across several Reddit subs, coining the phrase &quot;The Most Mysterious Song on the Internet.&quot; On June 30, 2019, the subreddit r/TheMysteriousSong was founded. That day, the subreddit discovered the original post from bluuue and other forum posts, which led to the speculation that the song was likely aired on an NDR show called Musik für Junge Leute. They reached out to the show&apos;s DJ, Paul Baskerville, for potential leads. However, links to the full version were found on older forums but did not work due to the file-sharing websites Lydia used being defunct by 2019.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Winter 2019 - Fall 2020: Media Coverage and Lydia Rejoins</h2>
      <p>
        On July 9, 2019, YouTuber Justin Whang discussed the search for the song in his series Tales From the Internet. After the video was posted, Reddit user u/johnnymetoo, who had followed Lydia&apos;s original search on Usenet, revealed he had downloaded the complete song in 2007 and shared it on r/TheMysteriousSong. Later that month, Gabriel Vieira contacted Paul Baskerville, who expressed no familiarity with the song but showed interest in playing it on his new show, Nachtclub. This led to the identification of another mysterious song, &quot;On the Roof,&quot; but unfortunately, &quot;Blind the Wind&quot; did not have the same luck. After Paul played it on Nachtclub, he received negative feedback from listeners.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Winter 2020-Present: NDR Playlists</h2>
      <p>
        In July 2020, Reddit user u/flexxonmobil obtained a list of all the songs played by Paul Baskerville on Musik für Junge Leute from 1982 to 1984. While &quot;Blind the Wind&quot; was not found on these lists, Lydia reached out to an archivist at NDR for more playlists. They discovered all the songs played from 1982 to 1984, but &quot;Blind the Wind&quot; was still absent. As of February 2021, Darius is exploring 1984 playlists from other shows, including Der Club, Nachtclub, and No Wave.
      </p>

      <h2 className="text-2xl font-semibold mt-6">10 KHz Line</h2>
      <p>
        In December 2020, spectrogram analysis revealed that &quot;Blind the Wind&quot; had been played on NDR, identified by a 10 kHz line present in the recording that matched other NDR recordings. This confirmed that the 10 kHz line did not originate from the tape deck used to record Darius&apos;s tapes, as he also recorded from other stations, such as the Dutch station Hilversum, which did not have the 10 kHz line.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Fall 2024: Possible Identification</h2>
      <p>
        On November 4, 2024, the song was tentatively identified as &quot;Subways Of Your Mind&quot; by FEX. A Reddit user, u/marijn1412, discovered an old newspaper article in the Nordwest Zeitung archive while researching Hörfest bands. The article detailed the band FEX from Kiel, and after reaching out to them, u/marijn1412 received old material from the band, including a song called &quot;Subways Of Your Mind,&quot; which was confirmed to be the same as &quot;Blind the Wind.&quot; The song was later registered with GEMA, though this identification remained unconfirmed and required further verification.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Fall 2024: Identification</h2>
      <p>
        The verification of the song&apos;s identification comes from a recording posted by the channel jcorsen, which features audio from a live concert performance of &quot;Subways Of Your Mind&quot; shortly after the song&apos;s discovery.
      </p>
    </div>
  );
};

export default About;
