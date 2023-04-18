import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface staffAttributes {
    id?: number;
    userId?: string;
    employmentConditions?: string;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "staff",
	timestamps: false 
})
export class staff extends Model<staffAttributes, staffAttributes> implements staffAttributes {

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
    	field: "employment_conditions",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	employmentConditions?: string;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}