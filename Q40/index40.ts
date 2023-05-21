/*
Exercise No 40:
Album: Write a function called make_album() that builds a Object 
describing a music album. The function should take in an artist name and an 
album title, and it should return a Object containing these two pieces of 
information. Use the function to make three dictionaries representing different 
albums. Print each return value to show that Objects are storing the 
album information correctly. 
Add an optional parameter to make_album() that allows you to store the 
number of tracks on an album. If the calling line includes a value for the number 
of tracks, add that value to the album’s Object. Make at least one new 
function call that includes the number of tracks on an album.
*/

function make_album(nameArt: string, title: string, tracks?: number) {
    if(tracks == 1) {
        let music_album = {
        art_name : `${nameArt}`,
        album_title : `${title}`,
        album_tracks : `${tracks}`
    };
     return music_album;
    }
   else {
        let music_album = {
        art_name : `${nameArt}`,
        album_title : `${title}`
    };
    return music_album;
   }
}

console.log(make_album(`Nusrat Fateh Ali Khan`, `Qawali`));
console.log(make_album(`Hafiz Tahir Qadri`, `Naats`));
console.log(make_album(`Arjith Singh`, `Songs`));
console.log(make_album(`Al Muqit`, `Nasheeds`, 1));