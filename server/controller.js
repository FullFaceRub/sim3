module.exports = {
    editProfile: (req,res)=>{
        const {auth_id} = req.user;
        const {first_name, last_name, gender, hobby, hair_color, eye_color, birthday_day, birthday_month, birthday_year} = req.params;
        const db = req.app.get('db');

        db.edit_profile([first_name, last_name, gender, hobby, hair_color, eye_color, birthday_day, birthday_month, birthday_year, auth_id])
        .then((editedUser)=>{
            res.status(200).send(category)
        }).catch(console.log('Server error code 500'))
    },

    getFriends: (req,res)=>{
        const sort = req.params;
        const db = req.app.get('db');

        db.sort_users([sort])
        .then((users)=>{
            res.status(200).send(users)
        }).catch(console.log('Server error code 404'))
    }
}