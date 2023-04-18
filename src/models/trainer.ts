import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface trainerAttributes {
    id?: number;
    userId?: string;
    fullName?: string;
    kinPhone?: string;
    relationship?: string;
    documentStatus?: number;
    accountStatus?: number;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "trainer",
	timestamps: false 
})
export class trainer extends Model<trainerAttributes, trainerAttributes> implements trainerAttributes {

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
    	name: "userId",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	userId?: string;

    @Column({
    	field: "full_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	fullName?: string;

    @Column({
    	field: "kin_phone",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	kinPhone?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	relationship?: string;

    @Column({
    	field: "document_status",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "NULL" 
    })
    	documentStatus?: number;

    @Column({
    	field: "account_status",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	accountStatus?: number;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}