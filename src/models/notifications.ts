import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface notificationsAttributes {
    id?: number;
    courseId?: string;
    courseName?: string;
    type?: string;
    activity: string;
    isRead?: number;
    createdAt: Date;
    updatedAt: Date;
    status?: number;
}

@Table({
	tableName: "notifications",
	timestamps: false 
})
export class notifications extends Model<notificationsAttributes, notificationsAttributes> implements notificationsAttributes {

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
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	type?: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	activity!: string;

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

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT,
    	defaultValue: "1" 
    })
    	status?: number;

}