import { EntityRepository, Repository } from "typeorm";
import { Users } from "../entities/User";

@EntityRepository(Users)
class UserRepository extends Repository<Users>{

}

export { UserRepository };

