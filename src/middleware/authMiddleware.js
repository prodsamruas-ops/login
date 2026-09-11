import jwt from 'jsonwebtoken';
import 'dotenv/config';

async function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message:"Token não informado.",
        })
    }

    const token = authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // A váriavel decoded está buscando verificar o JWT/Token.
        req.user = decoded; // req.user se o usuario for igual a decoded ele pode avançar
        next(); // next faz com que ele avance pelo middleware.
    }
    catch(error){
        console.error(error);
        return res.status(401).json({message: "Token Inválido."});
    }
}

export default authMiddleware;