export interface Database {
	user: UserTable
}

export interface UserTable {
	id: number,
	username: string,
	password: string,
	location: string,
	ip_addr: string,
	created_at: Date
}
