import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
	email: string,
	password: string;
}

@Table({ tableName: "user" })
export class User extends Model<User, UserCreationAttrs> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	email: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password: string;

	@Column({
		type: DataType.BOOLEAN,
		defaultValue: false,
	})
	banner: boolean;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	banReason: string;
}
