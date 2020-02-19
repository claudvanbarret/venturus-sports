import api from '../services/api';
import { mergeData } from '../helpers/users';

class UserService {
    async getUsers() {
        try {
            const userResponse = await api.get('/users');
            const photosResponse = await api.get('/photos');
            const albumsResponse = await api.get('/albums');
            const postsResponse = await api.get('/posts');

            const users = mergeData(userResponse.data, photosResponse.data, albumsResponse.data, postsResponse.data);

            return users;
        } catch (error) {
            throw error;
        }
    }
}

export default new UserService();