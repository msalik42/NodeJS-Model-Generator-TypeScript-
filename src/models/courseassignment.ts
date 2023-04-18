import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface courseassignmentAttributes {
    id?: number;
    courseId?: string;
    courseName?: string;
    userId?: string;
    userName?: string;
    assignedby?: string;
    isApproved?: number;
    isDeclined?: number;
    feedback?: string;
    createdAt: Date;
    updatedAt: Date;
    isSubmitted?: number;
}

@Table({
	tableName: "courseassignment",
	timestamps: false 
})
export class courseassignment extends Model<courseassignmentAttributes, courseassignmentAttributes> implements courseassignmentAttributes {

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
    	field: "course_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	courseName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	userName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	assignedby?: string;

    @Column({
    	field: "is_approved",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	isApproved?: number;

    @Column({
    	field: "is_declined",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	isDeclined?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	feedback?: string;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

    @Column({
    	field: "is_submitted",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	isSubmitted?: number;

}