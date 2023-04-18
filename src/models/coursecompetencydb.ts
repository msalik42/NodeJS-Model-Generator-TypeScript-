import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface coursecompetencydbAttributes {
    courseId: string;
    competencyId: string;
    essential?: string;
    createTime?: Date;
    updateTime?: Date;
}

@Table({
	tableName: "coursecompetencydb",
	timestamps: false 
})
export class coursecompetencydb extends Model<coursecompetencydbAttributes, coursecompetencydbAttributes> implements coursecompetencydbAttributes {

    @Column({
    	field: "course_id",
    	primaryKey: true,
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
    	primaryKey: true,
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

}