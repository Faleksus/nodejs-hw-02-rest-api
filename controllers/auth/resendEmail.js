const {User} = require('../../models/user');

const {RequestError, sendEmail} = require('../../helpers');

const {BASE_URL} = process.env;

const resendEmail = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if (!user || user.verify) {
        throw RequestError(404, 'Verification has already been passed');
    }
    const mail = {
        to: email,
        subject: 'Подтверждение регистрации',
        html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}">Подтвердить регистрацию</a>`,
    };
    await sendEmail(mail);

    res.json({
        message: 'Verification email sent',
    });
};

module.exports = resendEmail;