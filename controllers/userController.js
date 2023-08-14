const { User, Thought } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .populate('thoughts')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(500).json(err));
    },

    getUserById({ params }, res) {
        User.findById(params.id)
            .populate('thoughts')
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User not found.' });
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    updateUser({ params, body }, res) {
        User.findByIdAndUpdate(params.id, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User not found.' });
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    deleteUser({ params }, res) {
        User.findByIdAndDelete(params.id)
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User not found.' });
                }
                // Delete the user's associated thoughts
                return Thought.deleteMany({ username: dbUserData.username });
            })
            .then(() => {
                res.json({ message: 'User and associated thoughts deleted.' });
            })
            .catch(err => res.status(400).json(err));
    },    
    
    addFriend({ params }, res) {
        User.findByIdAndUpdate(params.userId, { $addToSet: { friends: params.friendId } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User not found.' });
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(500).json(err));
    },

    removeFriend({ params }, res) {
        User.findByIdAndUpdate(params.userId, { $pull: { friends: params.friendId } }, { new: true })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    }
};

module.exports = userController;
