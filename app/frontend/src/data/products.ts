import { IProductApprovalInfo } from '@/types'

const productData: { items: IProductApprovalInfo[] } = {
  items: [
    {
      id: '1',
      createdBy: 'Nguyễn Văn A',
      commanderApprovalStatus: 'approved',
      commanderApprovalContent: 'Đã duyệt',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Đã duyệt',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Đã duyệt',
      notes: 'Ghi chú 1',
      createdAt: '2021-09-01',
      updatedAt: '2021-09-02'
    },
    {
      id: '2',
      createdBy: 'Lê Văn B',
      commanderApprovalStatus: 'pending',
      commanderApprovalContent: 'Đang xem xét',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Đã duyệt',
      directorApprovalStatus: 'rejected',
      directorApprovalContent: 'Không đồng ý',
      notes: 'Yêu cầu bổ sung chi tiết',
      createdAt: '2021-09-03',
      updatedAt: '2021-09-04'
    },
    {
      id: '3',
      createdBy: 'Trần Thị C',
      commanderApprovalStatus: 'rejected',
      commanderApprovalContent: 'Không phù hợp',
      projectManagerApprovalStatus: 'pending',
      projectManagerApprovalContent: 'Đang xử lý',
      directorApprovalStatus: 'pending',
      directorApprovalContent: 'Chờ quyết định',
      notes: 'Cần thêm thông tin',
      createdAt: '2021-09-05',
      updatedAt: '2021-09-06'
    },
    {
      id: '4',
      createdBy: 'Phạm Văn D',
      commanderApprovalStatus: 'approved',
      commanderApprovalContent: 'Duyệt nhanh',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Đồng ý',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Phê duyệt',
      notes: 'Không có ý kiến',
      createdAt: '2021-09-07',
      updatedAt: '2021-09-08'
    },
    {
      id: '5',
      createdBy: 'Nguyễn Thị E',
      commanderApprovalStatus: 'pending',
      commanderApprovalContent: 'Đang kiểm tra',
      projectManagerApprovalStatus: 'pending',
      projectManagerApprovalContent: 'Chờ xử lý',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Đã duyệt',
      notes: 'Chờ thêm thông tin',
      createdAt: '2021-09-09',
      updatedAt: '2021-09-10'
    },
    {
      id: '6',
      createdBy: 'Đinh Văn F',
      commanderApprovalStatus: 'approved',
      commanderApprovalContent: 'Duyệt',
      projectManagerApprovalStatus: 'rejected',
      projectManagerApprovalContent: 'Không đồng ý',
      directorApprovalStatus: 'pending',
      directorApprovalContent: 'Chờ phản hồi',
      notes: 'Cần điều chỉnh',
      createdAt: '2021-09-11',
      updatedAt: '2021-09-12'
    },
    {
      id: '7',
      createdBy: 'Lê Thành G',
      commanderApprovalStatus: 'pending',
      commanderApprovalContent: 'Đang xem xét',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Xác nhận',
      directorApprovalStatus: 'rejected',
      directorApprovalContent: 'Không đồng ý',
      notes: 'Ghi chú thêm',
      createdAt: '2021-09-13',
      updatedAt: '2021-09-14'
    },
    {
      id: '8',
      createdBy: 'Nguyễn Văn H',
      commanderApprovalStatus: 'approved',
      commanderApprovalContent: 'Phê duyệt',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Duyệt',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Đã xác nhận',
      notes: 'Ghi chú 8',
      createdAt: '2021-09-15',
      updatedAt: '2021-09-16'
    },
    {
      id: '9',
      createdBy: 'Trần Thị I',
      commanderApprovalStatus: 'rejected',
      commanderApprovalContent: 'Không phù hợp',
      projectManagerApprovalStatus: 'pending',
      projectManagerApprovalContent: 'Đang xem xét',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Đồng ý',
      notes: 'Không cần chỉnh sửa',
      createdAt: '2021-09-17',
      updatedAt: '2021-09-18'
    },
    {
      id: '10',
      createdBy: 'Ngô Văn J',
      commanderApprovalStatus: 'pending',
      commanderApprovalContent: 'Chờ phản hồi',
      projectManagerApprovalStatus: 'rejected',
      projectManagerApprovalContent: 'Không duyệt',
      directorApprovalStatus: 'pending',
      directorApprovalContent: 'Đang xử lý',
      notes: 'Bổ sung thêm thông tin',
      createdAt: '2021-09-19',
      updatedAt: '2021-09-20'
    },
    {
      id: '11',
      createdBy: 'Lê Văn K',
      commanderApprovalStatus: 'approved',
      commanderApprovalContent: 'Duyệt',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Đã duyệt',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Xác nhận',
      notes: 'Ghi chú 11',
      createdAt: '2021-09-21',
      updatedAt: '2021-09-22'
    },
    {
      id: '12',
      createdBy: 'Nguyễn Thị L',
      commanderApprovalStatus: 'pending',
      commanderApprovalContent: 'Đang xem xét',
      projectManagerApprovalStatus: 'pending',
      projectManagerApprovalContent: 'Chờ phản hồi',
      directorApprovalStatus: 'pending',
      directorApprovalContent: 'Đang xử lý',
      notes: 'Yêu cầu thêm dữ liệu',
      createdAt: '2021-09-23',
      updatedAt: '2021-09-24'
    },
    {
      id: '13',
      createdBy: 'Phạm Văn M',
      commanderApprovalStatus: 'rejected',
      commanderApprovalContent: 'Không phù hợp',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Đã duyệt',
      directorApprovalStatus: 'pending',
      directorApprovalContent: 'Chờ quyết định',
      notes: 'Ghi chú thêm',
      createdAt: '2021-09-25',
      updatedAt: '2021-09-26'
    },
    {
      id: '14',
      createdBy: 'Trần Văn N',
      commanderApprovalStatus: 'approved',
      commanderApprovalContent: 'Phê duyệt',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Xác nhận',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Phê duyệt',
      notes: 'Không có vấn đề',
      createdAt: '2021-09-27',
      updatedAt: '2021-09-28'
    },
    {
      id: '15',
      createdBy: 'Lê Thị O',
      commanderApprovalStatus: 'pending',
      commanderApprovalContent: 'Đang xem xét',
      projectManagerApprovalStatus: 'pending',
      projectManagerApprovalContent: 'Chờ xử lý',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Xác nhận',
      notes: 'Chờ thêm thông tin',
      createdAt: '2021-09-29',
      updatedAt: '2021-09-30'
    },
    {
      id: '16',
      createdBy: 'Nguyễn Văn P',
      commanderApprovalStatus: 'approved',
      commanderApprovalContent: 'Duyệt',
      projectManagerApprovalStatus: 'rejected',
      projectManagerApprovalContent: 'Không duyệt',
      directorApprovalStatus: 'pending',
      directorApprovalContent: 'Chờ phản hồi',
      notes: 'Cần điều chỉnh thêm',
      createdAt: '2021-10-01',
      updatedAt: '2021-10-02'
    },
    {
      id: '17',
      createdBy: 'Trần Thị Q',
      commanderApprovalStatus: 'approved',
      commanderApprovalContent: 'Phê duyệt',
      projectManagerApprovalStatus: 'approved',
      projectManagerApprovalContent: 'Duyệt',
      directorApprovalStatus: 'approved',
      directorApprovalContent: 'Xác nhận',
      notes: 'Ghi chú 17',
      createdAt: '2021-10-03',
      updatedAt: '2021-10-04'
    },
    {
      id: '18',
      createdBy: 'Ngô Văn R',
      commanderApprovalStatus: 'pending',
      commanderApprovalContent: 'Chờ quyết định',
      projectManagerApprovalStatus: 'rejected',
      projectManagerApprovalContent: 'Không đồng ý',
      directorApprovalStatus: 'pending',
      directorApprovalContent: 'Chờ xử lý',
      notes: 'Ghi chú thêm',
      createdAt: '2021-10-12',
      updatedAt: '2021-10-13'
    }
  ]
}

export default productData