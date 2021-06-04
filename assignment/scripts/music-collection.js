console.log('***** Music Collection *****')

let collection = [];

function addToCollection ( title, artist, yearPublished, trackList ) {
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
addToCollection( 'Paranoid', 'Black Sabbath', 1970 )

// adding tracks to collection objects

function addTrack( album, trackName, trackLength ) {
  for (let item of collection){
    if (album == item.title){
      item['trackName'] = trackName;
      item['trackLength'] = trackLength;
    } else {
      return false;
    }
  }
}

addTrack( 'Kaputt', 'Chinatown', '3:49' );


console.log(collection);

// update showCollection to display tracks appropriately

function showCollection(array) {
  console.log(array.length);
  for (let item of array) {
    console.log(item.title, 'by', item.artist, 'published in', item.yearPublished);
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
        if (criterion == item.title || criteria == item.artist || criteria == item.yearPublished) {
          results.push(item);
      }
    }
  }
  return results;
}

console.log(search(1970));
console.log(search('Laughing Stock', 'Paranoid'));

// update addToCollection, search, and showCollection to handle tracks
