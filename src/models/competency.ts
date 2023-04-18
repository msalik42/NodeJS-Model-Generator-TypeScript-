import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface competencyAttributes {
    id?: number;
    competencyId: string;
    competencyName?: string;
    elementNPerformanceCriteria?: string;
    performanceEvidence?: string;
    knowledgeEvidence?: string;
    assessmentConditions?: string;
    releaseNotes?: string;
    currentRelease?: string;
    releaseDate?: string;
    usageRecommendation?: string;
    isHomeCompetency?: number;
    status?: number;
    completed?: number;
    createdAt?: Date;
    updatedAt?: Date;
    managed?: number;
    discarded?: number;
    isMerged?: number;
    highlighted: number;
}

@Table({
	tableName: "competency",
	timestamps: false 
})
export class competency extends Model<competencyAttributes, competencyAttributes> implements competencyAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT 
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
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "competency_id",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	competencyId!: string;

    @Column({
    	field: "competency_name",
    	allowNull: true,
    	type: DataType.STRING(200),
    	defaultValue: "NULL" 
    })
    	competencyName?: string;

    @Column({
    	field: "element_n_performance_criteria",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	elementNPerformanceCriteria?: string;

    @Column({
    	field: "performance_evidence",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	performanceEvidence?: string;

    @Column({
    	field: "knowledge_evidence",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	knowledgeEvidence?: string;

    @Column({
    	field: "assessment_conditions",
    	allowNull: true,
    	type: DataType.STRING(20000),
    	defaultValue: "NULL" 
    })
    	assessmentConditions?: string;

    @Column({
    	field: "release_notes",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	releaseNotes?: string;

    @Column({
    	field: "current_release",
    	allowNull: true,
    	type: DataType.STRING(50),
    	defaultValue: "NULL" 
    })
    	currentRelease?: string;

    @Column({
    	field: "release_date",
    	allowNull: true,
    	type: DataType.STRING(155),
    	defaultValue: "NULL" 
    })
    	releaseDate?: string;

    @Column({
    	field: "usage_recommendation",
    	allowNull: true,
    	type: DataType.STRING(50),
    	defaultValue: "NULL" 
    })
    	usageRecommendation?: string;

    @Column({
    	field: "is_home_competency",
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	isHomeCompetency?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	status?: number;

    @Column({
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	completed?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: "current_timestamp()" 
    })
    	createdAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: "NULL" 
    })
    	updatedAt?: Date;

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
    	type: DataType.TINYINT 
    })
    	highlighted!: number;

}