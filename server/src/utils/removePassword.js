
const removePasswordUtil = (user) => {
    const { password, ...safeUser } = user._doc;
    return safeUser;
}

module.exports = { removePasswordUtil };
