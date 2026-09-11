import User from "../models/User.js";
import userService from "../services/usersService.js";

const userController = {
    Selection: async (req, res) => {
        try {
            const resultado = await userService.recoverUser();

            res.status(200).json({
                message: "Usuario recuperados com sucesso.",
                data: resultado
            })
        }
        catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar usuários.",
                data: error.message
            });

        }
    },
    create: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const hashedpassword = await userService.hashPassword(password);

            const user = new User(name, email, password, null);
            const result = await userService.createUser(user);

            return res.status(201).json({
                message: "Usuario criado com sucesso",
                data: result
            })
        }
        catch (error){
            console.error(error);
            return res.status(500).json({
                message: "Error ao criar usuário",
                data: error.message
            }); 


        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            
            const result = await userService.deleteUser(id);
            return res.status(201).json({
                message: "Usuario deletado com sucesso",
                data: result
            })
        }
        catch (error) {
               return res.status(500).json({
                message: "Erro ao deletar usuario",
                data: error.message

            })
        }
    },
    update: async (req,res) =>{
        try{ 
            const id = req.params.id
            const { name, email, password } = req.body;



            const user = new User(name, email, password, id);
            const result = await userService.updateUser(user);

            return res.status(201).json({
                messagem: "Usuario ataualizado com sucesso",
                data: result
            });
        }
        catch(error){
            console.error(error)
            return res.status(500).json({
                messagem: "Erro ao ataulizar o usuario",
                data: error.message
            });

        }
    }
}


export default userController;