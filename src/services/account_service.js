import axios from 'axios';

export default {
    async login(email, password){
        let response = await axios.post("users/sign_in", { user: { email: email, password: password } });
        return response.data;
    },

    async signUp(name, email, password, passwordConfirmation){
        let response = await axios.post("users", {user: {name: name, email: email, password: password, 
            passwordConfirmation: passwordConfirmation}});
        return response;
    }
}