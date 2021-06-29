import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationNpm1624808263192 implements MigrationInterface {
    name = 'migrationNpm1624808263192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "votes" RENAME COLUMN "createAt" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createAt" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "subs" RENAME COLUMN "createAt" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "createAt" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_42377e3f89a203ca74d117e5961"`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "username" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "posts"."username" IS NULL`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_42377e3f89a203ca74d117e5961" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_42377e3f89a203ca74d117e5961"`);
        await queryRunner.query(`COMMENT ON COLUMN "posts"."username" IS NULL`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "username" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_42377e3f89a203ca74d117e5961" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "createdAt" TO "createAt"`);
        await queryRunner.query(`ALTER TABLE "subs" RENAME COLUMN "createdAt" TO "createAt"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createdAt" TO "createAt"`);
        await queryRunner.query(`ALTER TABLE "votes" RENAME COLUMN "createdAt" TO "createAt"`);
    }

}
