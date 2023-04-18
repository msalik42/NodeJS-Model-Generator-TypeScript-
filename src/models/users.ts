import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface usersAttributes {
    id?: number;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    createdAt: Date;
    updatedAt: Date;
    address?: string;
    phoneNumber?: string;
    designation?: string;
    abn?: string;
    status?: number;
}

@Table({
	tableName: "users",
	timestamps: false 
})
export class users extends Model<usersAttributes, usersAttributes> implements usersAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    @Index({
    	name: "email",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	email?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	password?: string;

    @Column({
    	field: "first_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	firstName?: string;

    @Column({
    	field: "last_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	lastName?: string;

    @Column({
    	type: DataType.DECIMAL(10),
    	defaultValue: "0" 
    })
    	role?: string;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	address?: string;

    @Column({
    	field: "phone_number",
    	allowNull: true,
    	type: DataType.STRING(150),
    	defaultValue: "NULL" 
    })
    	phoneNumber?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(150),
    	defaultValue: "NULL" 
    })
    	designation?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	abn?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "1" 
    })
    	status?: number;

}