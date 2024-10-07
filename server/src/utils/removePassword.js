
const removePasswordUtil = (user) => {
    // const { password, ...safeUser } = user._doc;
    // return safeUser;
    const {_id, firstName, lastName, userName, email, role, phoneNumber, bio, createdAt} = user._doc;
    const safeUser = {_id, firstName, lastName, userName, email, role, phoneNumber, bio, createdAt};
    return safeUser;
}

module.exports = { removePasswordUtil };
