const bcrypt = require('bcrypt');
const userDB = require('../models/userDB');

const hashCompare = async (inputValue, hash) => {
    try {
        const isMatch = await bcrypt.compare(inputValue, hash);
        if (isMatch) return true;
        else return false;
    } catch(err) {
        console.error(err);
        return err;
    }
}

exports.loginCheck = async (req, res) => {
    const { userID, userPW } = req.body;

    try {
        const getUser = await userDB.getUser(userID);
        if (!getUser.length) {
            res.status(401).json('존재하지 않는 아이디입니다.');
            return;
        }

        const blobToStr = Buffer.from(getUser[0].userPW).toString();
        const isMatch = await hashCompare(userPW, blobToStr);

        if (!isMatch) {
            res.status(401).json('비밀번호가 일치하지 않습니다.');
            return;
        }
        res.status(200).json('로그인 성공');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }


}

exports.signup = async (req, res) => {
    try {
        // 일단은 요청이 오는지 확인만 하도록 작성
        console.log('회원가입 요청 데이터:', req.body);
        res.status(200).json('회원가입 기능은 준비 중입니다.');
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.kakaoAuth = async (req, res) => {
    try {
        const code = req.query.code;
        console.log("프론트에서 받은 카카오 인가 코드:", code);

        // 프론트엔드(Auth.jsx)가 response.data.userInfo를 찾고 있으므로
        // 아래처럼 반드시 'userInfo'라는 이름을 사용해야 합니다.
        res.status(200).json({
            result: true,
            userInfo: { 
                id: "test_user_123",
                properties: {
                    nickname: "준님", // 닉네임 정보
                    profile_image: ""
                }
            }
        });
    } catch (err) {
        console.error("에러 발생:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};