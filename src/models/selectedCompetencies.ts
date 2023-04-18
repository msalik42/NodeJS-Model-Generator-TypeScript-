import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface selectedCompetenciesAttributes {
    id?: number;
    courseId?: string;
    competencyId?: string;
    essential?: string;
    completed?: number;
}

@Table({
	tableName: "selected_competencies",
	timestamps: false 
})
export class selectedCompetencies extends Model<selectedCompetenciesAttributes, selectedCompetenciesAttributes> implements selectedCompetenciesAttributes {

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
    	essential?: string;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	completed?: number;

}