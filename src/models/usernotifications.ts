import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface usernotificationsAttributes {
    id?: number;
    courseId?: string;
    userId?: string;
    title?: string;
    message?: string;
    isRead?: number;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "usernotifications",
	timestamps: false 
})
export class usernotifications extends Model<usernotificationsAttributes, usernotificationsAttributes> implements usernotificationsAttributes {

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
    	field: "user_id",
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
    	title?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	message?: string;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	isRead?: number;

    @Column({
    	type: DataType.DATE 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}