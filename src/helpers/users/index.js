export function mergeData(users, photos, albums, posts) {
    users.forEach(user => {
        user.posts = getNumberOfPosts(posts, user);
        user.albums = getNumberOfAlbums(albums, user);
        user.photos = getNumberOfPhotos(user, albums, photos);
        user.rideInGroup = getRideInGroup();
        user.daysOfTheWeek = getDayOfTheWeek();
    });
    
    return users;
}

function getNumberOfPosts(posts, user) {
    return posts.filter(post => post.userId === user.id).length;
}

function getNumberOfAlbums(albums, user) {
    return albums.filter(album => album.userId === user.id).length;
}

function getNumberOfPhotos(user, albums, photos) {
    let userAlbumList = albums.filter(album => album.userId === user.id);
    let numPhotos = 0;
    userAlbumList.forEach(album => {
        numPhotos += photos.filter(photo => photo.albumId === album.id).length;
    });
    return numPhotos;
}

function getRideInGroup() {
    const options = ['Always', 'Sometimes', 'Never'];
    let index = getRandomInt(options.length);
    return options[index];
}

function getDayOfTheWeek() {
    const options = ['Every day', 'Week days', 'Weekends', 'DAYS'];
    let index = getRandomInt(options.length);
    let result = options[index];
    if (result === 'DAYS') {
        return getRandoDaysOfTheWeek();
    }
    return result;
}

function getRandoDaysOfTheWeek() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let result = [];
    let max = getRandomInt(3, 1);
    for (let i = 0; i < max; i++) {
        let index = getRandomInt(days.length);
        result.push(days[index]);
    }
    return result.join(', ');
}

function getRandomInt(max, min = 0) {
    return Math.floor(min + Math.random() * (max - min));
}