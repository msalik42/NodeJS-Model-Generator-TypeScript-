import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface coursecompetencyAttributes {
    id?: number;
    courseId: string;
    competencyId: string;
    essential?: string;
    createTime?: Date;
    updateTime?: Date;
    sortedData?: string;
}

@Table({
	tableName: "coursecompetency",
	timestamps: false 
})
export class coursecompetency extends Model<coursecompetencyAttributes, coursecompetencyAttributes> implements coursecompetencyAttributes {

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
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "course_id_competency_id",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	courseId!: string;

    @Column({
    	field: "competency_id",
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "course_id_competency_id",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	competencyId!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	defaultValue: "NULL" 
    })
    	essential?: string;

    @Column({
    	field: "create_time",
    	type: DataType.DATE,
    	defaultValue: "current_timestamp()" 
    })
    	createTime?: Date;

    @Column({
    	field: "update_time",
    	type: DataType.DATE,
    	defaultValue: "current_timestamp()" 
    })
    	updateTime?: Date;

    @Column({
    	field: "sorted_data",
    	allowNull: true,
    	type: DataType.STRING,
    	defaultValue: "NULL" 
    })
    	sortedData?: string;

}