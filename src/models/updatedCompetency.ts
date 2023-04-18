import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface updatedCompetencyAttributes {
    id?: number;
    competencyId?: string;
    competencyName?: string;
    elementNPerformanceCriteria?: string;
    performanceEvidence?: string;
    knowledgeEvidence?: string;
    assessmentConditions?: string;
    releaseNotes?: string;
    currentRelease?: string;
    releaseDate?: string;
    completed?: number;
    managed?: number;
    discarded?: number;
    isMerged?: number;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "updated_competency",
	timestamps: false 
})
export class updatedCompetency extends Model<updatedCompetencyAttributes, updatedCompetencyAttributes> implements updatedCompetencyAttributes {

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
    	field: "competency_id",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	competencyId?: string;

    @Column({
    	field: "competency_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	competencyName?: string;

    @Column({
    	field: "element_n_performance_criteria",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	elementNPerformanceCriteria?: string;

    @Column({
    	field: "performance_evidence",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	performanceEvidence?: string;

    @Column({
    	field: "knowledge_evidence",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	knowledgeEvidence?: string;

    @Column({
    	field: "assessment_conditions",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	assessmentConditions?: string;

    @Column({
    	field: "release_notes",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	releaseNotes?: string;

    @Column({
    	field: "current_release",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	currentRelease?: string;

    @Column({
    	field: "release_date",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	releaseDate?: string;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	completed?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	managed?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	discarded?: number;

    @Column({
    	field: "is_merged",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	isMerged?: number;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}