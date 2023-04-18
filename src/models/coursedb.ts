import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface coursedbAttributes {
    id?: number;
    courseId: string;
    courseName?: string;
    qualificationDescription?: string;
    entryRequirements?: string;
    packagingRules?: string;
    releaseNotes?: string;
    currentRelease?: string;
    releaseDate?: string;
    usageRecommendation?: string;
    isModified?: number;
    status?: number;
    competencyListStatus?: number;
    competencyCount?: number;
}

@Table({
	tableName: "coursedb",
	timestamps: false 
})
export class coursedb extends Model<coursedbAttributes, coursedbAttributes> implements coursedbAttributes {

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
    	type: DataType.STRING(20) 
    })
    @Index({
    	name: "course_id",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	courseId!: string;

    @Column({
    	field: "course_name",
    	type: DataType.STRING(200),
    	defaultValue: "''" 
    })
    	courseName?: string;

    @Column({
    	field: "qualification_description",
    	type: DataType.STRING(10000),
    	defaultValue: "''" 
    })
    	qualificationDescription?: string;

    @Column({
    	field: "entry_requirements",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	entryRequirements?: string;

    @Column({
    	field: "packaging_rules",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	packagingRules?: string;

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
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	currentRelease?: string;

    @Column({
    	field: "release_date",
    	type: DataType.STRING(20),
    	defaultValue: "''" 
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
    	field: "is_modified",
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	isModified?: number;

    @Column({
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	status?: number;

    @Column({
    	field: "competency_list_status",
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	competencyListStatus?: number;

    @Column({
    	field: "competency_count",
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	competencyCount?: number;

}