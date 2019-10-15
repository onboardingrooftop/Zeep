import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { JoinTable, ManyToMany } from "typeorm";
import UserRole from "./UserRole"


@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ unique: true, nullable: false })
    private name: string;

    @Column({ nullable: false })
    private pass: string;

    @ManyToMany(type => UserRole, role => role.getUsers)
    @JoinTable()
    private roles: UserRole[];

    @Column()
    private dni: number;

    @Column({ default: false, nullable: false })
    private blocked: boolean;

    @Column({ default: "", nullable: false })
    private email: string;
    

    public getId(): number {
        return this.id;
    }

    public getPass(): string {
        return this.pass;
    }

    public setPass(pass: string) {
        this.pass = pass;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getRoles(): UserRole[] {
        return this.roles;
    }

    public setRoles(roles: UserRole[]) {
        this.roles = roles;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number) {
        this.dni = dni;
    }

    public isBlocked(): boolean {
        return this.blocked;
    }

    public setBlocked(blocked: boolean) {
        this.blocked = blocked;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

}

export default User;
