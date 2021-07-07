const messages = [
    "Esteban",
    "Catalina",
    "Camilo",
    "Francy",
    "Sebastian",
    "Santiago",
    "Lina",
    "Natalia",
    "Nelson",
    "Luz",
    "Marina",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {
    randomMsg,
};
