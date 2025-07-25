export interface Database {
	user: UserTable,
	board: BoardTable
}

export interface UserTable {
	id: number,
	username: string,
	password: string,
	city: string,
	ip_addr: string,
	created_at: Date
}

export interface BoardTable {
	id: number,
	name: string,
	description: string,
	cover_img: string,
	user_id: number,
	is_deleted: boolean,
	created_at: Date,
	updated_at: Date
}

export interface FeedTable {

}
