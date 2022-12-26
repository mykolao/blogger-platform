export interface IApiResponse<TItemList> {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: TItemList;
}
