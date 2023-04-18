import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface courseApendenciesAttributes {
    id?: number;
    courseId?: string;
    documentName?: string;
    filePath?: string;
    createdAt: Date;
    updatedAt: Date;
    isVisible?: number;
    competencyId?: string;
}

@Table({
	tableName: "course_apendencies",
	timestamps: false 
})
export class courseApendencies extends Model<courseApendenciesAttributes, courseApendenciesAttributes> implements courseApendenciesAttributes {

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
    	field: "document_name",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	documentName?: string;

    @Column({
    	field: "file_path",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	filePath?: string;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

    @Column({
    	field: "is_visible",
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	isVisible?: number;

    @Column({
    	field: "competency_id",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	competencyId?: string;

}