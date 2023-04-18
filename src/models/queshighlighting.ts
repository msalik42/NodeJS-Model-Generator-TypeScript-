import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface queshighlightingAttributes {
    id?: number;
    courseId?: string;
    competencyId?: string;
    ques?: string;
    courseRelease?: string;
    competencyRelease?: string;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "queshighlighting",
	timestamps: false 
})
export class queshighlighting extends Model<queshighlightingAttributes, queshighlightingAttributes> implements queshighlightingAttributes {

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
    	field: "course_id",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	courseId?: string;

    @Column({
    	field: "competency_id",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	competencyId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	ques?: string;

    @Column({
    	field: "course_release",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	courseRelease?: string;

    @Column({
    	field: "competency_release",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	competencyRelease?: string;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}