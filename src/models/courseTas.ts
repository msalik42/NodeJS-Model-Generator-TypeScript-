import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface courseTasAttributes {
    id?: number;
    courseId?: string;
    section_1?: string;
    section_2?: string;
    section_3?: string;
    section_4?: string;
    tasSubmitted?: number;
    section_5?: string;
    section_6?: string;
    tasReviewSubmitted?: number;
    userId?: string;
    approverId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "course_tas",
	timestamps: false 
})
export class courseTas extends Model<courseTasAttributes, courseTasAttributes> implements courseTasAttributes {

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
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	section_1?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	section_2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	section_3?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	section_4?: string;

    @Column({
    	field: "tas_submitted",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	tasSubmitted?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	section_5?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	section_6?: string;

    @Column({
    	field: "tas_review_submitted",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	tasReviewSubmitted?: number;

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
    	approverId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: "NULL" 
    })
    	createdAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: "NULL" 
    })
    	updatedAt?: Date;

}