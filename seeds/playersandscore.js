const {PlayerName} = require('../models/');

const playerAndScore = [
    {
        player_name: "testname",
        players_score: 2,
    }
]

const seedPlayerName = () => PlayerName.bulkCreate(playerAndScore);

module.exports = seedPlayerName