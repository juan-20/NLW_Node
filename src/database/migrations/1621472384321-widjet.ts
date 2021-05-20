import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class widjet1621472384321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        //cria a tabela
        await queryRunner.createTable(new Table({
            //nome dela
            name: 'users',
            //cada {} é uma linha da coluna
            columns: [
                {
                    name: 'name',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'colorBackground',
                    type: 'string',
                },
                {
                    name: 'colorDetails',
                    type: 'string',
                },
                {
                    name: 'colorFont',
                    type: 'string',
                },
                {
                    name: 'city',
                    type: 'string',
                },
            ],

        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('users');

    }

}
