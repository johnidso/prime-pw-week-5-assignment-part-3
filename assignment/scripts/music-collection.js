console.log('***** Music Collection *****')

let collection = [];

function addToCollection ( title, artist, yearPublished ) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
}

addToCollection( 'Kaputt', 'Destroyer', 2011 );
addToCollection( 'After the Gold Rush', 'Neil Young', 1970 );
addToCollection( 'Laughing Stock', 'Talk Talk', 1991 );
addToCollection( 'Master of Reality', 'Black Sabbath', 1971 );
addToCollection( 'Songs from the Big Chair', 'Tears for Fears', 1985 );
addToCollection( 'Deloused in the Comatorium', 'Mars Volta', 2003 );

console.log(collection);
