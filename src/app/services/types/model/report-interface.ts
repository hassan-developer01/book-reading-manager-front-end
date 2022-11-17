interface ReportInterface {
  id: number,
  book_id: number,
  start_time: string,
  stop_time: string,
  to_page: string,
  description: string,
  finished: boolean,
  created_at: string,
  updated_at: string
}

export default ReportInterface