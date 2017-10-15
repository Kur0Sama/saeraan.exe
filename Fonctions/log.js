module.exports = (type, msg) => {
    console.log(`[${type}] ${msg}`);
}

module.exports.config = {
    func: 'log',
};