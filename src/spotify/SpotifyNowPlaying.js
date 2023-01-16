import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Stack,
  Image,
  Text,
  Link,
  Spinner,
} from "@chakra-ui/react";
import styled from "styled-components";
import getNowPlayingItem from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";

const BookImage = styled(Image)`
  margin: 0;
  padding: 0;
`;

const BooksGrid = () => {
  return (
    <Grid style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 90px)',
      gridTemplateRows: 'repeat(2, 130px)',
      gridColumnGap: 0,
      gridRowGap: 0,
    }}>
       <a href={"https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535419394l/4069._SX98_.jpg" alt="Man's Search for Meaning"/> 
      </a>
      <a href={"https://www.goodreads.com/book/show/27220736-shoe-dog"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736._SX98_.jpg" alt="Shoe Dog: A Memoir by the Creator of Nike" /> 
      </a>
      <a href={"https://www.goodreads.com/book/show/29779231-when-breath-becomes-air"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482891316l/29779231._SX98_.jpg" alt="When Breath Becomes Air" />
      </a>
      <a href={"https://www.goodreads.com/book/show/23346490-zero-to-one"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435515337l/23346490._SX98_.jpg" alt="Zero to One" />
      </a>
      <a href={"https://www.goodreads.com/book/show/17660462-the-everything-store"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631792766l/17660462._SX98_.jpg" alt="The Everything Store: Jeff Bezos and the Age of Amazon" />
      </a>
      <a href={"https://www.goodreads.com/book/show/18490.Frankenstein"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1381512375l/18490._SX98_.jpg" alt = "Frankenstein" />
      </a>
      <a href={"https://www.goodreads.com/book/show/41160292-exhalation"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534388394l/41160292._SX98_.jpg" alt="Exhalation"  />
      </a>
      <a href={"https://www.goodreads.com/book/show/40121378-atomic-habits"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378._SX98_.jpg" alt="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones" />
      </a>
      <a href={"https://www.goodreads.com/book/show/54814676-crying-in-h-mart"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601937850l/54814676._SX98_.jpg" alt="Crying in H Mart" />
      </a>
      <a href={"https://www.goodreads.com/book/show/54898389-the-almanack-of-naval-ravikant"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598011736l/54898389._SX98_.jpg" alt="The Almanack of Naval Ravikant: A Guide to Wealth and Happiness" />
      </a>
      <a href={"https://www.goodreads.com/book/show/4214.Life_of_Pi"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631251689l/4214._SX98_.jpg" alt="Life of Pi"  />
      </a>
      <a href={"https://www.goodreads.com/book/show/49552.The_Stranger"}  target="_blank">
      <BookImage src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590930002l/49552._SX98_.jpg" alt="When Breath Becomes Air" />
      </a>
     
    </Grid>
  );
}

const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <Center>
       <Text>Hey, I’m Wilson Lim Setiawan. I grew up in Singapore and am currently a 
        junior studying Computer Science at the <a href="https://www.youtube.com/watch?v=vPCLIFs6KwI" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}> University of Southern California</a>.</Text>
        <Text>Elsewhere:   <a href="https://github.com/WilsonLimSet" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}> WilsonLimSet</a> on GitHub, my full name on <a href="https://www.linkedin.com/in/wilsonlimsetiawan/" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}>LinkedIn</a>, wilsonlimsetiawan@gmail.com on email, and my <a href="https://drive.google.com/file/d/1HDtAPa7kIMSP3kFPy8znur1PIKGXnHy1/view?usp=sharing" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}> resume</a>.</Text> 
<br />
<Text>Things I'm involved with and areas of interest: </Text> 

  <ul style={{ paddingLeft: '60px' }}>
    <li><span style={{ fontWeight: 'bold' }}>Youtube.</span> Creating <a href="https://www.youtube.com/channel/UCH59qgZdA_fA5lTlmiQzNBQ" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}> content</a> that makes me content.</li>
    <li><span style={{ fontWeight: 'bold' }}>Developing.</span> Building <a href="https://stickergoals.xyz/" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}> Sticker</a>.</li>    
    <li><span style={{ fontWeight: 'bold' }}>Podcasting.</span> Learning from others to get <a href="https://open.spotify.com/show/7jDxgVTztsskpDLGuyORNJ?si=f6eaf639f0894aed" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}> 1% better</a>.</li>
    <li><span style={{ fontWeight: 'bold' }}>Culture.</span> Maintaining my <a href="https://usc-ssa.github.io/Singapore-Student-Association/" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}>Singaporean</a> and <a href="https://www.instagram.com/uscasis/?hl=en" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}>Indonesian</a> roots.</li>
    
    <li><span style={{ fontWeight: 'bold' }}>Hiking.</span> <a href="https://www.peaksandprofessors.org/" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}>Think Outside</a>.</li>
        <li><span style={{ fontWeight: 'bold' }}>Books.</span> I am currently reading <a href="https://www.goodreads.com/book/show/60321447-chip-war?ac=1&from_search=true&qid=iO9FUj9TGF&rank=1" 
        target="_blank"  style={{ color: 'blue', fontStyle: 'italic' , textDecoration: 'underline', 
        fontWeight: 'bold' }}>Chip War</a>.
        <br />
        These have had the greatest impact on my worldview.</li>
        <BooksGrid />
        
        
        
  </ul>

  <br />
      <Box width="xs">
        {loading ?
          <Stack align="center" mb={8}>
            <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
          </Stack>
          :
          <Stack width="full" mb={result.isPlaying ? 2 : 4} spacing={3}>
            <Stack spacing={2} direction="row" align="center">
              <SpotifyLogo />
              <Text fontWeight="semibold">{result.isPlaying ? 'Now playing' : "Currently offline"}</Text>
              {result.isPlaying && <PlayingAnimation />}
            </Stack>
            {result.isPlaying &&
              <Box p={2} borderRadius="lg" borderWidth={1}>
                <Stack direction="row" spacing={4} align="center">
                  <Image
                    alt={`${result.title} album art`}
                    src={result.albumImageUrl}
                    width={12}
                    height={12}
                    borderRadius="sm"
                  />
                  <Stack spacing={0} overflow="hidden">
                    <Link href={result.songUrl} target="_blank">
                      <Text
                        fontWeight="semibold"
                        width="full"
                        isTruncated
                        color="alph"
                      >
                        {result.title}
                      </Text>
                    </Link>
                    <Text
                      color="gray.500"
                      isTruncated
                    >
                      {result.artist}
                    </Text>
                    <Text></Text>
                  </Stack>
                </Stack>
              </Box>
            }
          </Stack>
        }
      </Box>
    </Center>
  )
};

export default SpotifyNowPlaying;

const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;