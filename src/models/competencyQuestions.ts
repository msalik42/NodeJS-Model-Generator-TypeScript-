import {
    Model,
    Table,
    Column,
    DataType,
    Index,
    Sequelize,
    ForeignKey,
} from "sequelize-typescript";

export interface competencyQuestionsAttributes {
    id?: number;
    courseId: string;
    competencyId?: string;
    currentRelease?: string;
    section?: number;
    heading?: string;
    question?: string;
    answer?: string;
    createdAt: Date;
    updatedAt: Date;
    isCombined?: number;
    isChild?: number;
    isTheory?: number;
}

@Table({
    tableName: "competency_questions",
    timestamps: false,
})
export class competencyQuestions
    extends Model<competencyQuestionsAttributes, competencyQuestionsAttributes>
    implements competencyQuestionsAttributes
{
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    @Index({
        name: "PRIMARY",
        using: "BTREE",
        order: "ASC",
        unique: true,
    })
    id?: number;

    @Column({
        field: "course_id",
        type: DataType.STRING(255),
    })
    courseId!: string;

    @Column({
        field: "competency_id",
        allowNull: true,
        type: DataType.STRING(255),
        defaultValue: "NULL",
    })
    competencyId?: string;

    @Column({
        field: "current_release",
        allowNull: true,
        type: DataType.STRING(255),
        defaultValue: "NULL",
    })
    currentRelease?: string;

    @Column({
        allowNull: true,
        type: DataType.INTEGER,
        defaultValue: "NULL",
    })
    section?: number;

    @Column({
        allowNull: true,
        type: DataType.STRING,
        defaultValue: "NULL",
    })
    heading?: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
        defaultValue: "NULL",
    })
    question?: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
        defaultValue: "NULL",
    })
    answer?: string;

    @Column({
        type: DataType.DATE,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
    })
    updatedAt!: Date;

    @Column({
        field: "is_combined",
        allowNull: true,
        type: DataType.TINYINT,
        defaultValue: "0",
    })
    isCombined?: number;

    @Column({
        field: "is_child",
        allowNull: true,
        type: DataType.TINYINT,
        defaultValue: "0",
    })
    isChild?: number;

    @Column({
        field: "is_theory",
        allowNull: true,
        type: DataType.TINYINT,
        defaultValue: "0",
    })
    isTheory?: number;
}
