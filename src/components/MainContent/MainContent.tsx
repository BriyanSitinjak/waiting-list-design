'use client'

import React, { useMemo, useState } from 'react'
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_SortingState,
  type MRT_PaginationState,
} from 'material-react-table'
import { Edit } from 'lucide-react'
import { TableType } from '../../types/global'

const dummyData: TableType[] = [
  {
    email: 'john.doe@example.com',
    phoneNumber: 1234567890,
    postCode: 12345,
    vendor: 'independent',
    serviceOffering: 'windowscleaning',
    signupDate: Date.now() - 86400000 * 5, // 5 days ago
    status: 'onboarded'
  },
  {
    email: 'jane.smith@example.com',
    phoneNumber: 9876543210,
    postCode: 54321,
    vendor: 'company',
    serviceOffering: 'housekeeping',
    signupDate: Date.now() - 86400000 * 3, // 3 days ago
    status: 'rejected'
  },
  {
    email: 'mike.wilson@example.com',
    phoneNumber: 5551234567,
    postCode: 67890,
    vendor: 'independent',
    serviceOffering: 'carValet',
    signupDate: Date.now() - 86400000 * 7, // 7 days ago
    status: 'onboarded'
  },
  {
    email: 'sarah.johnson@example.com',
    phoneNumber: 4445556666,
    postCode: 11111,
    vendor: 'company',
    serviceOffering: 'windowscleaning',
    signupDate: Date.now() - 86400000 * 2, // 2 days ago
    status: 'onboarded'
  },
  {
    email: 'david.brown@example.com',
    phoneNumber: 7778889999,
    postCode: 22222,
    vendor: 'independent',
    serviceOffering: 'housekeeping',
    signupDate: Date.now() - 86400000 * 10, // 10 days ago
    status: 'rejected'
  },
  {
    email: 'lisa.garcia@example.com',
    phoneNumber: 3334445555,
    postCode: 33333,
    vendor: 'company',
    serviceOffering: 'carValet',
    signupDate: Date.now() - 86400000 * 1, // 1 day ago
    status: 'onboarded'
  },
  {
    email: 'robert.miller@example.com',
    phoneNumber: 6667778888,
    postCode: 44444,
    vendor: 'independent',
    serviceOffering: 'windowscleaning',
    signupDate: Date.now() - 86400000 * 4, // 4 days ago
    status: 'rejected'
  },
  {
    email: 'emily.davis@example.com',
    phoneNumber: 9990001111,
    postCode: 55555,
    vendor: 'company',
    serviceOffering: 'housekeeping',
    signupDate: Date.now() - 86400000 * 6, // 6 days ago
    status: 'onboarded'
  }
]

const MainContent = () => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([])
  const [sorting, setSorting] = useState<MRT_SortingState>([])
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState<TableType | null>(null)

  const columns = useMemo<MRT_ColumnDef<TableType>[]>(
    () => [
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
        size: 150,
      },
      {
        accessorKey: 'postCode',
        header: 'Post Code',
        size: 120,
      },
      {
        accessorKey: 'vendor',
        header: 'Vendor Type',
        size: 150,
        filterVariant: 'select',
        filterSelectOptions: [
          { label: 'Independent', value: 'independent' },
          { label: 'Company', value: 'company' },
        ],
      },
      {
        accessorKey: 'serviceOffering',
        header: 'Service Offering',
        size: 180,
        filterVariant: 'multi-select',
        filterSelectOptions: [
          { label: 'Window Cleaning', value: 'windowscleaning' },
          { label: 'Housekeeping', value: 'housekeeping' },
          { label: 'Car Valet', value: 'carValet' },
        ],
      },
      {
        accessorKey: 'signupDate',
        header: 'Signup Date',
        size: 150,
        Cell: ({ cell }) => {
          const date = new Date(cell.getValue<number>())
          return date.toLocaleDateString()
        },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 120,
        filterVariant: 'multi-select',
        filterSelectOptions: [
          { label: 'Onboarded', value: 'onboarded' },
          { label: 'Rejected', value: 'rejected' },
        ],
        Cell: ({ cell }) => {
          const status = cell.getValue<string>()
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                status === 'onboarded'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          )
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        size: 100,
        enableColumnFilter: false,
        enableSorting: false,
        Cell: ({ row }) => (
          <button
            onClick={() => {
              setSelectedRow(row.original)
              setIsModalOpen(true)
            }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit size={16} className="text-gray-600" />
          </button>
        ),
      },
    ],
    []
  )

  const table = useMaterialReactTable({
    columns,
    data: dummyData,
    enableColumnFilterModes: false,
    enableColumnOrdering: false,
    enableGlobalFilter: false,
    enableColumnFilters: false,
    enableColumnActions: false,
    enableSorting: false,
    enableMultiSort: true,
    enablePagination: true,
    enableRowSelection: true,
    enableSelectAll: true,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    state: {
      columnFilters,
      sorting,
      pagination,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
    },
    paginationDisplayMode: 'pages',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
  })

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-[36px] font-normal text-[#12153A]'>Waitlist</h1>
      <div className='flex gap-4'>
        <div className='p-2 bg-[#C8D5D9] rounded-2xl'>
          <p className='font-medium text-[14px] text-[#4E4636]'>Service Providers</p>
        </div>
        <div className='p-2 rounded-2xl border-2 border-solid border-[#807664]'>
          <p className='font-medium text-[14px] text-[#4E4636]'>Customers</p>
        </div>
      </div>
      
      <div className='mt-4'>
        <MaterialReactTable table={table} />
      </div>
    </div>
  )
}

export default MainContent