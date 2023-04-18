import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface documentsAttributes {
    id?: number;
    userId?: number;
    type?: string;
    documentName?: string;
    filePath?: string;
    reminderDate?: Date;
    reminderText?: string;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "documents",
	timestamps: false 
})
export class documents extends Model<documentsAttributes, documentsAttributes> implements documentsAttributes {

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
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "NULL" 
    })
    	userId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	type?: string;

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
    	field: "reminder_date",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: "NULL" 
    })
    	reminderDate?: Date;

    @Column({
    	field: "reminder_text",
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	reminderText?: string;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}