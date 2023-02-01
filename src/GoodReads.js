import React from 'react';
import {
    Grid,
    Image,
  } from "@chakra-ui/react";
import styled from "styled-components";
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
export default BooksGrid;