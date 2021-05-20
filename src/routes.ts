import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from "./repositories/UserRepository";

const routes = Router();

routes.post("/users", async (req, res) => {
    // req no body:
    const { city,
        colorBackground,
        colorDetails,
        colorFont } = req.body;

    const userRepository = getCustomRepository(UserRepository);

    // obj na tabela:
    const user = userRepository.create({
        city,
        colorBackground,
        colorDetails,
        colorFont
    });

    await userRepository.save(user);

    console.log(user);

    return res.json(user);
})



export { routes };

