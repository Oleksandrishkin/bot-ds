const config = require('./config.json');
const prefix = config.prefix;

function test(robot, mess, args) {
    mess.channel.send("Тест!")
}

function hello(robot, mess, args) {
    mess.reply("Привет!")
}

var comms_list = [{
        name: "test",
        out: test,
        about: "Тестовая команда"
    },
    {
        name: "hello",
        out: hello,
        about: "Команда для приветствия!"
    }
];

module.exports.comms = comms_list;
module.exports.prefix = prefix;