import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './style.less';

export default function ListUser(){
    const [users, setUsers] = useState([]);

    
    function getRandomInt(max, min = 0) {
        return Math.floor(min + Math.random() * (max - min));
    }

    function getRandoDaysOfTheWeek(){
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let result = [];
        let max = getRandomInt(3, 1);

        for(let i = 0; i < max; i++){
            let index = getRandomInt(days.length);
            result.push(days[index]);
        }
        
        return result.join(', ');
    }
    
    function getNumberOfPosts(posts, user){
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
    
    function getRideInGroup(){
        const options = ['Always', 'Sometimes', 'Never'];
        let index = getRandomInt(options.length);

        return options[index];
    }

    function getDayOfTheWeek(){
        const options = ['Every day', 'Week days', 'Weekends', 'DAYS'];
        let index = getRandomInt(options.length);
        let result = options[index];

        if(result === 'DAYS') {
            return getRandoDaysOfTheWeek();
        }

        return result;
    }
    
    function mergeData(users, photos, albums, posts){
        users.forEach(user => {
            user.posts = getNumberOfPosts(posts, user);
            user.albums = getNumberOfAlbums(albums, user);
            user.photos = getNumberOfPhotos(user, albums, photos);
            user.rideInGroup = getRideInGroup();
            user.dayOfTheWeek = getDayOfTheWeek();
        });
        
        return users;
    }
    
    async function getUsers(){
        const userResponse = await api.get('/users');
        const photosResponse = await api.get('/photos');
        const albumsResponse = await api.get('/albums');
        const postsResponse = await api.get('/posts');
        
        const users = mergeData(userResponse.data, photosResponse.data, albumsResponse.data, postsResponse.data);

        setUsers(users);
    }

    function deleteUser(user){
        return users.filter(u => {
            return u.id != user.id;
        });
    }

    useEffect(() => {
        getUsers(); 
    }, []);

    return (
        <div className="user-list">
            <div className="user-list-header">
                <span className="user-list-title">Users</span>
                <span className="user-list-bar"></span>
                <input type="text" className="user-list-search" placeholder="Filter table content"/>
            </div>
            <table className="table">
                <thead>
                    <tr className="header-row">
                        <th className="header-cell">Username</th>
                        <th className="header-cell">Name</th>
                        <th className="header-cell">E-mail</th>
                        <th className="header-cell">City</th>
                        <th className="header-cell">Ride in group</th>
                        <th className="header-cell">Day of the week</th>
                        <th className="header-cell">Posts</th>
                        <th className="header-cell">Albums</th>
                        <th className="header-cell">Photos</th>
                        <th className="header-cell trash"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="table-row">
                            <td className="cell-standard">{user.username}</td>
                            <td className="cell-standard">{user.name}</td>
                            <td className="cell-standard">
                                <a className="email" href={`mailto:${user.email}`}>{user.email}</a> 
                            </td>
                            <td className="cell-standard green">{user.address.city}</td>
                            <td className="cell-standard">{user.rideInGroup}</td>
                            <td className="cell-standard">{user.dayOfTheWeek}</td>
                            <td className="cell-standard green">{user.posts}</td>
                            <td className="cell-standard green">{user.albums}</td>
                            <td className="cell-standard">{user.photos}</td>
                            <td className="cell-standard" onClick={() => setUsers(deleteUser(user))}>
                                <i className="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}