export function authMiddlewares(req: any, res: any, next: any) {
    if(req.session?.usuario) { // se o usuário estiver logado
        return next();// continuar a request
    }

    return res.redirect('/user/login'); //se não volta para o login
}