import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface releasesAttributes {
    id?: number;
    courseId?: string;
    courseName?: string;
    qualificationDescription?: string;
    entryRequirements?: string;
    packagingRules?: string;
    releaseNotes?: string;
    currentRelease?: string;
    releaseDate?: string;
    discarded?: number;
    completed?: number;
    isMerged?: number;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "releases",
	timestamps: false 
})
export class releases extends Model<releasesAttributes, releasesAttributes> implements releasesAttributes {

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
    	field: "qualification_description",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
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
    	discarded?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	completed?: number;

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