import React, { Component } from 'react';

import api from '../../services/api';

const defaultValue = () => null;

const { Provider, Consumer } = React.createContext(defaultValue);

class UserConsumer extends Component {
	render() {
		return <Consumer>{this.props.children}</Consumer>;
	}
}

class UserProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			usersBackup: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
		this.filterUsers = this.filterUsers.bind(this);
	}

	componentDidMount() {
		this.getUsers();
	}

	async getUsers() {
		const userResponse = await api.get('/users');
		const photosResponse = await api.get('/photos');
		const albumsResponse = await api.get('/albums');
		const postsResponse = await api.get('/posts');
		const users = this.mergeData(userResponse.data, photosResponse.data, albumsResponse.data, postsResponse.data);
		this.setState({ users });
		this.setState({ usersBackup: users });
	}

	filterUsers(searchText){
		let users = [];

		if(!searchText || /^\s*$/.test(searchText)) {
			users = this.state.usersBackup;
		} else {
			users = this.state.usersBackup.filter(({ name, username }) => {
				return name.includes(searchText) || username.includes(searchText);
			});
		}
		this.setState({ users });
	}

	deleteUser(user) {
		const users = this.state.users.filter(u => {
			return u.id != user.id;
		});

		const usersBackup = this.state.usersBackup.filter(u => {
			return u.id != user.id;
		});

		this.setState({ users, usersBackup });
	}

	mergeData(users, photos, albums, posts) {
		users.forEach(user => {
			user.posts = this.getNumberOfPosts(posts, user);
			user.albums = this.getNumberOfAlbums(albums, user);
			user.photos = this.getNumberOfPhotos(user, albums, photos);
			user.rideInGroup = this.getRideInGroup();
			user.daysOfTheWeek = this.getDayOfTheWeek();
		});
		return users;
	}

	getRandomInt(max, min = 0) {
		return Math.floor(min + Math.random() * (max - min));
	}

	getRandoDaysOfTheWeek() {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		let result = [];
		let max = this.getRandomInt(3, 1);
		for (let i = 0; i < max; i++) {
			let index = this.getRandomInt(days.length);
			result.push(days[index]);
		}
		return result.join(', ');
	}

	getNumberOfPosts(posts, user) {
		return posts.filter(post => post.userId === user.id).length;
	}

	getNumberOfAlbums(albums, user) {
		return albums.filter(album => album.userId === user.id).length;
	}

	getNumberOfPhotos(user, albums, photos) {
		let userAlbumList = albums.filter(album => album.userId === user.id);
		let numPhotos = 0;
		userAlbumList.forEach(album => {
			numPhotos += photos.filter(photo => photo.albumId === album.id).length;
		});
		return numPhotos;
	}

	getRideInGroup() {
		const options = ['Always', 'Sometimes', 'Never'];
		let index = this.getRandomInt(options.length);
		return options[index];
	}

	getDayOfTheWeek() {
		const options = ['Every day', 'Week days', 'Weekends', 'DAYS'];
		let index = this.getRandomInt(options.length);
		let result = options[index];
		if (result === 'DAYS') {
			return this.getRandoDaysOfTheWeek();
		}
		return result;
	}

	handleSubmit(user) {
		let { users } = this.state;
		users = [...users, user];
		this.setState({ users });
		this.setState({ usersBackup: users });
	}

	render() {
		const value = {
			...this.state,
			handleSubmit: this.handleSubmit,
			deleteUser: this.deleteUser,
			filterUsers: this.filterUsers
		};
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}

export { UserProvider, UserConsumer };
