import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class Users {

    @PrimaryColumn()
    name: string;

    @Column()
    colorBackground: string;

    @Column()
    colorDetails: string;

    @Column()
    colorFont: string;

    @Column()
    city: string;

    constructor() {
        if (!this.name)
            this.name = uuid();
    }
}


export { Users };

