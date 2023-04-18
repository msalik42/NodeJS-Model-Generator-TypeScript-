import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface rolesAttributes {
    id?: number;
    code?: string;
    roleName?: string;
    updates?: number;
    setupQualifications?: number;
    manage?: number;
    courses?: number;
    releases?: number;
    notifications?: number;
    roleManagement?: number;
    account?: number;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "roles",
	timestamps: false 
})
export class roles extends Model<rolesAttributes, rolesAttributes> implements rolesAttributes {

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
    	code?: string;

    @Column({
    	field: "role_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	roleName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "NULL" 
    })
    	updates?: number;

    @Column({
    	field: "setup_qualifications",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "NULL" 
    })
    	setupQualifications?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "NULL" 
    })
    	manage?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "NULL" 
    })
    	courses?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "NULL" 
    })
    	releases?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "NULL" 
    })
    	notifications?: number;

    @Column({
    	field: "role_management",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "NULL" 
    })
    	roleManagement?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "NULL" 
    })
    	account?: number;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}