console.log('***** Music Collection *****')

let collection = [];
let trackList = [];
let tracks = [];

function addToCollection ( title, artist, yearPublished, tracks ) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }
  collection.push(album);
  return album;
}

// **********

function listTrack(albumName, trackNumber, trackName, trackLength){
  track = {
    trackName: trackName,
    trackNumber: trackNumber,
    trackLength: trackLength,
    albumName: albumName
  }
  trackList.push(track)
}
// populate tracklist with tracks

listTrack( 'Kaputt', 1, 'Chinatown', '3:49' );
listTrack( 'Kaputt', 2, 'Blue Eyes', '4:07' );
listTrack( 'Laughing Stock', 1, 'Myrrhman', '5:33' );
listTrack( 'Laughing Stock', 2, 'Ascension Day', '6:00' );

console.log(trackList);

function loadTracks(album) {
  tracks = [];
  for (let item of trackList){
    if (item.albumName == album){
      tracks.push(item);
    }
  }
}

loadTracks('Kaputt');
console.log(tracks);

// Adding tracks for 'Kaputt' and 'Laughing Stock' to test functionality

// Add 6 albums to your collection. Console.log each album as added using the returned value.
console.log(addToCollection( 'Kaputt', 'Destroyer', 2011, tracks));
console.log(addToCollection( 'After the Gold Rush', 'Neil Young', 1970 ));
loadTracks('Laughing Stock');
console.log(addToCollection( 'Laughing Stock', 'Talk Talk', 1991, tracks));
console.log(addToCollection( 'Master of Reality', 'Black Sabbath', 1971 ));
console.log(addToCollection( 'Songs from the Big Chair', 'Tears for Fears', 1985 ));
console.log(addToCollection( 'Deloused in the Comatorium', 'Mars Volta', 2003 ));
console.log(addToCollection( 'Paranoid', 'Black Sabbath', 1970 ));
// After all are added, console.log the collection array.
console.log(collection);

// Add a function named showCollection
// update showCollection to display tracks appropriately

function showCollection(array) {
  console.log(array.length);
  for (let item of array) {
    console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}`, item.tracks);
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
// update search to include trackName criteria

function search(...criteria) {
  let results = [];
  for (let criterion of criteria) {
    for (let item of collection){
        if (criterion == item.title || criterion == item.artist
          || criterion == item.yearPublished ) {
            // I'm having a lot of trouble figuring out how to reference my
            // tracks array within the collection array. that's preventing me
            // from finishing the search step of the stretch goal here.
            // all the nested arrays that I felt I needed don't seem possible
            // to reference within if statements. Is there something I'm missing?
          results.push(item);
        }
      }
    }
    return results;
  }

console.log(collection['tracks']);
console.log(search(1970));
console.log(search('Laughing Stock', 'Paranoid'));
console.log(search('Chinatown'))

// update addToCollection, search, and showCollection to handle tracks
