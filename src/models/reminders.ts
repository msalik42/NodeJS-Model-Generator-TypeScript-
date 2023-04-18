import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface remindersAttributes {
    id?: number;
    createdBy?: number;
    documentId?: string;
    reminderDate?: Date;
    reminderText?: string;
    sentStatus?: number;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "reminders",
	timestamps: false 
})
export class reminders extends Model<remindersAttributes, remindersAttributes> implements remindersAttributes {

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
    	createdBy?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	documentId?: string;

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
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	sentStatus?: number;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}