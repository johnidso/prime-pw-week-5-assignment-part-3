console.log('***** Music Collection *****')

let collection = [];
let tracks = [];

function addToCollection ( title, artist, yearPublished, tracks ) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }
  collection.push(album);
}

// adding tracks to collection objects

function trackLoader( album, trackNumber, trackName, trackLength ) {
    tracks.push(`
${trackNumber}. ${trackName}: ${trackLength}`);
}


// creating a function to clear my track loader between albums.
// I spent some time thinking about how I could do this programmatically but
// after a lot of trial and error settled on this, which still meets the criteria

function clearLoader() {
  tracks = [];
}

// Adding tracks for 'Kaputt' and 'Laughing Stock' to test functionality

trackLoader( 'Kaputt', 1, 'Chinatown', '3:49' );
trackLoader( 'Kaputt', 2, 'Blue Eyes', '4:07' );
addToCollection( 'Kaputt', 'Destroyer', 2011, tracks );
clearLoader();
addToCollection( 'After the Gold Rush', 'Neil Young', 1970 );
trackLoader( 'Laughing Stock', 1, 'Myrrhman', '5:33' );
trackLoader( 'Laughing Stock', 2, 'Ascension Day', '6:00' );
addToCollection( 'Laughing Stock', 'Talk Talk', 1991, tracks );
clearLoader();
addToCollection( 'Master of Reality', 'Black Sabbath', 1971 );
addToCollection( 'Songs from the Big Chair', 'Tears for Fears', 1985 );
addToCollection( 'Deloused in the Comatorium', 'Mars Volta', 2003 );
addToCollection( 'Paranoid', 'Black Sabbath', 1970 )

console.log(tracks);

console.log(collection);

// update showCollection to display tracks appropriately

function showCollection(array) {
  console.log(array.length);
  for (let item of array) {
    console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}
${item.tracks}`);
  }
}

showCollection(collection);

function findByArtist(artist) {
  let results = [];
  for (let item of collection) {
    if (item.artist == artist){
      results.push(item);
      }
    }
    return results;
  }
// I wasn't sure if I was supposed to return the entire album or just the
// artist name within results. I felt that the entire album was more meaningful
// so I went with that.

console.log('Should discover two album results:', findByArtist('Black Sabbath'));
console.log('Not in array, should be empty:', findByArtist('Rush'));

// STRETCH GOALS
//update search to include trackName criteria

function search(...criteria) {
  let results = [];
  for (let criterion of criteria) {
    for (let item of collection){
        if (criterion == item.title || criterion == item.artist
          || criterion == item.yearPublished ) { // I seemingly can't
            // get the search working without re-engineering my code to include
            // another level of objects
          results.push(item);
      }
    }
  }
  return results;
}

console.log(search(1970));
console.log(search('Laughing Stock', 'Paranoid'));
console.log(search('Chinatown'))

// update addToCollection, search, and showCollection to handle tracks
