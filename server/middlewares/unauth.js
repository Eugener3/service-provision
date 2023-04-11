module.exports =  {
    valid: async (req, res, next) => {
        if(req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization
            if (token) {
                return res.status(403).json({message: "Пользователь авторизован"})
            }
            else {
                next()
            }
            // const decodedData = jwt.verify(token, secret)
            // req.user = decodedData

        } catch (error) {
            return res.status(403).json(error)
        }
    },

}