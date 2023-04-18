import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface oldCompetencyQuestionsAttributes {
    id?: number;
    courseId?: string;
    competencyId?: string;
    release?: string;
    section?: number;
    heading?: string;
    question?: string;
    answer?: string;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "old_competency_questions",
	timestamps: false 
})
export class oldCompetencyQuestions extends Model<oldCompetencyQuestionsAttributes, oldCompetencyQuestionsAttributes> implements oldCompetencyQuestionsAttributes {

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
    	release?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "NULL" 
    })
    	section?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	heading?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	question?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	answer?: string;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}