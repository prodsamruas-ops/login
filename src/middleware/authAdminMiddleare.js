async function authAdminMiddleare(req, res, next) {
    if(!req.user || req.user.role != "admin"){
        return res.status(401).json({
            message: "Acesso negado."
        });
    }
   next(); 
}

export default authAdminMiddleare;